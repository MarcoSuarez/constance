/**
 * app.js
 * Main application logic for Constance — Daily Office.
 */

'use strict';

// ── Configuration ─────────────────────────────────────────────────────────────
const API_KEY  = 'TfIjkuIkQmfUamh94epMe';
const BIBLE_ID = '78a9f6124f344018-01'; // NIV 2011
const API_BASE = 'https://rest.api.bible/v1';
const MAX_WORDS = 200;

// ── Season metadata ───────────────────────────────────────────────────────────
const SEASON_META = {
  'Advent': {
    cssClass:  'advent',
    subtitle:  'Watching, Waiting & Preparing for the Coming King',
    note:      'Advent is a season of watchful waiting and preparation for the coming of Christ — both his birth at Christmas and his glorious return at the end of the age.',
  },
  'Christmas': {
    cssClass:  'christmas',
    subtitle:  'The Word Made Flesh — God Dwelling Among Us',
    note:      'Christmas is a season of twelve days celebrating the Incarnation — the eternal Son of God taking on human flesh to dwell among us in great humility.',
  },
  'Epiphany': {
    cssClass:  'epiphany',
    subtitle:  'The Light of Christ Revealed to All Nations',
    note:      'Epiphany celebrates the revelation of Christ to the Gentiles, signified by the visit of the Magi. The Light of the world shines for every nation.',
  },
  'Epiphany Season': {
    cssClass:  'epiphany',
    subtitle:  'Walking in the Light of Christ\'s Revealed Glory',
    note:      'The season after Epiphany is a time of growing revelation, as Jesus begins his public ministry and his identity is made known through word and miracle.',
  },
  'Lent': {
    cssClass:  'lent',
    subtitle:  'Repentance, Renewal & the Way of the Cross',
    note:      'Lent is a season of forty days, not counting Sundays, before Easter. It is a time of self-examination and penitence, expressed through prayer, fasting, and almsgiving.',
  },
  'Palm Sunday': {
    cssClass:  'holy-week',
    subtitle:  'Blessed is He Who Comes in the Name of the Lord',
    note:      'Palm Sunday opens Holy Week, commemorating Christ\'s triumphal entry into Jerusalem — the King who comes in humility, riding on a donkey, to fulfill the ancient prophecies.',
  },
  'Holy Monday': {
    cssClass:  'holy-week',
    subtitle:  'The Shadow of the Cross Draws Near',
    note:      'Holy Week is the most solemn week of the Christian year, as we journey with Jesus through his final days — betrayal, suffering, and death — before the glory of Easter.',
  },
  'Holy Tuesday': {
    cssClass:  'holy-week',
    subtitle:  'The Shadow of the Cross Draws Near',
    note:      'Holy Week is the most solemn week of the Christian year, as we journey with Jesus through his final days — betrayal, suffering, and death — before the glory of Easter.',
  },
  'Holy Wednesday': {
    cssClass:  'holy-week',
    subtitle:  'The Shadow of the Cross Draws Near',
    note:      'Holy Week is the most solemn week of the Christian year, as we journey with Jesus through his final days — betrayal, suffering, and death — before the glory of Easter.',
  },
  'Maundy Thursday': {
    cssClass:  'holy-week',
    subtitle:  'Do This in Remembrance of Me',
    note:      'Maundy Thursday commemorates the Last Supper, when Jesus washed his disciples\' feet, instituted the Lord\'s Supper, and prayed his high-priestly prayer in the garden.',
  },
  'Good Friday': {
    cssClass:  'holy-week',
    subtitle:  'He Was Wounded for Our Transgressions',
    note:      'Good Friday commemorates the crucifixion and death of Jesus Christ — the holy day on which the Son of God bore the sins of the world and cried out, "It is finished."',
  },
  'Holy Saturday': {
    cssClass:  'holy-week',
    subtitle:  'Waiting in the Silence of the Tomb',
    note:      'Holy Saturday is a day of waiting and silence as the body of Christ lies in the tomb. We hold our breath between the cross and the empty grave.',
  },
  'Easter Sunday': {
    cssClass:  'easter',
    subtitle:  'Christ Is Risen — He Is Risen Indeed!',
    note:      'Easter Sunday is the feast of the Resurrection — the central celebration of the Christian faith. Death has been defeated. Christ is risen from the dead!',
  },
  'Eastertide': {
    cssClass:  'easter',
    subtitle:  'Fifty Days of Resurrection Joy',
    note:      'Eastertide is the great fifty-day feast from Easter Sunday to Pentecost, celebrating Christ\'s resurrection, his appearances to the disciples, and the promise of the Spirit.',
  },
  'Ascension Day': {
    cssClass:  'easter',
    subtitle:  'He Ascended into Heaven and Is Seated at the Right Hand',
    note:      'Ascension Day marks the bodily ascension of the risen Christ to heaven, where he reigns at the right hand of the Father, interceding for his people until he comes again.',
  },
  'Pentecost Sunday': {
    cssClass:  'pentecost',
    subtitle:  'The Promise of the Father Poured Out on All Flesh',
    note:      'Pentecost Sunday celebrates the outpouring of the Holy Spirit upon the apostles in Jerusalem — the birthday of the Church and the fulfillment of Christ\'s promise.',
  },
  'Trinity Sunday': {
    cssClass:  'pentecost',
    subtitle:  'Holy, Holy, Holy — Lord God Almighty',
    note:      'Trinity Sunday invites us to contemplate the mystery of one God in three persons — Father, Son, and Holy Spirit — equal in glory, coeternal in majesty.',
  },
  'Ordinary Time': {
    cssClass:  'ordinary',
    subtitle:  'Growing in Grace Through the Whole of Life',
    note:      null, // no note for ordinary time — keep it clean
  },
};

