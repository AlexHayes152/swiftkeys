/* ============================================================
   SwiftKeys — Typing Speed Challenge
   ============================================================ */

// ---------- Content ----------
// Word pools per difficulty level.
const WORDS_BEGINNER = [
  "the", "be", "of", "and", "a", "to", "in", "he", "have", "it",
  "that", "for", "they", "with", "as", "not", "on", "she", "at", "by",
  "this", "we", "you", "do", "but", "from", "or", "which", "one", "would",
  "all", "will", "there", "say", "who", "make", "when", "can", "more", "if",
  "no", "man", "out", "other", "so", "what", "time", "up", "go", "about",
  "than", "into", "could", "only", "new", "year", "some", "take", "come", "day",
  "know", "see", "use", "get", "like", "then", "first", "any", "work", "now",
  "may", "such", "give", "over", "think", "most", "even", "find", "also", "way",
  "many", "must", "look", "back", "long", "much", "well", "down", "own", "just",
  "good", "each", "feel", "seem", "how", "high", "too", "place", "old", "life",
  "tell", "here", "show", "house", "both", "need", "mean", "call", "last", "move",
  "thing", "same", "part", "turn", "real", "might", "want", "form", "off", "few",
  "small", "ask", "late", "home", "end", "open", "hold", "head", "word", "run",
  "keep", "face", "fact", "play", "help", "line", "city", "eye", "plan", "set",
];

const WORDS_INTERMEDIATE = [
  "people", "because", "through", "before", "great", "where", "should", "world",
  "nation", "become", "between", "develop", "under", "right", "general", "school",
  "never", "another", "begin", "while", "number", "leave", "point", "since",
  "against", "interest", "large", "person", "public", "follow", "during",
  "present", "without", "again", "govern", "around", "possible", "consider",
  "program", "problem", "however", "system", "order", "increase", "early",
  "course", "change", "group", "stand", "important", "different", "example",
  "together", "children", "question", "business", "service", "country",
  "community", "president", "university", "education", "information",
  "development", "government", "experience", "available", "research",
  "history", "million", "provide", "however", "company", "although",
  "remember", "continue", "understand", "sometimes", "themselves", "actually",
  "certainly", "challenge", "knowledge", "language", "practice", "project",
  "quality", "resource", "special", "station", "straight", "strength",
  "subject", "success", "support", "surface", "thought", "various",
];

const WORDS_ADVANCED = [
  "acknowledge", "bureaucracy", "catastrophe", "dichotomy", "entrepreneur",
  "fluorescent", "guarantee", "hierarchy", "idiosyncrasy", "juxtaposition",
  "kaleidoscope", "lieutenant", "maintenance", "necessary", "occasionally",
  "phenomenon", "questionnaire", "rhythm", "silhouette", "threshold",
  "unanimous", "vacuum", "whimsical", "xylophone", "yacht", "zealous",
  "algorithm", "boulevard", "conscientious", "definitely", "embarrass",
  "fahrenheit", "gauge", "handkerchief", "immediately", "jeopardize",
  "khaki", "liaison", "millennium", "noticeable", "occurrence",
  "pneumonia", "queue", "reconnaissance", "surveillance", "twelfth",
  "unprecedented", "vengeance", "withdrawal", "yield", "zucchini",
  "ambiguous", "benevolent", "chrysanthemum", "disastrous", "ecstasy",
  "forfeit", "grotesque", "haphazard", "irresistible", "jewelry",
  "knack", "labyrinth", "mischievous", "nauseous", "ophthalmology",
  "paradigm", "quintessential", "renaissance", "sophisticated", "tyranny",
  "ubiquitous", "vulnerable", "wednesday", "exaggerate", "pharaoh",
  "colonel", "subtle", "psychology", "receipt", "schedule",
];

