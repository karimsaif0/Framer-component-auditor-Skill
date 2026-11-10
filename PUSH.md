# Push to GitHub

From the folder that contains this README:

```bash
git clone https://github.com/karimsaif0/Framer-component-auditor-Skill.git
cd Framer-component-auditor-Skill
# copy these over the clone (keep the existing LICENSE):
cp -r /path/to/repo/.agents .
cp /path/to/repo/README.md /path/to/repo/CHANGELOG.md .
git add -A
git commit -m "v2.0.0: verified Framer rules, precheck script, evals"
git push origin main
```
