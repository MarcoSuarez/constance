/**
 * schedule.js
 * Maps liturgical seasons to curated pools of short scripture passages.
 * Each passage is chosen to be ≤ 200 words in the World English Bible.
 * Reference format matches the bible-api.com query format.
 */

'use strict';

const READING_POOLS = {

  // ── Advent ─────────────────────────────────────────────────
  'Advent': [
    { ref: 'Isaiah 2:1-5',         citation: 'Isaiah 2:1–5'         },
    { ref: 'Isaiah 9:2-7',         citation: 'Isaiah 9:2–7'         },
    { ref: 'Isaiah 11:1-9',        citation: 'Isaiah 11:1–9'        },
    { ref: 'Isaiah 25:6-9',        citation: 'Isaiah 25:6–9'        },
    { ref: 'Isaiah 35:3-10',       citation: 'Isaiah 35:3–10'       },
    { ref: 'Isaiah 40:1-11',       citation: 'Isaiah 40:1–11'       },
    { ref: 'Isaiah 55:6-13',       citation: 'Isaiah 55:6–13'       },
    { ref: 'Isaiah 60:1-6',        citation: 'Isaiah 60:1–6'        },
    { ref: 'Isaiah 64:1-9',        citation: 'Isaiah 64:1–9'        },
    { ref: 'Jeremiah 33:14-16',    citation: 'Jeremiah 33:14–16'    },
    { ref: 'Micah 5:2-5',          citation: 'Micah 5:2–5'          },
    { ref: 'Zechariah 9:9-12',     citation: 'Zechariah 9:9–12'     },
    { ref: 'Malachi 3:1-4',        citation: 'Malachi 3:1–4'        },
    { ref: 'Psalm 25:1-10',        citation: 'Psalm 25:1–10'        },
    { ref: 'Psalm 80:1-7',         citation: 'Psalm 80:1–7'         },
    { ref: 'Psalm 122',            citation: 'Psalm 122'            },
    { ref: 'Romans 13:11-14',      citation: 'Romans 13:11–14'      },
    { ref: '1 Thessalonians 5:16-24', citation: '1 Thessalonians 5:16–24' },
    { ref: 'Luke 1:26-38',         citation: 'Luke 1:26–38'         },
    { ref: 'Luke 1:46-55',         citation: 'Luke 1:46–55'         },
    { ref: 'Luke 1:67-79',         citation: 'Luke 1:67–79'         },
    { ref: 'Matthew 1:18-25',      citation: 'Matthew 1:18–25'      },
    { ref: 'Mark 1:1-8',           citation: 'Mark 1:1–8'           },
    { ref: 'John 1:6-9,19-28',     citation: 'John 1:6–9, 19–28'   },
    { ref: '2 Peter 3:8-15',       citation: '2 Peter 3:8–15'       },
    { ref: 'Philippians 4:4-7',    citation: 'Philippians 4:4–7'    },
    { ref: 'James 5:7-10',         citation: 'James 5:7–10'         },
    { ref: 'Revelation 22:12-20',  citation: 'Revelation 22:12–20'  },
  ],

  // ── Christmas ──────────────────────────────────────────────
  'Christmas': [
    { ref: 'Luke 2:1-20',          citation: 'Luke 2:1–20'          },
    { ref: 'John 1:1-14',          citation: 'John 1:1–14'          },
    { ref: 'Titus 2:11-14',        citation: 'Titus 2:11–14'        },
    { ref: 'Hebrews 1:1-9',        citation: 'Hebrews 1:1–9'        },
    { ref: 'Philippians 2:5-11',   citation: 'Philippians 2:5–11'   },
    { ref: 'Colossians 1:15-20',   citation: 'Colossians 1:15–20'   },
    { ref: 'Galatians 4:4-7',      citation: 'Galatians 4:4–7'      },
    { ref: 'Isaiah 52:7-10',       citation: 'Isaiah 52:7–10'       },
    { ref: '1 John 1:1-4',         citation: '1 John 1:1–4'         },
    { ref: 'Matthew 2:1-12',       citation: 'Matthew 2:1–12'       },
    { ref: 'Luke 2:21-40',         citation: 'Luke 2:21–40'         },
    { ref: 'Psalm 98',             citation: 'Psalm 98'             },
  ],

  // ── Epiphany Season (Jan 6) ────────────────────────────────
  'Epiphany': [
    { ref: 'Matthew 2:1-12',       citation: 'Matthew 2:1–12'       },
    { ref: 'Isaiah 60:1-6',        citation: 'Isaiah 60:1–6'        },
    { ref: 'Psalm 72:1-14',        citation: 'Psalm 72:1–14'        },
  ],

  // ── Epiphany Season (ordinary weeks after Epiphany) ────────
  'Epiphany Season': [
    { ref: 'Matthew 5:1-12',       citation: 'Matthew 5:1–12'       },
    { ref: 'Matthew 5:13-20',      citation: 'Matthew 5:13–20'      },
    { ref: 'Matthew 5:38-48',      citation: 'Matthew 5:38–48'      },
    { ref: 'Matthew 6:1-6,16-21',  citation: 'Matthew 6:1–6, 16–21' },
    { ref: 'Matthew 6:24-34',      citation: 'Matthew 6:24–34'      },
    { ref: 'Matthew 17:1-9',       citation: 'Matthew 17:1–9'       },
    { ref: 'Mark 1:14-20',         citation: 'Mark 1:14–20'         },
    { ref: 'Mark 1:21-28',         citation: 'Mark 1:21–28'         },
    { ref: 'Mark 1:29-39',         citation: 'Mark 1:29–39'         },
    { ref: 'John 2:1-11',          citation: 'John 2:1–11'          },
    { ref: 'John 4:5-15',          citation: 'John 4:5–15'          },
    { ref: '1 Corinthians 1:18-31',citation: '1 Corinthians 1:18–31'},
    { ref: '1 Corinthians 13:1-13',citation: '1 Corinthians 13'     },
    { ref: 'Isaiah 58:3-9',        citation: 'Isaiah 58:3–9'        },
    { ref: 'Isaiah 61:1-4',        citation: 'Isaiah 61:1–4'        },
    { ref: 'Micah 6:1-8',          citation: 'Micah 6:1–8'          },
    { ref: 'Psalm 27:1-9',         citation: 'Psalm 27:1–9'         },
    { ref: 'Psalm 119:1-8',        citation: 'Psalm 119:1–8'        },
    { ref: 'Romans 8:1-11',        citation: 'Romans 8:1–11'        },
    { ref: '2 Corinthians 4:3-6',  citation: '2 Corinthians 4:3–6'  },
    { ref: 'Ephesians 3:1-12',     citation: 'Ephesians 3:1–12'     },
  ],

  // ── Lent ───────────────────────────────────────────────────
  'Lent': [
    { ref: 'Psalm 51:1-12',        citation: 'Psalm 51:1–12'        },
    { ref: 'Psalm 22:1-11',        citation: 'Psalm 22:1–11'        },
    { ref: 'Psalm 32:1-7',         citation: 'Psalm 32:1–7'         },
    { ref: 'Psalm 130',            citation: 'Psalm 130'            },
    { ref: 'Isaiah 53:1-12',       citation: 'Isaiah 53:1–12'       },
    { ref: 'Isaiah 55:1-9',        citation: 'Isaiah 55:1–9'        },
    { ref: 'Lamentations 3:22-33', citation: 'Lamentations 3:22–33' },
    { ref: 'Joel 2:1-2,12-17',     citation: 'Joel 2:1–2, 12–17'   },
    { ref: 'Matthew 4:1-11',       citation: 'Matthew 4:1–11'       },
    { ref: 'Mark 8:31-38',         citation: 'Mark 8:31–38'         },
    { ref: 'Luke 13:1-9',          citation: 'Luke 13:1–9'          },
    { ref: 'Luke 15:1-3,11-32',    citation: 'Luke 15:11–32'        },
    { ref: 'John 3:14-21',         citation: 'John 3:14–21'         },
    { ref: 'John 9:1-11',          citation: 'John 9:1–11'          },
    { ref: 'John 11:17-27',        citation: 'John 11:17–27'        },
    { ref: 'Romans 5:1-11',        citation: 'Romans 5:1–11'        },
    { ref: 'Romans 8:6-11',        citation: 'Romans 8:6–11'        },
    { ref: '2 Corinthians 5:17-21',citation: '2 Corinthians 5:17–21'},
    { ref: 'Hebrews 4:14-16',      citation: 'Hebrews 4:14–16'      },
    { ref: 'Hebrews 12:1-3',       citation: 'Hebrews 12:1–3'       },
    { ref: 'Philippians 3:7-14',   citation: 'Philippians 3:7–14'   },
    { ref: '1 John 2:1-6',         citation: '1 John 2:1–6'         },
  ],

  // ── Holy Week ──────────────────────────────────────────────
  'Palm Sunday': [
    { ref: 'Matthew 21:1-11',      citation: 'Matthew 21:1–11'      },
    { ref: 'Psalm 118:19-29',      citation: 'Psalm 118:19–29'      },
  ],
  'Holy Monday': [
    { ref: 'John 12:1-11',         citation: 'John 12:1–11'         },
    { ref: 'Isaiah 42:1-9',        citation: 'Isaiah 42:1–9'        },
  ],
  'Holy Tuesday': [
    { ref: 'John 12:20-36',        citation: 'John 12:20–36'        },
    { ref: 'Isaiah 49:1-7',        citation: 'Isaiah 49:1–7'        },
  ],
  'Holy Wednesday': [
    { ref: 'John 13:21-32',        citation: 'John 13:21–32'        },
    { ref: 'Isaiah 50:4-9',        citation: 'Isaiah 50:4–9'        },
  ],
  'Maundy Thursday': [
    { ref: 'John 13:1-17',         citation: 'John 13:1–17'         },
    { ref: '1 Corinthians 11:23-26',citation: '1 Corinthians 11:23–26' },
    { ref: 'Psalm 116:10-17',      citation: 'Psalm 116:10–17'      },
  ],
  'Good Friday': [
    { ref: 'Isaiah 52:13-53:12',   citation: 'Isaiah 52:13–53:12'  },
    { ref: 'John 19:17-30',        citation: 'John 19:17–30'        },
    { ref: 'Psalm 22:1-18',        citation: 'Psalm 22:1–18'        },
  ],
  'Holy Saturday': [
    { ref: 'Job 14:1-14',          citation: 'Job 14:1–14'          },
    { ref: 'Lamentations 3:1-9',   citation: 'Lamentations 3:1–9'  },
    { ref: 'Psalm 31:1-4',         citation: 'Psalm 31:1–4'         },
  ],

  // ── Easter ─────────────────────────────────────────────────
  'Easter Sunday': [
    { ref: 'Matthew 28:1-10',      citation: 'Matthew 28:1–10'      },
    { ref: 'John 20:1-18',         citation: 'John 20:1–18'         },
    { ref: 'Luke 24:1-12',         citation: 'Luke 24:1–12'         },
  ],
  'Eastertide': [
    { ref: 'John 20:19-31',        citation: 'John 20:19–31'        },
    { ref: 'John 21:1-14',         citation: 'John 21:1–14'         },
    { ref: 'John 10:11-18',        citation: 'John 10:11–18'        },
    { ref: 'John 15:1-11',         citation: 'John 15:1–11'         },
    { ref: 'John 15:12-17',        citation: 'John 15:12–17'        },
    { ref: 'John 17:1-11',         citation: 'John 17:1–11'         },
    { ref: 'Acts 2:14-21',         citation: 'Acts 2:14–21'         },
    { ref: 'Acts 2:42-47',         citation: 'Acts 2:42–47'         },
    { ref: 'Acts 4:32-35',         citation: 'Acts 4:32–35'         },
    { ref: 'Acts 9:1-20',          citation: 'Acts 9:1–20'          },
    { ref: '1 Peter 1:3-9',        citation: '1 Peter 1:3–9'        },
    { ref: '1 Peter 2:2-10',       citation: '1 Peter 2:2–10'       },
    { ref: '1 John 3:1-7',         citation: '1 John 3:1–7'         },
    { ref: '1 John 4:7-21',        citation: '1 John 4:7–21'        },
    { ref: 'Revelation 1:4-8',     citation: 'Revelation 1:4–8'     },
    { ref: 'Psalm 16',             citation: 'Psalm 16'             },
    { ref: 'Psalm 23',             citation: 'Psalm 23'             },
    { ref: 'Psalm 118:1-24',       citation: 'Psalm 118:1–24'       },
  ],
  'Ascension Day': [
    { ref: 'Acts 1:1-11',          citation: 'Acts 1:1–11'          },
    { ref: 'Ephesians 1:15-23',    citation: 'Ephesians 1:15–23'    },
    { ref: 'Psalm 47',             citation: 'Psalm 47'             },
  ],

  // ── Pentecost & Ordinary Time ──────────────────────────────
  'Pentecost Sunday': [
    { ref: 'Acts 2:1-21',          citation: 'Acts 2:1–21'          },
    { ref: 'John 20:19-23',        citation: 'John 20:19–23'        },
    { ref: 'Romans 8:22-27',       citation: 'Romans 8:22–27'       },
  ],
  'Trinity Sunday': [
    { ref: 'John 3:1-17',          citation: 'John 3:1–17'          },
    { ref: 'Romans 8:12-17',       citation: 'Romans 8:12–17'       },
    { ref: 'Isaiah 6:1-8',         citation: 'Isaiah 6:1–8'         },
  ],
  'Ordinary Time': [
    // Psalms
    { ref: 'Psalm 1',              citation: 'Psalm 1'              },
    { ref: 'Psalm 8',              citation: 'Psalm 8'              },
    { ref: 'Psalm 19:1-14',        citation: 'Psalm 19'             },
    { ref: 'Psalm 24',             citation: 'Psalm 24'             },
    { ref: 'Psalm 46',             citation: 'Psalm 46'             },
    { ref: 'Psalm 63:1-8',         citation: 'Psalm 63:1–8'         },
    { ref: 'Psalm 84',             citation: 'Psalm 84'             },
    { ref: 'Psalm 90:1-12',        citation: 'Psalm 90:1–12'        },
    { ref: 'Psalm 103:1-13',       citation: 'Psalm 103:1–13'       },
    { ref: 'Psalm 121',            citation: 'Psalm 121'            },
    { ref: 'Psalm 139:1-12',       citation: 'Psalm 139:1–12'       },
    // Proverbs / Wisdom
    { ref: 'Proverbs 3:1-12',      citation: 'Proverbs 3:1–12'      },
    { ref: 'Proverbs 8:22-31',     citation: 'Proverbs 8:22–31'     },
    // Gospels
    { ref: 'Matthew 5:1-12',       citation: 'Matthew 5:1–12'       },
    { ref: 'Matthew 6:9-13',       citation: 'Matthew 6:9–13'       },
    { ref: 'Matthew 11:28-30',     citation: 'Matthew 11:28–30'     },
    { ref: 'Matthew 22:34-40',     citation: 'Matthew 22:34–40'     },
    { ref: 'Mark 4:35-41',         citation: 'Mark 4:35–41'         },
    { ref: 'Mark 10:13-16',        citation: 'Mark 10:13–16'        },
    { ref: 'Luke 10:25-37',        citation: 'Luke 10:25–37'        },
    { ref: 'Luke 11:1-13',         citation: 'Luke 11:1–13'         },
    { ref: 'John 6:35-40',         citation: 'John 6:35–40'         },
    { ref: 'John 8:31-36',         citation: 'John 8:31–36'         },
    { ref: 'John 14:1-7',          citation: 'John 14:1–7'          },
    { ref: 'John 14:15-21',        citation: 'John 14:15–21'        },
    // Epistles
    { ref: 'Romans 5:1-5',         citation: 'Romans 5:1–5'         },
    { ref: 'Romans 8:28-39',       citation: 'Romans 8:28–39'       },
    { ref: 'Romans 12:1-8',        citation: 'Romans 12:1–8'        },
    { ref: 'Romans 12:9-21',       citation: 'Romans 12:9–21'       },
    { ref: 'Galatians 5:16-25',    citation: 'Galatians 5:16–25'    },
    { ref: 'Ephesians 2:1-10',     citation: 'Ephesians 2:1–10'     },
    { ref: 'Ephesians 4:1-7',      citation: 'Ephesians 4:1–7'      },
    { ref: 'Philippians 2:1-11',   citation: 'Philippians 2:1–11'   },
    { ref: 'Philippians 4:6-9',    citation: 'Philippians 4:6–9'    },
    { ref: 'Colossians 3:12-17',   citation: 'Colossians 3:12–17'   },
    { ref: 'Hebrews 4:12-16',      citation: 'Hebrews 4:12–16'      },
    { ref: 'Hebrews 11:1-3',       citation: 'Hebrews 11:1–3'       },
    { ref: 'James 1:22-27',        citation: 'James 1:22–27'        },
    { ref: '1 John 3:16-24',       citation: '1 John 3:16–24'       },
    { ref: 'Revelation 7:9-17',    citation: 'Revelation 7:9–17'    },
  ],
};

/**
 * Given liturgical info { season, dayIndex }, return the
 * Bible passage reference for that day.
 */
function getDailyReading(liturgicalInfo) {
  const { season, dayIndex } = liturgicalInfo;
  const pool = READING_POOLS[season] || READING_POOLS['Ordinary Time'];
  return pool[dayIndex % pool.length];
}
