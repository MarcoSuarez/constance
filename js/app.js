/**
 * app.js
 * Main application logic for Constance — Daily Office.
 *
 * - Reads the date from the URL (?date=YYYY-MM-DD) or defaults to today
 * - Computes liturgical season via calendar.js
 * - Selects scripture, catechism, and prayer via schedule/catechism/prayers
 * - Fetches NIV text from rest.api.bible
 * - Renders everything and wires up navigation
 */

'use strict';

// ── Configuration ────────────────────────────────────────────────────────────
const API_KEY   = 'TfIjkuIkQmfUamh94epMe';
const BIBLE_ID  = '78a9f6124f344018-01'; // NIV 2011
const API_BASE  = 'https://rest.api.bible/v1';
const MAX_WORDS = 200;

// Book name → OSIS abbreviation used by the API
const BOOK_CODES = {
  'genesis':'GEN','exodus':'EXO','leviticus':'LEV','numbers':'NUM',
  'deuteronomy':'DEU','joshua':'JOS','judges':'JDG','ruth':'RUT',
  '1 samuel':'1SA','2 samuel':'2SA','1 kings':'1KI','2 kings':'2KI',
  '1 chronicles':'1CH','2 chronicles':'2CH','ezra':'EZR','nehemiah':'NEH',
  'esther':'EST','job':'JOB','psalm':'PSA','psalms':'PSA','proverbs':'PRO',
  'ecclesiastes':'ECC','song of solomon':'SNG','song of songs':'SNG',
  'isaiah':'ISA','jeremiah':'JER','lamentations':'LAM','ezekiel':'EZK',
  'daniel':'DAN','hosea':'HOS','joel':'JOL','amos':'AMO','obadiah':'OBA',
  'jonah':'JON','micah':'MIC','nahum':'NAM','habakkuk':'HAB',
  'zephaniah':'ZEP','haggai':'HAG','zechariah':'ZEC','malachi':'MAL',
  'matthew':'MAT','mark':'MRK','luke':'LUK','john':'JHN','acts':'ACT',
  'romans':'ROM','1 corinthians':'1CO','2 corinthians':'2CO',
  'galatians':'GAL','ephesians':'EPH','philippians':'PHP','colossians':'COL',
  '1 thessalonians':'1TH','2 thessalonians':'2TH',
  '1 timothy':'1TI','2 timothy':'2TI','titus':'TIT','philemon':'PHM',
  'hebrews':'HEB','james':'JAS','1 peter':'1PE','2 peter':'2PE',
  '1 john':'1JN','2 john':'2JN','3 john':'3JN','jude':'JUD',
  'revelation':'REV',
};

// ── Reference → Passage ID converter ─────────────────────────────────────────
/**
 * Convert a human reference like "Romans 8:1-11" or "Psalm 23"
 * to an API passage ID like "ROM.8.1-ROM.8.11" or "PSA.23".
 */
function refToPassageId(ref) {
  // Handle comma-separated multi-passage refs — use first segment only
  ref = ref.split(',')[0].trim();

  // Match: "Book chapter:verse-chapter:verse"  or  "Book chapter:verse-verse"
  // or     "Book chapter"
  const m = ref.match(/^(.+?)\s+(\d+)(?::(\d+))?(?:\s*[-–]\s*(?:(\d+):)?(\d+))?$/i);
  if (!m) return null;

  const bookName = m[1].toLowerCase().trim();
  const code     = BOOK_CODES[bookName];
  if (!code) return null;

  const ch1 = m[2];
  const v1  = m[3];
  const ch2 = m[4]; // present only for cross-chapter ranges
  const v2  = m[5];

  if (!v1 && !v2) {
    // Whole chapter, e.g. "Psalm 23"
    return `${code}.${ch1}`;
  }

  const start = `${code}.${ch1}.${v1}`;

  if (!v2) return start; // single verse

  // End of range
  const endChapter = ch2 || ch1;
  const end = `${code}.${endChapter}.${v2}`;

  return `${start}-${end}`;
}

// ── Scripture fetcher ─────────────────────────────────────────────────────────
const scriptureCache = {};

