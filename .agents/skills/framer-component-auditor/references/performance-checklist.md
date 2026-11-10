# Performance and Lifecycle Checklist

For each item, report evidence and severity.

- Animation loops: started only when needed; canceled on cleanup.
- Observers: `ResizeObserver` and `IntersectionObserver` disconnected on cleanup.
- Events: window/document/canvas listeners removed with the same callback and options.
- Timers: timeouts and intervals cleared on cleanup.
- WebGL: buffers, textures, programs, render targets, and contexts handled responsibly.
- Canvas: drawing dimensions account for CSS size and capped device pixel ratio.
- Visibility: expensive animation pauses when offscreen or document-hidden where appropriate.
- Rendering: expensive calculations are memoized only when beneficial; no unnecessary state churn.
- Data growth: particles, trails, histories, and caches are bounded.
- Media: streams and audio contexts are stopped/closed when no longer needed.
- Reduced motion: animation can be reduced or disabled where appropriate.
- Fallbacks: unsupported APIs and context failures degrade gracefully.
