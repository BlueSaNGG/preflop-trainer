# Preflop Trainer

A free, mobile-friendly Texas Hold'em preflop practice tool.

**Live:** https://bluesangg.github.io/preflop-trainer/

## Why a trainer, not a calculator

Equity calculators are a solved commodity — dozens of free ones exist, and a raw equity number doesn't tell you what to *do*. The biggest leak for beginning and intermediate players is preflop: the decisions are frequent, high-leverage, and entirely learnable through repetition.

This app treats preflop like flashcards: real 6-max spots, standard ranges, instant feedback with the *why* behind every answer.

## Features

- 73 training spots: opening, facing an open/3-bet/4-bet, blind battles and squeezes
- English and Chinese interface, questions and explanations
- Miss review, spaced repetition and weak-scenario practice
- Per-scenario accuracy and a 14-day history stored in your browser
- 13×13 opening-range grids for 100bb RFI questions
- 10-question, 20-question or full-pool sessions (small pools end when exhausted)
- Visible scenario context and reference/verification limitations

## What the answer key means

This is a **simplified training baseline, not a solver-verified GTO trainer**.
A marked answer means that it matches this app's answer key; it does not prove
that another action has lower EV or zero solver frequency.

- 100bb questions use a six-player cash-game baseline without antes. MP means HJ.
- 20–40bb questions are tournament examples. Ante structure, payouts and ICM are
  unspecified, so these answers must not be treated as precise tournament advice.
- SB RFI grids use a raise-or-fold simplification, not a universal ban on limping.
- Rake, opening sizes and opponent ranges are not fully parameterized. A complete
  solver comparison requires these inputs.

The historical chart reference is [Preflop Wizard's chart article](https://www.preflopwizard.app/blog/preflop-charts).
Preflop Wizard is not GTO Wizard. The reference is available from chart-based
feedback, but no licensed solver export or per-question frequency evidence is
bundled. Other questions are labeled **simplified choice / unverified**.

## Accuracy pass — September 2026

- Corrected reversed positional explanations (CO vs BTN and HJ vs SB).
- Corrected impossible squeeze action orders and the associated pot description.
- Fixed the BB facing 2.5bb-open pot-odds example: 4bb in the pot, 1.5bb to call,
  27.3% break-even raw equity before rake and realization.
- Corrected KJo/KJs identification and suitedness-versus-kicker explanations.
- Removed several universal claims about premiums, pairs, SB limping and short stacks.
- Removed unsupported “chart-verified”, “solver consensus” and mathematical-certainty labels.
- Checked all 100bb RFI answers against the displayed grids.

This is a first accuracy pass, **not a completed strategic audit**. Advanced and
short-stack answers still need a documented, scenario-specific source. No changes
to action frequencies are implied by the wording corrections.

## Development and verification

Open `index.html` directly; no installation or build is required.
Run `node tests/validate.mjs` for deck integrity, position/order regressions,
pot-odds arithmetic and answer/grid consistency checks. These checks do not prove
GTO optimality.

## Next priorities

1. Attach explicit game settings and a usable source to every question.
2. Replace unsupported advanced answers with sourced frequencies or mark multiple
   acceptable actions when warranted.
3. Separate cash and tournament practice after their assumptions are documented.