async function fetchPassage(ref) {
  if (scriptureCache[ref]) return scriptureCache[ref];

  const passageId = refToPassageId(ref);
  if (!passageId) throw new Error(`Could not parse reference: ${ref}`);

  const url = `${API_BASE}/bibles/${BIBLE_ID}/passages/${passageId}` +
    `?content-type=text&include-verse-numbers=false&include-titles=false` +
    `&include-chapter-numbers=false`;

  const res = await fetch(url, { headers: { 'api-key': API_KEY } });
  if (!res.ok) throw new Error(`API error ${res.status} for ${ref}`);

  const json = await res.json();
  let text = (json.data.content || '').trim();

  // Clean up extra whitespace / indentation
  text = text.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();

  // Enforce 200-word limit
  const words = text.split(/\s+/);
  if (words.length > MAX_WORDS) {
    text = words.slice(0, MAX_WORDS).join(' ') + '…';
  }

  scriptureCache[ref] = text;
  return text;
}

// ── Day-of-year helper ────────────────────────────────────────────────────────
function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 864e5);
}

// ── Rendering ─────────────────────────────────────────────────────────────────
function renderLoading() {
  document.getElementById('content').innerHTML = `
    <div class="loading-state">
      <div class="loading-spinner"></div>
      <p>Loading today's readings…</p>
    </div>`;
}

function renderError(msg) {
  document.getElementById('content').innerHTML = `
    <div class="error-state">
      <strong>Could not load readings.</strong><br>${msg}
    </div>`;
}

function renderContent({ citation, scriptureText, catechism, prayer }) {
  document.getElementById('content').innerHTML = `
    <section class="reading-section" aria-label="Scripture">
      <div class="section-label">Scripture</div>
      <div class="scripture-citation">${citation}</div>
      <div class="scripture-text">${escHtml(scriptureText)}</div>
    </section>

    <section class="reading-section" aria-label="Liturgy">
      <div class="section-label">Liturgy</div>
      <div class="catechism-source">${escHtml(catechism.source)} &mdash; ${escHtml(catechism.id)}</div>
      <div class="catechism-question">Q. ${escHtml(catechism.question)}</div>
      <div class="catechism-answer">A. ${escHtml(catechism.answer)}</div>
    </section>

    <section class="reading-section" aria-label="Prayer">
      <div class="section-label">Prayer</div>
      <div class="prayer-title">${escHtml(prayer.title)}</div>
      <div class="prayer-text">${escHtml(prayer.text)}</div>
    </section>
  `;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Navigation ────────────────────────────────────────────────────────────────
function getViewDate() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('date');
  if (raw && /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const d = parseDate(raw);
    // Never allow future dates
    if (d <= today()) return d;
  }
  return today();
}

function navigateTo(date) {
  const iso = serializeDate(date);
  const url = new URL(window.location.href);
  if (date - today() >= 0) {
    url.searchParams.delete('date'); // today — clean URL
  } else {
    url.searchParams.set('date', iso);
  }
  window.history.pushState({}, '', url.toString());
  loadDay(date);
}

function updateNav(date) {
  const todayDate = today();
  const isToday   = serializeDate(date) === serializeDate(todayDate);

  // Forward button disabled when on today
  document.getElementById('next-day').disabled = isToday;

  // Back button always enabled (you can go back indefinitely)
  document.getElementById('prev-day').disabled = false;

  // Date display
  const info = getLiturgicalInfo(date);
  document.getElementById('liturgical-season').textContent = info.season;
  document.getElementById('current-date').textContent      = formatDate(date);
}

// ── Main loader ───────────────────────────────────────────────────────────────
async function loadDay(date) {
  updateNav(date);
  renderLoading();

  try {
    const info      = getLiturgicalInfo(date);
    const doy       = dayOfYear(date);
    const reading   = getDailyReading(info);
    const catechism = getDailyCatechism(doy);
    const prayer    = getDailyPrayer(info.season, info.dayIndex);

    const scriptureText = await fetchPassage(reading.ref);

    renderContent({
      citation:     reading.citation,
      scriptureText,
      catechism,
      prayer,
    });
  } catch (err) {
    console.error(err);
    renderError(err.message);
  }
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Wire up nav buttons
  document.getElementById('prev-day').addEventListener('click', () => {
    const current = getViewDate();
    navigateTo(addDays(current, -1));
  });

  document.getElementById('next-day').addEventListener('click', () => {
    const current = getViewDate();
    const next    = addDays(current, 1);
    if (next <= today()) navigateTo(next);
  });

  // Handle browser back/forward
  window.addEventListener('popstate', () => loadDay(getViewDate()));

  // Initial load
  loadDay(getViewDate());
});
