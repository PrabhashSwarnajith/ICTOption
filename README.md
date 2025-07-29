# ICT Option Web

A modern web application built with React, Vite, and Tailwind CSS.

## Project Structure

```
├── public/
│   ├── logo.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── csr/
│   │   ├── img/
│   │   ├── partners/
│   │   ├── projects/
│   │   └── team/
│   ├── components/
│   │   ├── CSRProjectCarousel.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── index.js
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   ├── Blog.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── index.js
│   │   └── services/
│   │       ├── AIMachineLearning.jsx
│   │       ├── Cybersecurity.jsx
│   │       ├── DigitalMarketing.jsx
│   │       ├── ITConsulting.jsx
│   │       ├── MobileAppDevelopment.jsx
│   │       ├── WebDevelopment.jsx
│   │       └── index.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── COLOR-GUIDE.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Features

- ⚡️ Fast development with Vite
- ⚛️ Built with React
- 🎨 Styled using Tailwind CSS
- 📁 Modular folder structure for scalability
- 🖼️ Organized assets for images, logos, and partners
- 📝 Linting and formatting with ESLint

## Getting Started

1.  **Install dependencies:**
    ```sh
    npm install
    ```
2.  **Start the development server:**
    ```sh
    npm run dev
    ```
3.  **Build for production:**
    ```sh
    npm run build
    ```
4.  **Preview production build:**
    ```sh
    npm run preview
    ```

## Customization

- Add new pages in `src/pages/` or `src/pages/services/`.
- Add new components in `src/components/`.
- Place images and static assets in `src/assets/`.
- Update Tailwind configuration in `tailwind.config.js`.

## License

This project is licensed under the MIT License.
