/**
 * calendar.js
 * Church calendar calculations: liturgical season, week, and year.
 */

'use strict';

/**
 * Compute Easter Sunday for a given year using the
 * Meeus/Jones/Butcher algorithm.
 */
function easterForYear(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-indexed
  const day   = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
}

/** Return a new Date offset by `days` days. */
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/** True if two Dates fall on the same calendar day. */
function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth()    === b.getMonth()    &&
    a.getDate()     === b.getDate()
  );
}

/**
 * Count whole calendar days from `earlier` to `later`.
 * Uses UTC noon to avoid DST ambiguity — gives the same answer
 * on every reload, in every timezone.
 */
function daysBetween(earlier, later) {
  const e = Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate(), 12);
  const l = Date.UTC(later.getFullYear(),   later.getMonth(),   later.getDate(),   12);
  return Math.round((l - e) / 864e5);
}

/**
 * Return the first day of Advent for the given *civil* year.
 * Advent begins on the Sunday nearest November 30.
 */
function adventStart(year) {
  const nov30 = new Date(year, 10, 30); // Nov 30
  const dow = nov30.getDay(); // 0 = Sunday
  // Move to nearest Sunday
  const offset = dow <= 3 ? -dow : 7 - dow;
  return addDays(nov30, offset);
}

/**
 * Return the key liturgical dates for a given civil year.
 */
function keyDates(year) {
  const easter      = easterForYear(year);
  const ashWed      = addDays(easter, -46);
  const palmSunday  = addDays(easter, -7);
  const holyThurs   = addDays(easter, -3);
  const goodFriday  = addDays(easter, -2);
  const holySat     = addDays(easter, -1);
  const ascension   = addDays(easter, 39);
  const pentecost   = addDays(easter, 49);
  const trinity     = addDays(easter, 56);
  const advent      = adventStart(year);
  const christmas   = new Date(year, 11, 25);
  const epiphany    = new Date(year, 0, 6);  // Jan 6
  return {
    easter, ashWed, palmSunday, holyThurs, goodFriday, holySat,
    ascension, pentecost, trinity, advent, christmas, epiphany
  };
}

/**
 * Given a Date, return liturgical information:
 *   { season, weekNumber, dayIndex, liturgicalYear }
 *
 * season values: 'Advent' | 'Christmas' | 'Epiphany' | 'Lent' |
 *                'Holy Week' | 'Easter' | 'Ordinary Time'
 */
function getLiturgicalInfo(date) {
  // Normalize to midnight local
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const year = d.getFullYear();

  const cur  = keyDates(year);
  const prev = keyDates(year - 1);

  // ── Advent (current year: starts cur.advent, ends Dec 24) ──
  const christmas = new Date(year, 11, 25);
  const dec24     = new Date(year, 11, 24);
  if (d >= cur.advent && d <= dec24) {
    const dayIndex   = daysBetween(cur.advent, d);
    const weekNumber = Math.floor(dayIndex / 7) + 1;
    return { season: 'Advent', weekNumber, dayIndex, liturgicalYear: liturgicalYear(year + 1) };
  }

  // ── Christmas (Dec 25 – Jan 5) ──
  const prevChristmas = new Date(year - 1, 11, 25);
  if (sameDay(d, christmas) || (d.getMonth() === 11 && d.getDate() === 25)) {
    return { season: 'Christmas', weekNumber: 1, dayIndex: 0, liturgicalYear: liturgicalYear(year) };
  }
  if (d.getMonth() === 0 && d.getDate() <= 5) {
    const dayIndex = daysBetween(prevChristmas, d);
    return { season: 'Christmas', weekNumber: 1, dayIndex, liturgicalYear: liturgicalYear(year) };
  }

  // ── Epiphany (Jan 6) ──
  if (d.getMonth() === 0 && d.getDate() === 6) {
    return { season: 'Epiphany', weekNumber: 1, dayIndex: 0, liturgicalYear: liturgicalYear(year) };
  }

  // ── Ordinary Time (Epiphany season: Jan 7 → Ash Wednesday) ──
  const jan7 = new Date(year, 0, 7);
  if (d >= jan7 && d < cur.ashWed) {
    const dayIndex   = daysBetween(jan7, d);
    const weekNumber = Math.floor(dayIndex / 7) + 1;
    return { season: 'Epiphany Season', weekNumber, dayIndex, liturgicalYear: liturgicalYear(year) };
  }

  // ── Lent (Ash Wednesday → Palm Sunday, exclusive) ──
  if (d >= cur.ashWed && d < cur.palmSunday) {
    const dayIndex   = daysBetween(cur.ashWed, d);
    const weekNumber = Math.floor(dayIndex / 7) + 1;
    return { season: 'Lent', weekNumber, dayIndex, liturgicalYear: liturgicalYear(year) };
  }

  // ── Holy Week (Palm Sunday → Holy Saturday) ──
  if (d >= cur.palmSunday && d < cur.easter) {
    const dayIndex = daysBetween(cur.palmSunday, d);
    const names = ['Palm Sunday','Holy Monday','Holy Tuesday','Holy Wednesday',
                   'Maundy Thursday','Good Friday','Holy Saturday'];
    return { season: names[dayIndex] || 'Holy Week', weekNumber: 1, dayIndex, liturgicalYear: liturgicalYear(year) };
  }

  // ── Easter (Easter Sunday → Day before Pentecost) ──
  if (d >= cur.easter && d < cur.pentecost) {
    const dayIndex   = daysBetween(cur.easter, d);
    const weekNumber = Math.floor(dayIndex / 7) + 1;
    const season = sameDay(d, cur.easter) ? 'Easter Sunday' :
                   sameDay(d, cur.ascension) ? 'Ascension Day' : 'Eastertide';
    return { season, weekNumber, dayIndex, liturgicalYear: liturgicalYear(year) };
  }

  // ── Ordinary Time (after Pentecost → before next Advent) ──
  if (d >= cur.pentecost && d < cur.advent) {
    const dayIndex   = daysBetween(cur.pentecost, d);
    const weekNumber = Math.floor(dayIndex / 7) + 1;
    const season = sameDay(d, cur.pentecost) ? 'Pentecost Sunday' :
                   sameDay(d, cur.trinity) ? 'Trinity Sunday' : 'Ordinary Time';
    return { season, weekNumber, dayIndex, liturgicalYear: liturgicalYear(year) };
  }

  // Fallback
  return { season: 'Ordinary Time', weekNumber: 1, dayIndex: 0, liturgicalYear: liturgicalYear(year) };
}

/**
 * Lectionary year label (A, B, or C) for the liturgical year
 * that begins with Advent of *adventCivilYear - 1* and ends with
 * the Sunday before Advent of *adventCivilYear*.
 *
 * Convention: Year A starts Advent 2022, Year B 2023, Year C 2024, etc.
 * Year A: liturgicalYear % 3 === 1 (where year is the year Advent started + 1)
 */
function liturgicalYear(endYear) {
  const mod = endYear % 3;
  return mod === 0 ? 'B' : mod === 1 ? 'C' : 'A';
}

/**
 * Format a Date as a readable string, e.g. "Friday, March 20, 2026"
 */
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

/**
 * Parse a YYYY-MM-DD string into a local Date (no timezone shift).
 */
function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Serialize a Date to YYYY-MM-DD.
 */
function serializeDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Return today's Date at midnight (local).
 */
function today() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
