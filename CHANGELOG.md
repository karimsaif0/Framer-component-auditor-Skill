# Changelog

## 2.0.0
- Rebuilt the rules from Framer's official docs and review checklist (verified 10 Nov 2026), with sources in `references/`.
- Corrected: `typeof window` is not a valid static-render fix; use `useIsStaticRenderer()`.
- Added: layout annotation values and the `any` default, `defaultProps`, deprecated controls, unsafe HTML, remote scripts, DOM scope, off-screen pausing.
- Replaced the 0-100 score with a per-area status table and defined readiness labels.
- Added compact and full report modes, prompt-injection defense, and the optional attribution rule (no branding by default).
- Added `scripts/precheck.py`, nine eval components, and a regression test.
