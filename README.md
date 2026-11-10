# Framer Component Auditor

**A practical Codex skill for auditing and repairing Framer Code Components.**  
Created by **Karim Saif** for designers and creators who want their React/TypeScript components to be more reliable, responsive, performant, and ready for serious Framer testing.

<p align="center">
  <strong>Audit first. Fix with confidence. Test in Framer.</strong>
</p>

---

## What is this?

Framer Component Auditor is a reusable agent skill that reviews Framer Code Components (`.tsx`) against a structured engineering checklist. It helps identify problems that can prevent a component from rendering correctly, behaving consistently across frame sizes, or being ready for a Marketplace submission.

It is designed for a practical workflow: share your component, ask for an audit, understand the findings, and request a complete corrected component when changes are needed.

> **Important:** This is an independent code-review skill, not an official Framer validator. It cannot guarantee Framer Marketplace acceptance. Final compatibility and Marketplace decisions belong to Framer and must be verified in the actual Framer environment.

## Highlights

- **Two working modes** — audit without changing source, or audit and repair when requested.
- **Framer API review** — inspect Framer imports, component exports, React patterns, and compatibility risks.
- **Property control checks** — review `addPropertyControls`, control types, defaults, options, and descriptions.
- **Rendering safety** — inspect Canvas, Preview, published-page, and static-rendering risks separately.
- **Responsive behavior** — review parent-frame resizing, narrow layouts, overflow, and mobile behavior.
- **Interaction and accessibility** — inspect pointer, touch, keyboard, focus, accessible labels, and reduced motion.
- **Performance and lifecycle** — review animation frames, event listeners, observers, timers, canvas, WebGL, and cleanup.
- **Useful fallbacks** — identify fragile browser-only assumptions and missing fallback states.
- **Severity-ranked findings** — distinguish critical defects, high/medium/low issues, and optional recommendations.
- **Honest verification** — never claim a build, browser test, Framer test, or Marketplace approval unless it actually happened.

## What it checks

| Area | Review coverage |
| --- | --- |
| Code quality | TypeScript, JSX, imports, exports, React hooks, state, refs, and dependencies |
| Framer integration | Component discovery, supported APIs, property controls, defaults, and control behavior |
| Rendering | Canvas/editor, Preview, published page, and static-renderer assumptions |
| Responsive design | Frame resizing, intrinsic sizing, breakpoints, clipping, overflow, and mobile layouts |
| Interaction | Pointer, touch, keyboard, focus, and hover-dependent behavior |
| Accessibility | Semantic structure, accessible names, focus visibility, and reduced motion |
| Performance | Animation loops, DPR, expensive rendering, bounded data, and offscreen behavior |
| Resource lifecycle | Cleanup for observers, listeners, timers, animation frames, media, and WebGL resources |
| Marketplace preparation | Defaults, documentation, dependencies, assets, reliability, and trust |

The checks are evidence-based. If a behavior cannot be verified from the supplied code or available tools, it is marked as untested or requiring manual review—not silently treated as a pass.

## Two modes

### 1. Audit mode

Use this when you want a review without changing your component.

Example prompts:

- `Audit this Framer component for Marketplace readiness. Do not modify the code.`
- `Review this .tsx for Framer compatibility and list every issue by severity.`
- `Check the property controls, static rendering, responsiveness, and performance.`

The skill returns a structured report with findings, evidence, severity, confidence, and recommended fixes.

### 2. Repair mode

Use this when you want the component fixed.

Example prompts:

- `Repair this Framer component and return the complete corrected .tsx.`
- `Fix all confirmed issues while preserving the original design and interactions.`
- `Make this component more reliable in Framer, then re-audit the result.`

The skill is instructed to preserve the original visual direction and feature set, avoid generic replacements, and return the **complete corrected source** whenever the complete source is available.

## Audit report

The skill uses a consistent report structure:

1. **Summary** — a direct assessment of the component.
2. **Findings** — grouped by Critical, High, Medium, Low, and Recommendations.
3. **Framer compatibility** — separate status for Canvas, Preview, published output, and static rendering.
4. **Property controls** — defaults, types, descriptions, and expected behavior.
5. **Responsive and interaction review** — resizing, touch, keyboard, and accessibility.
6. **Performance and lifecycle** — rendering cost, animation, cleanup, and fallback behavior.
7. **Fixes applied** — included in Repair mode.
8. **Remaining risks and manual test plan** — clear next steps in Framer.
9. **Final verdict** — what the evidence supports and what remains unverified.