function getSeasonMeta(season) {
  return SEASON_META[season] || SEASON_META['Ordinary Time'];
}

// ── Book name → OSIS code ─────────────────────────────────────────────────────
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

function refToPassageId(ref) {
  ref = ref.split(',')[0].trim();
  const m = ref.match(/^(.+?)\s+(\d+)(?::(\d+))?(?:\s*[-–]\s*(?:(\d+):)?(\d+))?$/i);
  if (!m) return null;
  const code = BOOK_CODES[m[1].toLowerCase().trim()];
  if (!code) return null;
  const ch1 = m[2], v1 = m[3], ch2 = m[4], v2 = m[5];
  if (!v1 && !v2) return `${code}.${ch1}`;
  const start = `${code}.${ch1}.${v1}`;
  if (!v2) return start;
  return `${start}-${code}.${ch2 || ch1}.${v2}`;
}

// ── Scripture fetcher ──────────────────────────────────────────────────────────
const scriptureCache = {};

async function fetchPassage(ref) {
  if (scriptureCache[ref]) return scriptureCache[ref];
  const passageId = refToPassageId(ref);
  if (!passageId) throw new Error(`Could not parse reference: "${ref}"`);

  const url = `${API_BASE}/bibles/${BIBLE_ID}/passages/${passageId}` +
    `?content-type=text&include-verse-numbers=false` +
    `&include-titles=false&include-chapter-numbers=false`;

  const res = await fetch(url, { headers: { 'api-key': API_KEY } });
  if (!res.ok) throw new Error(`Scripture API error ${res.status}`);

  const json = await res.json();
  let text = (json.data.content || '').trim()
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const words = text.split(/\s+/);
  if (words.length > MAX_WORDS) text = words.slice(0, MAX_WORDS).join(' ') + '…';

  scriptureCache[ref] = text;
  return text;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function dayOfYear(date) {
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 864e5);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function formatSeasonLabel(season, weekNumber) {
  const weekNames = ['I','II','III','IV','V','VI','VII'];
  const week = weekNames[(weekNumber || 1) - 1] || weekNumber;
  const weekliness = ['Ordinary Time','Lent','Advent','Eastertide','Epiphany Season'];
  if (weekliness.includes(season) && weekNumber > 0) {
    return `✦ ${season} — Week ${week} ✦`;
  }
  return `✦ ${season} ✦`;
}

// ── Rendering ──────────────────────────────────────────────────────────────────
function renderLoading() {
  document.getElementById('content').innerHTML = `
    <div class="loading-state">
      <div class="loading-spinner"></div>
      <p>Loading today's readings…</p>
    </div>`;
}

function renderError(msg) {
  document.getElementById('content').innerHTML = `
    <div class="error-state">Unable to load readings.<br><small>${escHtml(msg)}</small></div>`;
}

function renderContent({ citation, scriptureText, catechism, prayer, season }) {
  // Paragraph-aware scripture: split on double newlines
  const scriptureParas = scriptureText
    .split(/\n\n+/)
    .map(p => `<p>${escHtml(p.trim())}</p>`)
    .join('\n');

  document.getElementById('content').innerHTML = `
    <div class="section">
      <div class="section-header">
        <div class="section-icon">✦</div>
        <span class="section-title">Holy Scripture</span>
      </div>
      <div class="passage">
        ${scriptureParas}
        <span class="citation">${escHtml(citation)} (NIV)</span>
      </div>
    </div>

    <hr class="rule">

    <div class="section">
      <div class="section-header">
        <div class="section-icon">✦</div>
        <span class="section-title">Liturgy &amp; Catechism</span>
      </div>
      <p class="liturgy-text">
        <strong>Q. ${escHtml(catechism.question)}</strong><br><br>
        A. ${escHtml(catechism.answer)}
      </p>
      <span class="liturgy-source">${escHtml(catechism.source)} — ${escHtml(catechism.id)}</span>
    </div>

    <hr class="rule">

    <div class="section">
      <div class="section-header">
        <div class="section-icon">✦</div>
        <span class="section-title">Prayer</span>
      </div>
      <p class="prayer-text">${escHtml(prayer.text)}</p>
      <span class="prayer-source">${escHtml(prayer.title)} — Book of Common Prayer</span>
    </div>
  `;
}

// ── Page chrome ───────────────────────────────────────────────────────────────
function updateChrome(date) {
  const info   = getLiturgicalInfo(date);
  const meta   = getSeasonMeta(info.season);
  const todayD = today();
  const isToday = serializeDate(date) === serializeDate(todayD);

  // Season class on body (drives all colour variables)
  document.body.dataset.season = meta.cssClass;

  // Season label + date
  document.getElementById('season-label').textContent =
    formatSeasonLabel(info.season, info.weekNumber);
  document.getElementById('date-line').textContent =
    formatDate(date).toUpperCase();

  // Subtitle
  document.getElementById('subtitle').textContent = meta.subtitle;

  // Seasonal note
  const noteEl = document.getElementById('seasonal-note');
  if (meta.note) {
    noteEl.textContent = meta.note;
    noteEl.style.display = '';
  } else {
    noteEl.style.display = 'none';
  }

  // Page title
  document.title = `Daily Office — ${formatDate(date)}`;

  // Nav buttons
  document.getElementById('next-day').disabled = isToday;
  document.getElementById('prev-day').disabled = false;
}

// ── Navigation ────────────────────────────────────────────────────────────────
function getViewDate() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('date');
  if (raw && /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const d = parseDate(raw);
    if (d <= today()) return d;
  }
  return today();
}

