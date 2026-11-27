# Faizan Ahmad Ansari | Portfolio

A personal portfolio with an interactive 3D hero, animated sections and a working contact form.
Built with React, Vite and Three.js.

**Live site:** https://faizanahmadansaridev.vercel.app

---

## About me

I'm a CSE (Data Science) student at Jamia Millia Islamia (JMI '28), based in New Delhi, India.
I build full-stack web apps and interactive 3D experiences, solve DSA problems, and I'm exploring AI/ML.

- GitHub: [Faizan0916](https://github.com/Faizan0916)
- LinkedIn: [faizan-ahmad-ansari](https://www.linkedin.com/in/faizan-ahmad-ansari-6a089330a/)
- Email: faizan2225747523@gmail.com

---

## Features

- **3D hero:** an interactive room built with Three.js and React Three Fiber, with floating objects.
- **About:** profile, tech stack, an interactive globe, college details and a copy-email button.
- **Projects:** a 3D monitor that plays a video of each project, with previous/next navigation.
- **Skills:** 24 skills as keycaps, grouped by category with a filter, plus proficiency rings.
- **Certificates:** filter by category, with pagination.
- **Journey:** an animated timeline curve (a separate layout for mobile).
- **Contact:** a validated form that sends email through EmailJS, with a spam honeypot and a success screen.
- **3D background:** a toggleable rolling dot-wave background.
- **Responsive**, with smooth scrolling between sections.
- **Error handling:** an error boundary around the 3D scenes, so a failed asset never blanks the page.

---

## Tech stack

| Area | Tools |
|---|---|
| Framework | React 19, Vite |
| 3D | Three.js, @react-three/fiber, @react-three/drei, react-globe.gl |
| Styling | Tailwind CSS, custom CSS |
| Animation | Framer Motion, GSAP |
| Email | EmailJS |
| Icons | lucide-react |
| Hosting | Vercel |

---

## Project structure

```
threejs_portfolio/
├── public/              # static files: 3D models, textures, images, certificates
├── src/
│   ├── components/      # Navbar, Button, 3D models, loaders, error boundary, background effect
│   ├── sections/        # Hero, About, Project, Skills, Certificates, Journey, Contact, Footer
│   ├── constants/       # nav links and project data
│   ├── data/            # journey timeline data
│   ├── hooks/           # custom hooks (e.g. useIsMobile)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/Faizan0916/Faizan_portfolio.git
cd Faizan_portfolio
npm install
```

### 2. Add environment variables

Create a `.env.local` file in the project root (next to `package.json`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these from your [EmailJS](https://www.emailjs.com/) dashboard.
The EmailJS template should use these variables: `from_name`, `from_email`, `reply_to` and `message`.

### 3. Run locally

```bash
npm run dev
```

Open http://localhost:5173.

### 4. Build for production

```bash
npm run build
npm run preview
```

---

## Deployment

The site is deployed on **Vercel**, and every push to `main` redeploys automatically.

1. Import the repository in Vercel (framework: Vite, output directory: `dist`).
2. Add the three `VITE_EMAILJS_*` variables under **Settings → Environment Variables**.
3. Redeploy so the variables apply.

---

## Customizing

- **Projects:** edit `src/constants/index.js` (title, description, tags, video and logo).
- **Journey timeline:** edit `src/data/journey.js` (keep 5 items so the curve lines up).
- **Skills:** edit the `CATEGORIES` list at the top of `src/sections/Skills.jsx`.
- **Contact details:** edit the `PROFILE` block in `Contact.jsx` and `Footer.jsx`.

---

## Credits

Based on a Three.js portfolio template, then redesigned and extended with new sections,
a custom contact flow and my own projects.

---

Built by **Faizan Ahmad Ansari**.