### Severity levels

- **Critical** — likely to prevent compilation, loading, or core operation; severe crash or security/privacy issue.
- **High** — major Framer incompatibility, broken core interaction, major responsive failure, or lifecycle leak.
- **Medium** — meaningful accessibility, performance, property-control, or cross-environment risk.
- **Low** — minor UX, maintainability, or documentation issue.
- **Recommendation** — optional improvement, not a confirmed defect.

### Engineering score

A provisional 0–100 engineering assessment is used to organize the review:

- Framer integration — 25
- Runtime and rendering safety — 20
- Responsiveness and interaction — 15
- Performance and lifecycle — 15
- Accessibility — 10
- Property controls and defaults — 10
- Documentation and maintainability — 5

This is an **engineering assessment only**, not an official Framer score. Unknown or untested areas must be called out.

## Installation

### Project-level installation

1. Download or clone this repository.
2. Copy the `.agents/skills/framer-component-auditor/` folder into your project's `.agents/skills/` directory.
3. Open the project with your Codex workflow.
4. Start a new or refreshed agent session if the skill is not detected.

Your project should contain:

```text
your-project/
└── .agents/
    └── skills/
        └── framer-component-auditor/
            ├── SKILL.md
            └── references/
                ├── framer-requirements.md
                ├── marketplace-checklist.md
                └── performance-checklist.md
```

### Use with Codex

This repository follows the agent-skill folder convention. Put the skill folder in a location recognized by your Codex setup. Project-scoped installation is the simplest way to use it for a specific Framer project. If your environment does not detect the skill immediately, refresh or restart the agent session.

## Recommended workflow

1. **Start with the complete source.** Provide the full component and any related files or package configuration that affect it.
2. **Run Audit mode.** Ask for a complete review without changing the code.
3. **Review the findings.** Prioritize confirmed Critical and High issues.
4. **Request Repair mode.** Ask for safe fixes while preserving the intended design and behavior.
5. **Re-audit the result.** Confirm that fixes did not introduce new issues.
6. **Test in Framer.** Insert the component, resize its frame, change every control, test narrow/mobile layouts, inspect Preview, and test a published staging page.
7. **Prepare for Marketplace review.** Use the included checklist and verify current Framer requirements before submitting.

## Repository structure

```text
.
├── .agents/
│   └── skills/
│       └── framer-component-auditor/
│           ├── SKILL.md
│           └── references/
│               ├── framer-requirements.md
│               ├── marketplace-checklist.md
│               └── performance-checklist.md
├── LICENSE
└── README.md
```

### Reference guides

- [Framer requirements](.agents/skills/framer-component-auditor/references/framer-requirements.md) — compatibility and rendering checklist.
- [Marketplace checklist](.agents/skills/framer-component-auditor/references/marketplace-checklist.md) — product quality, integration, UX, reliability, and documentation.
- [Performance checklist](.agents/skills/framer-component-auditor/references/performance-checklist.md) — animation, cleanup, WebGL, canvas, and resource lifecycle.

## Scope and limitations

The skill can inspect source code and use tools available in the active environment. It must clearly distinguish:

- Static code inspection
- Automated compilation or tests
- Browser/runtime testing
- Framer Canvas and Preview testing
- Published-site testing
- Marketplace review

A successful static review does not prove that a component works in Framer. A successful local build does not prove Marketplace acceptance. Always test the component in the target Framer environment and verify current official requirements.

## Contributing

Suggestions, issue reports, and improvements are welcome. When proposing changes, include the affected checklist area and a small example of the problem or expected behavior. Keep guidance practical, evidence-based, and careful not to invent Framer APIs or guarantee approval.

## License

Released under the [MIT License](LICENSE). Copyright © 2026 Karim Saif.

---

## Connect

**Made with 💛 by Karim Saif**

- **X:** [@karimsaif0](https://x.com/karimsaif0)
- **Email:** [karimsaif010@gmail.com](mailto:karimsaif010@gmail.com)