function navigateTo(date) {
  const url = new URL(window.location.href);
  if (serializeDate(date) === serializeDate(today())) {
    url.searchParams.delete('date');
  } else {
    url.searchParams.set('date', serializeDate(date));
  }
  window.history.pushState({}, '', url.toString());
  loadDay(date);
}

// ── Main loader ───────────────────────────────────────────────────────────────
async function loadDay(date) {
  updateChrome(date);
  renderLoading();

  try {
    const info      = getLiturgicalInfo(date);
    const doy       = dayOfYear(date);
    const reading   = getDailyReading(info);
    const catechism = getDailyCatechism(doy);
    const prayer    = getDailyPrayer(info.season, info.dayIndex);

    const scriptureText = await fetchPassage(reading.ref);

    renderContent({ citation: reading.citation, scriptureText, catechism, prayer, season: info.season });
  } catch (err) {
    console.error(err);
    renderError(err.message);
  }
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('prev-day').addEventListener('click', () => {
    navigateTo(addDays(getViewDate(), -1));
  });
  document.getElementById('next-day').addEventListener('click', () => {
    const next = addDays(getViewDate(), 1);
    if (next <= today()) navigateTo(next);
  });
  window.addEventListener('popstate', () => loadDay(getViewDate()));
  loadDay(getViewDate());
});
