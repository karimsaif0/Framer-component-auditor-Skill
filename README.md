# Framer Component Auditor

An agent skill that audits and repairs Framer code components (`.tsx`) against Framer's published component rules.

- **Audit mode:** reviews a component and reports findings by severity, with evidence and fixes. It does not change your code.
- **Repair mode:** audits, fixes confirmed defects, and returns the complete corrected file.

This is an independent review tool. It is **not** an official Framer validator and cannot guarantee Marketplace approval.

## What it checks

Rules come from Framer's own pages (verified 10 Nov 2026): the [auto-sizing](https://www.framer.com/developers/auto-sizing) and [property controls](https://www.framer.com/developers/property-controls) docs, and the [Prepare your component for review](https://www.framer.com/help/articles/prepare-component-review/) checklist.

| Area | Examples |
|---|---|
| Layout | `@framerSupportedLayoutWidth/Height` annotations, hard-coded sizes, `style` prop, `position: fixed` |
| Property controls | `defaultProps`, titles and descriptions, deprecated controls, `Enum` option titles, `File` types, controls with no effect |
| Static rendering | `useIsStaticRenderer()`, work at module level, `typeof window` checks that do not fix it |
| Safety and scope | raw HTML injection, remote scripts, changes to `document.body`/`head`, page-wide observers |
| Performance | pausing off-screen, cleanup, effect dependencies, WebGL/canvas costs |
| Accessibility | native elements, alt text, focus, reduced motion |
| Marketplace | submission steps and preview requirements (listing and originality items are reported as Not tested) |

Findings use Critical / High / Medium / Low / Recommendation, each with a confidence level and the evidence. Environments (Canvas, Preview, published, static) are reported separately and marked **Not tested** unless actually tested.

## Install

Copy `.agents/skills/framer-component-auditor/` into your project's `.agents/skills/` folder, then start a fresh agent session. For Claude, you can also place the folder under `.claude/skills/`.

```
.agents/skills/framer-component-auditor/
├── SKILL.md
├── references/         verified rules, with sources and dates
├── scripts/precheck.py finds mechanical leads with line numbers
├── evals/              9 test components with planted bugs, and what to expect
└── tests/              regression test for the script
```

## Use

- `Audit this Framer component. Do not modify it.`
- `Repair this Framer component and return the complete corrected .tsx.`
- `Is this ready for the Marketplace?`

Quick script run: `python .agents/skills/framer-component-auditor/scripts/precheck.py MyComponent.tsx`

## Testing status

- `python .agents/skills/framer-component-auditor/tests/test_precheck.py` checks the script against all nine eval components.
- The nine components in `evals/` define what a correct audit must and must not say. They were self-tested by the author in a single session. Independent runs and audits of real approved/rejected components are still pending, so treat results as a strong review aid, not a proof.

## Limits

- Static review only unless you run builds or tests. It cannot confirm Canvas, Preview, or published behavior.
- Code overrides (`withX`) get a limited review. CMS and variant-specific behavior is not covered.
- Framer changes its pages. The references note the date they were verified; re-check before relying on them.

## Contributing

Open an issue or pull request with the affected rule, a link to the official Framer page, and a small example component. Add or update an eval when you change a rule.

## License

MIT. See `LICENSE`.

---

## Connect

**Made with 💛 by Karim Saif**

- **X:** [@karimsaif0](https://x.com/karimsaif0)
- **Email:** [karimsaif010@gmail.com](mailto:karimsaif010@gmail.com)
