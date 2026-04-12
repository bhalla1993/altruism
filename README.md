# Altruism Digital Studio Web App

Production-ready React application for a small business offering:

- Website development services
- Online resumes and portfolio creation
- Professional software development
- Future pre-built digital services/products

## Tech Stack

- React + Vite
- React Router
- Material UI (dark-first theme)
- Framer Motion
- React Helmet Async
- React Hook Form + Yup validation

## Project Structure

src/
	components/
		cards/
		common/
		forms/
		layout/
	pages/
	routes/
	styles/
	utils/

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Update `homepage` in `package.json` with your GitHub username.
2. If your repository name is not `altruism`, update `base` in `vite.config.js`.
3. Deploy using one of the two options below.

### Option A: CLI deployment with gh-pages

```bash
npm run deploy
```

### Option B: GitHub Actions deployment

Push to `main`, then enable GitHub Pages source as `GitHub Actions` in repository settings.

## Notes

- Router uses `BrowserRouter` with basename from `import.meta.env.BASE_URL`.
- Images use Pexels CDN links (no attribution required, attribution line included in footer).
- Theme is dark by default and can be switched to light by changing one variable in `src/styles/theme.js`.
