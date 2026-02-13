# Commercial Director Portfolio

A clean, responsive one-page portfolio website tailored for a director working in live-action and animated commercials.

## Customize

Update these items in `index.html`:

- `Your Name`
- `you@example.com`
- `Your City`
- Project titles, descriptions, and links under **Selected Commercial Projects**

## Run locally

You can open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages (recommended)

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` so deployment is automatic on pushes to `main`.

### One-time setup

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).

Your published URL will be:

- `https://<your-username>.github.io/<repository-name>/`

If your repository is named `<your-username>.github.io`, your URL is:

- `https://<your-username>.github.io/`

## Fix for “Not Found” on GitHub Pages

If you see a Not Found page:

1. Confirm the latest workflow run **succeeded** in the **Actions** tab.
2. Confirm **Settings → Pages → Source** is **GitHub Actions**.
3. Check the URL uses the exact repository name and casing.
4. If this is a project repo (not `<your-username>.github.io`), include the repo name in the URL path.
5. Wait 1–2 minutes and hard refresh.

## Files in this project

- `index.html` — structure and content
- `styles.css` — visual styling and responsive layout
- `script.js` — menu toggle + dynamic footer year
- `.github/workflows/deploy-pages.yml` — automated Pages deployment
- `.nojekyll` — ensures static files are served as-is
