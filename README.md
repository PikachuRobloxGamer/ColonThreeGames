# ArcadeVault - Unblocked Games Hub

A fast, lightweight unblocked games portal where games are stored as iframes in `games.json`.

## GitHub Pages Deployment

The repository is configured for zero-configuration deployment to GitHub Pages.

### Why GitHub Pages was previously blank:
1. **Absolute vs Relative paths**: By default, Vite outputs asset links as `/assets/...`, which fails on GitHub Pages (e.g., `https://<username>.github.io/<repo-name>/assets/...` 404s). We added `base: './'` in `vite.config.js` and relative `./src/main.jsx` in `index.html` so all paths are relative.
2. **Relative game paths**: Game iframes and `games.json` now use relative `./games/...` paths so games load properly in subfolders.
3. **Jekyll processing**: An empty `.nojekyll` file has been added in `public/` so GitHub Pages serves all assets without filtering.

### Recommended Deployment Method:
In your GitHub repository:
1. Go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push your code. The included `.github/workflows/deploy.yml` workflow will automatically build and publish the app to GitHub Pages.
