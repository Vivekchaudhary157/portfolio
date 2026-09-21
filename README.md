# Vivek Kumar — Developer Portfolio

A modern, responsive developer portfolio built with React, Vite and Tailwind CSS.

## Tech stack
- React 18 + Vite
- Tailwind CSS
- lucide-react (icons)

## Project structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ScrollProgress.jsx
│   ├── BackToTop.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── CodingProfiles.jsx
│   ├── Learning.jsx
│   ├── Goals.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   ├── useReveal.js
│   └── useActiveSection.js
├── App.jsx
├── main.jsx
└── index.css
public/
├── favicon.svg
├── robots.txt
└── 404.html
netlify.toml
```

## 1. Install dependencies
```bash
npm install
```

## 2. Run locally
```bash
npm run dev
```
Opens at `http://localhost:5173`.

## 3. Build for production
```bash
npm run build
```
Output goes to the `dist/` folder. Preview it locally with `npm run preview`.

## 4. Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 5. Deploy on Netlify
1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Click **Add new site → Import an existing project**.
3. Connect GitHub and select this repository.
4. Build settings (should auto-detect from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.
6. Once deployed, go to **Site configuration → Forms** to confirm the "contact" form was detected (Netlify scans the build output for the hidden form in `index.html`).

Your site will be live at a `*.netlify.app` URL, which you can later replace with a custom domain.

## 6. Update your social links later
All links live in one place per component. Search for the URL you want to change:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/CodingProfiles.jsx`
- `src/components/Footer.jsx`

Replace the `href` value with your new URL.

## 7. Add real projects later
Open `src/components/Projects.jsx` and edit the `PROJECTS` array. Each project looks like:
```js
{
  title: "Project Name",
  status: "Coming Soon", // change to something like "Live" once ready, or remove the badge
  description: "What it does.",
  tech: ["Tech", "Stack"],
  githubUrl: "https://github.com/you/repo", // or null
  liveUrl: "https://your-live-demo.com",    // or null
}
```
Only fill in `githubUrl` / `liveUrl` once those links actually exist — leave them `null` otherwise, and the card will show "Live demo unavailable yet" instead of a broken link.

## Notes
- The contact form is wired for Netlify Forms (`data-netlify="true"`) with a honeypot field for spam protection, and a hidden static copy in `index.html` so Netlify's build bot can detect the fields.
- Update the `[Your Email]` placeholder in `src/components/Contact.jsx` with your real email once you have one you want to publish.
- Update the canonical URL and Open Graph URLs in `index.html` once your Netlify domain (or custom domain) is live.