const SENTENCES_BEGINNER = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes perfect when you type every single day.",
  "A journey of a thousand miles begins with a single step.",
  "Technology is best when it brings people together.",
  "The only way to do great work is to love what you do.",
  "Success is not final and failure is not fatal.",
  "Typing fast is a skill that improves with regular practice.",
  "Clear writing is a sign of clear thinking.",
  "Every expert was once a beginner who refused to give up.",
  "Small daily improvements lead to stunning long term results.",
  "The best time to plant a tree was twenty years ago.",
  "Creativity is intelligence having fun with new ideas.",
  "Good habits formed today will shape a better tomorrow.",
  "Focus on progress rather than chasing perfection.",
  "Great things are done by a series of small things brought together.",
  "Stay curious and keep asking questions about the world.",
  "Code is read far more often than it is written.",
];

const SENTENCES_INTERMEDIATE = [
  "Simplicity is the ultimate form of sophistication.",
  "Learning never exhausts the mind; it only ignites it.",
  "Discipline is choosing between what you want now and what you want most.",
  "Don't judge each day by the harvest you reap, but by the seeds you plant.",
  "The difference between ordinary and extraordinary is that little extra.",
  "Quality means doing it right when no one else is watching.",
  "It's not whether you get knocked down; it's whether you get back up.",
  "You miss 100% of the shots you don't take.",
  "I have not failed — I've just found 10,000 ways that won't work.",
  "Hard work beats talent when talent doesn't work hard.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Opportunity is missed by most people because it's dressed in overalls.",
  "Measure twice, cut once; patience saves more time than haste.",
  "What we achieve inwardly will change outer reality.",
  "Whether you think you can, or you think you can't — you're right.",
  "A smooth sea never made a skilled sailor.",
];

const SENTENCES_ADVANCED = [
  "\"Efficiency\" (doing things right) differs from \"effectiveness\" (doing the right things).",
  "The engineer re-calibrated 47 sensors; 3 failed QA at -15.5 degrees.",
  "Schrodinger's cat — simultaneously alive & dead — illustrates quantum superposition.",
  "HTTP/2 multiplexes requests; HTTP/1.1 opened ~6 parallel TCP connections.",
  "In 1969, Apollo 11's computer had just 64KB of memory & a 0.043MHz CPU.",
  "The API returned {\"status\": 429}: rate-limited at 1,000 requests/hour.",
  "Moore's Law predicted transistor counts would double every ~24 months.",
  "She whispered, \"Carpe diem!\" — then vanished into the fog at 3:47 a.m.",
  "E = mc^2 implies that 1kg of mass equals ~9 x 10^16 joules of energy.",
  "Zero-day exploits fetch $100,000+ on gray markets; patch early, patch often!",
  "The recipe calls for 2/3 cup flour, 1/4 tsp salt & 350-degree preheating.",
  "Debugging: being the detective in a crime movie where you're also the murderer.",
  "Q4 revenue rose 23.7% YoY ($4.2M -> $5.2M), beating analysts' estimates.",
  "\"Premature optimization is the root of all evil\" — Donald Knuth (1974).",
  "Pi (3.14159...) is irrational; its digits never terminate or repeat.",
];

const CONTENT = {
  words: {
    beginner: WORDS_BEGINNER,
    intermediate: WORDS_INTERMEDIATE,
    advanced: WORDS_ADVANCED,
  },
  sentences: {
    beginner: SENTENCES_BEGINNER,
    intermediate: SENTENCES_INTERMEDIATE,
    advanced: SENTENCES_ADVANCED,
  },
};

