# Framer Code Component Compatibility Reference

Use this as a verification checklist, not as a substitute for current official Framer documentation. Framer APIs and Marketplace requirements can change. If web access is available, verify version-sensitive requirements against current official Framer documentation before making definitive claims.

## Component structure
- A Code Component is a React component exported in a way Framer can discover.
- Use Framer-supported imports and APIs. Flag imports from undocumented or unavailable internal paths.
- Check that the component renders a valid React element and has stable, predictable defaults.
- Check TypeScript types, JSX syntax, import/export consistency, and dependency availability.
- Do not assume browser-only APIs exist during server rendering, static rendering, or the Framer canvas.

## Property controls
- Inspect `addPropertyControls` and ensure the exported component is the component receiving the controls.
- Confirm every exposed control has a sensible default and valid options/ranges.
- Verify control types match the values consumed by the component.
- Check optional values, arrays, objects, fonts, colors, links, images, and enum values defensively.
- Recommend concise descriptions for controls where the API supports them; do not invent a Framer API field if unsupported by the installed Framer type definitions.
- Ensure controls do not expose internal implementation details or unsafe values.
- Ensure changing a control updates the rendered output and does not leave stale derived state.

## Rendering environments
Check behavior in:
- Framer canvas/editor
- Preview
- Published page
- Static rendering / thumbnail rendering where applicable

Look for:
- `window`, `document`, `navigator`, `localStorage`, `matchMedia`, `ResizeObserver`, `IntersectionObserver`, `requestAnimationFrame`, `AudioContext`, `WebGL`, and DOM access during render or module initialization.
- Effects that assume browser globals without guards.
- Missing cleanup for listeners, observers, timers, animation frames, media streams, and WebGL resources.
- Static-renderer detection that returns an empty component or causes the canvas to appear broken.
- hydration or first-render mismatches.

A fallback should remain useful and visually representative. Do not claim a static-renderer issue is solved merely by adding `useIsStaticRenderer`; inspect actual behavior and API compatibility.

## Layout and responsiveness
- Check that the component can fill its Framer frame and responds to parent size changes.
- Avoid fixed dimensions unless they are an intentional design requirement and clearly documented.
- Check ResizeObserver usage, observer cleanup, and resize-driven recalculation.
- Check overflow, clipping, aspect ratios, intrinsic sizing, and min/max constraints.
- Verify mobile breakpoints and narrow containers, not just desktop viewport behavior.

## Interaction and accessibility
- Verify pointer, touch, keyboard, focus, and click/tap behavior as relevant.
- Avoid hover-only essential functionality.
- Respect `prefers-reduced-motion` where motion is significant.
- Provide semantic elements, accessible names, keyboard operation, and visible focus where appropriate.
- Keep text selectable unless the interaction intentionally requires otherwise.
- Avoid trapping scroll or hijacking global input without a clear opt-in.

## Performance and stability
- Detect expensive work in render and repeated allocations in animation loops.
- Check that animation loops pause when not needed and stop on unmount.
- Check DPR / canvas / WebGL pixel cost and provide sensible caps for intensive effects.
- Check event listener and observer cleanup.
- Check for unbounded arrays, particles, DOM nodes, texture creation, and repeated resource allocation.
- Check WebGL context loss and graceful fallback when relevant.
- Avoid unnecessary dependencies and large imports.

## Marketplace assessment
Assess:
- Clear component name and purpose
- Useful property controls with descriptions
- Sensible defaults and a polished initial state
- Reliable canvas, preview, and published behavior
- Responsive behavior and accessibility
- No broken external assets or undocumented runtime dependencies
- No misleading claims, hidden tracking, or unexpected network activity
- Clear documentation and customization guidance

Do not represent an audit as official Framer approval. Marketplace acceptance is determined by Framer's review process and current policies.
