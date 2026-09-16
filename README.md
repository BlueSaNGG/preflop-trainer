# Preflop Trainer

A free, mobile-friendly Texas Hold'em **preflop decision trainer**. Drill real spots until the decisions are automatic — no solver, no account, no paywall.

**Live:** https://bluesangg.github.io/preflop-trainer/

## Why a trainer, not a calculator

Equity calculators are a solved commodity — dozens of free ones exist, and a raw equity number doesn't tell you what to *do*. The biggest leak for beginning and intermediate players is preflop: the decisions are frequent, high-leverage, and entirely learnable through repetition.

This app treats preflop like flashcards: real 6-max spots, standard ranges, instant feedback with the *why* behind every answer.

## Features

- **73 curated spots** across six scenarios: raise-first-in, facing an open, facing a 3-bet, blind-vs-blind, squeeze spots, facing a 4-bet — plus short-stack (20–40bb) adjustments
- **Spaced repetition** — missed spots resurface first in your next drill (marked ↻ review) until you nail them
- **Detailed explanations** — every answer gets 2–3 sentences: the principle, why it applies, and the common mistake
- **Source transparency** — each answer tagged ✓ chart-verified, solver consensus, or poker math, so you know how much to trust it
- **Miss review** — session summary lists every spot you missed with the full explanation
- **Progress tracking** — per-scenario all-time accuracy bars and a 14-day accuracy strip, stored locally
- **🎯 Weak-spot mode** — drills your two worst scenarios by tracked accuracy
- **Range visualizer** — every 100bb RFI answer shows the position's 13×13 opening range with your hand marked
- **Streaks & accuracy** — session stats broken down by scenario so you see where you leak
- **Drill lengths** — 10, 20, or endless
- **Mobile-first** — big touch targets, works on the train

## Ranges — verified, not vibes

Three confidence tiers, labeled on every spot:

- **✓ chart-verified (42)** — RFI, BB defense, BTN-vs-CO, and 20bb/40bb MTT ranges (6-max 100bb cash + MTT) taken directly from [Preflop Wizard's free GTO preflop charts](https://www.preflopwizard.app/blog/preflop-charts)
- **solver consensus (30)** — facing a 3-bet / 4-bet, squeeze, blind-vs-blind: the spots where solvers and coaching standards agree, not the mixed-frequency ones
- **poker math (1)** — short-stack math spots that follow standard poker math rather than a specific chart

Deliberate simplifications, because this is a training tool:

- **Mixed-frequency hands are excluded.** e.g. UTG A5s (solvers mix ~40% raise / 60% fold) doesn't belong in a quiz with one right answer — only pure spots are asked.
- **Short-stack math spots** (e.g. folding 55 at 40bb for lack of implied odds) follow standard poker math rather than a specific chart.

## Local development

Single `index.html` — just open it. No build step.

## Roadmap

- Shot-clock mode (10s per decision)
- Shareable session summary