// ---------- Storage (safe wrapper) ----------
// Some environments (sandboxed previews, strict privacy modes) throw on any
// localStorage access. Fall back to in-memory storage so the app still works.
const storage = (() => {
  try {
    const t = "__swiftkeys_test__";
    localStorage.setItem(t, "1");
    localStorage.removeItem(t);
    return {
      get: (k) => localStorage.getItem(k),
      set: (k, v) => localStorage.setItem(k, String(v)),
      remove: (k) => localStorage.removeItem(k),
      keys: () => Object.keys(localStorage),
      persistent: true,
    };
  } catch {
    const mem = new Map();
    return {
      get: (k) => (mem.has(k) ? mem.get(k) : null),
      set: (k, v) => mem.set(k, String(v)),
      remove: (k) => mem.delete(k),
      keys: () => [...mem.keys()],
      persistent: false,
    };
  }
})();

// ---------- State ----------
const state = {
  mode: "words",        // "words" | "sentences"
  difficulty: "beginner", // "beginner" | "intermediate" | "advanced"
  duration: 30,         // seconds
  timeLeft: 30,
  running: false,
  finished: false,
  startTime: null,
  timerId: null,
  wordIndex: 0,
  charIndex: 0,
  correctChars: 0,
  wrongChars: 0,
  totalTyped: 0,        // keystrokes counted for accuracy (excl. backspace)
};

// ---------- Elements ----------
const el = {
  configBar: document.getElementById("configBar"),
  liveStats: document.getElementById("liveStats"),
  timeLeft: document.getElementById("timeLeft"),
  liveWpm: document.getElementById("liveWpm"),
  testArea: document.getElementById("testArea"),
  words: document.getElementById("words"),
  caret: document.getElementById("caret"),
  results: document.getElementById("results"),
  resultWpm: document.getElementById("resultWpm"),
  resultAcc: document.getElementById("resultAcc"),
  resultRaw: document.getElementById("resultRaw"),
  resultChars: document.getElementById("resultChars"),
  resultTime: document.getElementById("resultTime"),
  resultBest: document.getElementById("resultBest"),
  resultMessage: document.getElementById("resultMessage"),
  restartBtn: document.getElementById("restartBtn"),
  restartInline: document.getElementById("restartInline"),
  themeToggle: document.getElementById("themeToggle"),
  statsBtn: document.getElementById("statsBtn"),
  viewStatsBtn: document.getElementById("viewStatsBtn"),
  dashboard: document.getElementById("dashboard"),
  dashboardClose: document.getElementById("dashboardClose"),
  dashEmpty: document.getElementById("dashEmpty"),
  dashContent: document.getElementById("dashContent"),
  dashBestWpm: document.getElementById("dashBestWpm"),
  dashBestCombo: document.getElementById("dashBestCombo"),
  dashAvgWpm: document.getElementById("dashAvgWpm"),
  dashAvgAcc: document.getElementById("dashAvgAcc"),
  dashTests: document.getElementById("dashTests"),
  dashBests: document.getElementById("dashBests"),
  dashChart: document.getElementById("dashChart"),
  dashHistory: document.getElementById("dashHistory"),
  clearStatsBtn: document.getElementById("clearStatsBtn"),
};

// ---------- Text generation ----------
function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateWords() {
  const pool = CONTENT[state.mode][state.difficulty];
  if (state.mode === "words") {
    const out = [];
    let prev = "";
    while (out.length < 120) {
      const w = pool[Math.floor(Math.random() * pool.length)];
      if (w !== prev) { out.push(w); prev = w; }
    }
    return out;
  }
  // sentences mode: join shuffled sentences, split into words
  const out = [];
  for (const s of shuffled(pool)) {
    out.push(...s.split(" "));
    if (out.length > 140) break;
  }
  return out;
}

function renderWords(wordList) {
  // The caret lives inside .words so it scrolls in sync; only remove words.
  el.words.querySelectorAll(".word").forEach((w) => w.remove());
  const frag = document.createDocumentFragment();
  for (const word of wordList) {
    const w = document.createElement("div");
    w.className = "word";
    for (const ch of word) {
      const s = document.createElement("span");
      s.textContent = ch;
      w.appendChild(s);
    }
    frag.appendChild(w);
  }
  el.words.appendChild(frag);
  wordEls = Array.from(el.words.querySelectorAll(".word"));
}

