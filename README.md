# Preflop Trainer

A free, mobile-friendly Texas Hold'em **preflop decision trainer**. Drill real spots until the decisions are automatic — no solver, no account, no paywall.

**Live:** https://bluesangg.github.io/preflop-trainer/

## Why a trainer, not a calculator

Equity calculators are a solved commodity — dozens of free ones exist, and a raw equity number doesn't tell you what to *do*. The biggest leak for beginning and intermediate players is preflop: the decisions are frequent, high-leverage, and entirely learnable through repetition.

This app treats preflop like flashcards: real 6-max spots, standard ranges, instant feedback with the *why* behind every answer.

## Features

- **49 curated spots** across three scenarios: raise-first-in, facing an open, facing a 3-bet — plus short-stack (20–40bb) adjustments
- **Instant feedback** — every answer explained in one crisp line
- **Streaks & accuracy** — session stats broken down by scenario so you see where you leak
- **Drill lengths** — 10, 20, or endless
- **Mobile-first** — big touch targets, works on the train

## Ranges

Spots use standard 6-max GTO-ish ranges (public knowledge, e.g. published RFI/3-bet charts). Each question has one clear, defensible answer — borderline solver-mixed spots are deliberately excluded from v1.

## Local development

Single `index.html` — just open it. No build step.

## Roadmap

- Spaced repetition: resurface your missed spots
- Range visualizer: see villain's continuing range per spot
- PLO / MTT push-fold packs
