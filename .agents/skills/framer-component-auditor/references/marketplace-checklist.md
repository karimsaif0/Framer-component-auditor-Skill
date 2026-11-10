# Framer Marketplace Readiness Checklist

Evaluate each item as PASS, FAIL, REVIEW, or NOT APPLICABLE.

## Product quality
- [ ] Component purpose is clear from its name and description.
- [ ] Initial/default state looks intentional and usable.
- [ ] Component works at small, medium, and large frame sizes.
- [ ] Controls are understandable and have sensible defaults.
- [ ] Controls update the component predictably.
- [ ] No console errors or obvious runtime failures in tested environments.

## Framer integration
- [ ] Component is discoverable as a Code Component.
- [ ] Imports and APIs are compatible with the target Framer environment.
- [ ] Property controls use supported ControlType values.
- [ ] Defaults match the component's TypeScript types.
- [ ] Canvas and Preview behavior are checked.
- [ ] Static rendering behavior is checked where applicable.

## UX and accessibility
- [ ] Mobile/touch behavior is usable.
- [ ] Keyboard interaction is supported where relevant.
- [ ] Focus and accessible labels are present where relevant.
- [ ] Reduced-motion preferences are respected where relevant.
- [ ] Text and interactive targets remain usable at narrow sizes.

## Reliability and performance
- [ ] Effects clean up listeners, observers, timers, and animation frames.
- [ ] No avoidable render-time browser-global access.
- [ ] Heavy effects have performance safeguards.
- [ ] Assets and dependencies resolve reliably.
- [ ] Failure states have graceful fallbacks.

## Documentation and trust
- [ ] Controls and customization are documented.
- [ ] External services/network requests are disclosed and necessary.
- [ ] No misleading claims about compatibility or approval.
- [ ] License and attribution obligations are respected.

A checked checklist is not a guarantee of Marketplace acceptance. Record the tested Framer environment and the limits of the audit.


## Review reporting safeguards

- Report the code-review findings separately from dashboard, listing, preview-page, originality, and submission checks.
- Mark external/dashboard-only requirements as **Not tested** unless the relevant Framer project or Creator Dashboard was actually inspected.
- Do not invent requirements when official page content is unavailable. State the retrieval limitation and link the official page for manual verification.