// ---------- Caret & scrolling ----------
let scrollOffset = 0;
let wordEls = [];

function updateCaret() {
  const wordEl = wordEls[state.wordIndex];
  if (!wordEl) return;

  const chars = wordEl.children;
  const wordsRect = el.words.getBoundingClientRect();
  let x, y;

  if (state.charIndex < chars.length) {
    // Caret sits at the left edge of the next character to type.
    const r = chars[state.charIndex].getBoundingClientRect();
    x = r.left - wordsRect.left;
    y = r.top - wordsRect.top;
  } else {
    // Word fully typed: caret sits right after its last character.
    const r = chars[chars.length - 1].getBoundingClientRect();
    x = r.right - wordsRect.left;
    y = r.top - wordsRect.top;
  }

  const lineHeight = parseFloat(getComputedStyle(el.words).lineHeight);

  // Keep the active line as the middle visible line (scroll after line 1)
  const line = Math.round(y / lineHeight);
  const targetOffset = Math.max(0, (line - 1) * lineHeight);
  if (targetOffset !== scrollOffset) {
    scrollOffset = targetOffset;
    el.words.style.transform = `translateY(${-scrollOffset}px)`;
  }

  const caretH = el.caret.offsetHeight;
  // The caret is a child of .words, so coordinates are in .words layout
  // space and the scroll translate carries the caret along automatically.
  el.caret.style.transform =
    `translate(${x - 1}px, ${y + (lineHeight - caretH) / 2}px)`;
}

// ---------- Timer & stats ----------
function elapsedMinutes() {
  if (!state.startTime) return 0;
  return (Date.now() - state.startTime) / 60000;
}

function currentWpm() {
  const min = elapsedMinutes();
  if (min <= 0) return 0;
  return Math.round((state.correctChars / 5) / min);
}

function tick() {
  state.timeLeft -= 1;
  el.timeLeft.textContent = state.timeLeft;
  el.liveWpm.textContent = currentWpm();
  if (state.timeLeft <= 0) finishTest();
}

function startTest() {
  state.running = true;
  state.startTime = Date.now();
  state.timerId = setInterval(tick, 1000);
  el.liveStats.classList.add("running");
  el.configBar.classList.add("faded");
}

function finishTest() {
  clearInterval(state.timerId);
  state.running = false;
  state.finished = true;

  const minutes = state.duration / 60;
  const wpm = Math.round((state.correctChars / 5) / minutes);
  const raw = Math.round((state.totalTyped / 5) / minutes);
  const acc = state.totalTyped > 0
    ? Math.round((state.correctChars / state.totalTyped) * 100)
    : 0;

  el.resultWpm.textContent = wpm;
  el.resultAcc.textContent = `${acc}%`;
  el.resultRaw.textContent = raw;
  el.resultChars.textContent = `${state.correctChars} / ${state.wrongChars}`;
  el.resultTime.textContent = `${state.duration}s`;

  // Personal best (per mode + difficulty + duration)
  const bestKey = `swiftkeys-best-${state.mode}-${state.difficulty}-${state.duration}`;
  const prevBest = Number(storage.get(bestKey) || 0);
  if (wpm > prevBest) {
    storage.set(bestKey, wpm);
    el.resultBest.textContent = `${wpm} ★`;
    el.resultMessage.textContent = prevBest > 0
      ? `New personal best! Previous: ${prevBest} WPM`
      : "First score saved as your personal best!";
  } else {
    el.resultBest.textContent = prevBest;
    el.resultMessage.textContent = feedbackFor(wpm, acc);
  }

  recordHistory({
    ts: Date.now(),
    mode: state.mode,
    difficulty: state.difficulty,
    duration: state.duration,
    wpm,
    raw,
    acc,
  });

  el.results.classList.remove("hidden");
}

