# ⌨ SwiftKeys — Typing Speed Challenge

A fast, minimal typing-speed test that runs entirely in the browser. No
dependencies, no build step — just open `index.html`.

## Features

- **Two test modes** — random common words, or full sentences with
  punctuation, numbers, and symbols
- **Three difficulty levels** — Beginner, Intermediate, Advanced word and
  sentence pools
- **Four durations** — 15 s, 30 s, 60 s, 120 s
- **Live WPM + countdown** while you type, with a smooth scrolling
  three-line word window and monkeytype-style caret
- **Results card** — WPM, raw WPM, accuracy, correct/wrong chars, and
  personal best per configuration
- **Stats dashboard** (▤) — overall personal best, averages, per-combo
  best-WPM tables (mode × difficulty × duration), WPM trend chart of your
  last 20 tests, and recent-test history
- **Dark / light theme** toggle (◐), persisted
- **Keyboard-first** — start typing to begin, `Tab` to restart, `Esc` to
  close the dashboard

## Running

Open `index.html` in any modern browser, or serve the folder:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Notes

- Scores, history, and theme are stored in `localStorage`
  (`swiftkeys-*` keys). If storage is blocked (sandboxed preview/private
  browsing), the game still works with in-memory storage for the session.
- WPM is computed as `(correct chars / 5) / minutes`; raw WPM counts all
  keystrokes. Accuracy is correct ÷ total typed.

## Stack

Plain HTML + CSS + vanilla JavaScript. No frameworks, no build.
