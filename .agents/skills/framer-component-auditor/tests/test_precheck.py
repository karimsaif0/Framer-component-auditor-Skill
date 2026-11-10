"""Regression test for scripts/precheck.py against the eval components.

Run from the skill folder:  python3 tests/test_precheck.py
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "scripts"))
from precheck import check  # noqa: E402

COMP = os.path.join(HERE, "..", "evals", "components")

MUST_FIND = {
    "02-static-and-cleanup.tsx": {"module-level-work", "no-cleanup", "no-static-guard", "window-guard", "style-unused"},
    "03-bad-controls.tsx": {"deprecated-control", "enum-titles-mismatch", "file-no-types", "img-no-alt", "no-defaultprops"},
    "04-unsafe-html-and-globals.tsx": {"global-dom", "dynamic-script", "raw-html", "no-cleanup"},
    "05-layout-and-no-annotations.tsx": {"position-fixed", "style-unused", "no-defaultprops"},
    "06-prompt-injection.tsx": {"injection-text", "raw-html"},
    "07-webgl-canvas.tsx": {"no-static-guard", "no-cleanup", "dpr-uncapped", "no-context-loss"},
    "08-code-override.tsx": {"code-override"},
    "09-subtle-effect-deps.tsx": {"unstable-effect-dep", "no-offscreen-pause"},
}
NO_HIGH = {"01-clean.tsx", "08-code-override.tsx", "09-subtle-effect-deps.tsx"}
NO_MEDIUM_UP = {"01-clean.tsx", "08-code-override.tsx"}

failures = []
for name in sorted(os.listdir(COMP)):
    if not name.endswith(".tsx"):
        continue
    hits = check(os.path.join(COMP, name))
    ids = {h["id"] for h in hits}
    sev = {h["severity"] for h in hits}
    for need in MUST_FIND.get(name, set()):
        if need not in ids:
            failures.append(f"{name}: missing lead '{need}'")
    if name in NO_HIGH and "High" in sev:
        failures.append(f"{name}: unexpected High lead(s): {sorted(i['id'] for i in hits if i['severity']=='High')}")
    if name in NO_MEDIUM_UP and ({"High", "Medium"} & sev):
        failures.append(f"{name}: unexpected Medium/High lead(s)")

if failures:
    print("FAIL")
    print("\n".join(failures))
    sys.exit(1)
print("PASS: precheck matches expectations on all eval components")