// ---------- Stats history ----------
const HISTORY_KEY = "swiftkeys-history";
const HISTORY_LIMIT = 200;

function loadHistory() {
  try {
    const h = JSON.parse(storage.get(HISTORY_KEY) || "[]");
    return Array.isArray(h) ? h : [];
  } catch {
    return [];
  }
}

function recordHistory(entry) {
  const h = loadHistory();
  h.push(entry);
  if (h.length > HISTORY_LIMIT) h.splice(0, h.length - HISTORY_LIMIT);
  storage.set(HISTORY_KEY, JSON.stringify(h));
}

function feedbackFor(wpm, acc) {
  if (acc < 85) return "Slow down a little — accuracy first, speed follows.";
  if (wpm < 25) return "Keep practicing, you're building muscle memory!";
  if (wpm < 45) return "Solid pace — you're around the average typist.";
  if (wpm < 70) return "Nice! You're faster than most people.";
  if (wpm < 100) return "Impressive speed. Keyboard warrior status unlocked.";
  return "Blazing fast! Are you even human?";
}

// ---------- Reset ----------
function resetTest() {
  clearInterval(state.timerId);
  Object.assign(state, {
    timeLeft: state.duration,
    running: false,
    finished: false,
    startTime: null,
    timerId: null,
    wordIndex: 0,
    charIndex: 0,
    correctChars: 0,
    wrongChars: 0,
    totalTyped: 0,
  });
  scrollOffset = 0;
  el.words.style.transform = "translateY(0)";
  el.timeLeft.textContent = state.duration;
  el.liveWpm.textContent = "0";
  el.liveStats.classList.remove("running");
  el.configBar.classList.remove("faded");
  el.results.classList.add("hidden");
  renderWords(generateWords());
  updateCaret();
  el.testArea.focus();
}

// ---------- Typing input ----------
function handleKey(e) {
  if (e.key === "Tab") {
    e.preventDefault();
    resetTest();
    return;
  }
  if (state.finished) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  const isChar = e.key.length === 1;
  const isBackspace = e.key === "Backspace";
  if (!isChar && !isBackspace) return;
  e.preventDefault();

  const wordEl = wordEls[state.wordIndex];
  if (!wordEl) return;
  const chars = wordEl.children;

  if (!state.running && isChar && e.key !== " ") startTest();
  if (!state.running && !state.startTime) return; // ignore leading space/backspace

  el.caret.classList.add("typing");
  clearTimeout(handleKey._t);
  handleKey._t = setTimeout(() => el.caret.classList.remove("typing"), 400);

  if (isBackspace) {
    if (state.charIndex > 0) {
      state.charIndex -= 1;
      const span = chars[state.charIndex];
      if (span.classList.contains("correct")) state.correctChars -= 1;
      if (span.classList.contains("wrong")) state.wrongChars -= 1;
      state.totalTyped = Math.max(0, state.totalTyped - 1);
      span.classList.remove("correct", "wrong");
    }
    updateCaret();
    return;
  }

  if (e.key === " ") {
    // Advance to next word only if something was typed
    if (state.charIndex > 0) {
      // Count untyped remainder of the word as wrong for accuracy? No —
      // standard behaviour: skipped letters just aren't counted as correct.
      state.wordIndex += 1;
      state.charIndex = 0;
      state.correctChars += 1; // the space itself counts toward WPM
      state.totalTyped += 1;
      if (state.wordIndex >= wordEls.length) {
        renderWords(generateWords());
        state.wordIndex = 0;
        scrollOffset = 0;
        el.words.style.transform = "translateY(0)";
      }
    }
    updateCaret();
    return;
  }

  // Regular character
  if (state.charIndex < chars.length) {
    const span = chars[state.charIndex];
    const correct = e.key === span.textContent;
    span.classList.add(correct ? "correct" : "wrong");
    if (correct) state.correctChars += 1;
    else state.wrongChars += 1;
    state.totalTyped += 1;
    state.charIndex += 1;

    // Auto-advance at end of the final word on screen
    const atWordEnd = state.charIndex === chars.length;
    const isLastWord = state.wordIndex === wordEls.length - 1;
    if (atWordEnd && isLastWord) {
      renderWords(generateWords());
      state.wordIndex = 0;
      state.charIndex = 0;
      scrollOffset = 0;
      el.words.style.transform = "translateY(0)";
    }
  } else {
    // Typing past the end of a word counts as an error (ignored visually)
    state.wrongChars += 1;
    state.totalTyped += 1;
  }
  updateCaret();
}

// ---------- Focus handling ----------
function updateFocusState() {
  const focused = document.activeElement === el.testArea;
  el.testArea.classList.toggle("blurred", !focused && !state.finished);
}

el.testArea.addEventListener("focus", updateFocusState);
el.testArea.addEventListener("blur", updateFocusState);
el.testArea.addEventListener("click", () => el.testArea.focus());

document.addEventListener("keydown", (e) => {
  if (!el.dashboard.classList.contains("hidden")) return; // dashboard open
  if (state.finished) {
    if (e.key === "Tab") { e.preventDefault(); resetTest(); }
    return;
  }
  if (document.activeElement !== el.testArea) {
    // Any printable key refocuses the test
    if (e.key.length === 1 || e.key === "Backspace" || e.key === "Tab") {
      el.testArea.focus();
    }
  }
});

el.testArea.addEventListener("keydown", handleKey);

// ---------- Config controls ----------
document.querySelectorAll("[data-mode]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-mode]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.mode = btn.dataset.mode;
    resetTest();
  });
});

document.querySelectorAll("[data-time]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-time]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.duration = Number(btn.dataset.time);
    resetTest();
  });
});

document.querySelectorAll("[data-difficulty]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-difficulty]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.difficulty = btn.dataset.difficulty;
    resetTest();
  });
});

el.restartBtn.addEventListener("click", resetTest);
el.restartInline.addEventListener("click", resetTest);

// ---------- Stats dashboard ----------
const MODES = ["words", "sentences"];
const DIFFICULTIES = ["beginner", "intermediate", "advanced"];
const DURATIONS = [15, 30, 60, 120];

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return d === 1 ? "yesterday" : `${d}d ago`;
}

function bestFor(mode, difficulty, duration) {
  return Number(
    storage.get(`swiftkeys-best-${mode}-${difficulty}-${duration}`) || 0
  );
}

function renderDashboard() {
  const history = loadHistory();

  // Collect all personal bests across combos
  let bestWpm = 0;
  let bestCombo = null;
  for (const m of MODES) {
    for (const d of DIFFICULTIES) {
      for (const t of DURATIONS) {
        const b = bestFor(m, d, t);
        if (b > bestWpm) {
          bestWpm = b;
          bestCombo = { mode: m, difficulty: d, duration: t };
        }
      }
    }
  }

  const hasData = bestWpm > 0 || history.length > 0;
  el.dashEmpty.classList.toggle("hidden", hasData);
  el.dashContent.classList.toggle("hidden", !hasData);
  if (!hasData) return;

  // Hero stats
  el.dashBestWpm.textContent = bestWpm;
  el.dashBestCombo.textContent = bestCombo
    ? `${cap(bestCombo.mode)} · ${cap(bestCombo.difficulty)} · ${bestCombo.duration}s`
    : "—";
  const avgWpm = history.length
    ? Math.round(history.reduce((a, h) => a + h.wpm, 0) / history.length)
    : 0;
  const avgAcc = history.length
    ? Math.round(history.reduce((a, h) => a + h.acc, 0) / history.length)
    : 0;
  el.dashAvgWpm.textContent = avgWpm;
  el.dashAvgAcc.textContent = `${avgAcc}%`;
  el.dashTests.textContent = history.length;

  // Personal-best grid: one table per mode (difficulty rows x duration columns)
  el.dashBests.innerHTML = "";
  for (const m of MODES) {
    const table = document.createElement("table");
    table.className = "dash-table";
    const caption = document.createElement("caption");
    caption.textContent = cap(m);
    table.appendChild(caption);

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.appendChild(document.createElement("th"));
    for (const t of DURATIONS) {
      const th = document.createElement("th");
      th.textContent = `${t}s`;
      headRow.appendChild(th);
    }
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (const d of DIFFICULTIES) {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.textContent = cap(d);
      tr.appendChild(th);
      for (const t of DURATIONS) {
        const td = document.createElement("td");
        const b = bestFor(m, d, t);
        td.textContent = b > 0 ? b : "—";
        if (b > 0 && b === bestWpm) td.classList.add("is-best");
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    el.dashBests.appendChild(table);
  }

  // WPM trend bar chart (last 20 tests)
  el.dashChart.innerHTML = "";
  const recent = history.slice(-20);
  const maxWpm = Math.max(...recent.map((h) => h.wpm), 1);
  for (const h of recent) {
    const bar = document.createElement("div");
    bar.className = "dash-bar";
    const fill = document.createElement("div");
    fill.className = "dash-bar-fill";
    fill.style.height = `${Math.max(4, (h.wpm / maxWpm) * 100)}%`;
    if (h.wpm === bestWpm && bestWpm > 0) fill.classList.add("is-best");
    bar.title = `${h.wpm} WPM · ${h.acc}% · ${cap(h.mode)} ${cap(h.difficulty)} ${h.duration}s`;
    const label = document.createElement("span");
    label.className = "dash-bar-label";
    label.textContent = h.wpm;
    bar.appendChild(label);
    bar.appendChild(fill);
    el.dashChart.appendChild(bar);
  }

  // Recent tests table (latest 10, newest first)
  const tbody = el.dashHistory.querySelector("tbody");
  tbody.innerHTML = "";
  for (const h of history.slice(-10).reverse()) {
    const tr = document.createElement("tr");
    const cells = [
      timeAgo(h.ts),
      `${cap(h.mode)} · ${cap(h.difficulty)} · ${h.duration}s`,
      h.wpm,
      `${h.acc}%`,
    ];
    cells.forEach((c, i) => {
      const td = document.createElement("td");
      td.textContent = c;
      if (i === 2 && h.wpm === bestWpm && bestWpm > 0) td.classList.add("is-best");
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
}

function openDashboard() {
  renderDashboard();
  el.dashboard.classList.remove("hidden");
}

function closeDashboard() {
  el.dashboard.classList.add("hidden");
  if (!state.finished) el.testArea.focus();
}

el.statsBtn.addEventListener("click", openDashboard);
el.viewStatsBtn.addEventListener("click", () => {
  el.results.classList.add("hidden");
  openDashboard();
});
el.dashboardClose.addEventListener("click", closeDashboard);
el.dashboard.addEventListener("click", (e) => {
  if (e.target === el.dashboard) closeDashboard();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !el.dashboard.classList.contains("hidden")) {
    closeDashboard();
  }
});

el.clearStatsBtn.addEventListener("click", () => {
  if (!confirm("Clear all personal bests and test history?")) return;
  for (const key of storage.keys()) {
    if (key.startsWith("swiftkeys-best-") || key === HISTORY_KEY) {
      storage.remove(key);
    }
  }
  renderDashboard();
});

// ---------- Theme ----------
function applyTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  storage.set("swiftkeys-theme", theme);
}

el.themeToggle.addEventListener("click", () => {
  applyTheme(document.body.classList.contains("light") ? "dark" : "light");
});

applyTheme(storage.get("swiftkeys-theme") || "dark");

// ---------- Boot ----------
window.addEventListener("resize", updateCaret);
resetTest();
