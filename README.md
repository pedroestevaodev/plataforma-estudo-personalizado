<img src="https://i.ibb.co/kyyN1nB/gemini-logo.png" width="300" alt="gemini-logo" border="0" />

# Personalized Study Platform with Gemini API

This project was born out of the need to help those who struggle with organizing information while studying. Recognizing that effectively structuring study content can be a challenge for many, I developed this personalized study platform that leverages the Gemini API. The platform generates structured study modules designed to enhance study efficiency and increase user focus. By transforming the way users engage with study materials, the goal is to make learning more accessible, manageable, and productive.

## Start

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdzYzZpaGUxb3MwdHg2cHQwaXJvZ28yN2xzbHkwdDc0N2xrZDBmMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LuOaXpJfthT7wfIugM/giphy.gif" border="0" />

1. The user starts by entering their name.
   
<a href="https://ibb.co/QffzVfY"><img src="https://i.ibb.co/wRR3qRp/i-1.png" alt="i-1" border="0"></a>

2. Then, the user can choose the personality of the **"teacher"**. This feature allows users to tailor the learning experience to their preferred study style by selecting a **"teacher"** that best matches their learning needs and preferences.
   
<a href="https://ibb.co/D7wMr5F"><img src="https://i.ibb.co/fCrND4W/i-2.png" alt="i-2" border="0"></a>

3. Finally, the user specifies the topic they want to study. This directs the platform’s focus to the user’s chosen subject, enabling a more targeted and effective learning experience.
   
<a href="https://ibb.co/gzjPp6N"><img src="https://i.ibb.co/wM0wXYV/i-3.png" alt="i-3" border="0"></a>

4. The platform then generates study modules related to the chosen topic, helping the user concentrate and engage more effectively with the subject.

<a href="https://ibb.co/BV2VhqG"><img src="https://i.ibb.co/TBMBQm1/intro.png" alt="intro" border="0"></a>

## Theme Style

The platform offers users the flexibility to switch between light and dark themes. This functionality enhances the user experience by allowing them to choose the theme that is most comfortable for their eyes. Additionally, the dark theme can help reduce eye strain in low-light environments.

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHA4MWl6cHFtMnB1enYyNnRoczR2M3VwcHJxajZmcXpqZ2VqN3JucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lyELig6S5T5om6HbgU/giphy.gif" border="0" />

<a href="https://ibb.co/NrJ6VBn" style="width: 50%;"><img src="https://i.ibb.co/0K6jDbV/t-1.png" alt="t-1" border="0"></a>
   
<a href="https://ibb.co/gtfCsVL" style="width: 50%;"><img src="https://i.ibb.co/nQYShCN/t-2.png" alt="t-2" border="0"></a>

## Navigation

The platform features an efficient pagination system that allows users to easily navigate between different study modules. This ensures a smooth transition from one module to another, helping users maintain focus without being distracted by navigation. Pagination also helps organize study content in a structured and easy-to-follow manner.

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzd3dzB1NzdmeWg5YzU5c2tyNHJoa3d5M21sNmZreWV6djNoamZ3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EGPJUteiwgyrzrHagn/giphy.gif" border="0" />

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamFyYnRtcG9vNWJjbGY5MG9pdGFqbTJ6Y3B6ZHF3enlpMzBoemd4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X4JcCAMEDLTuiwh1Xz/giphy.gif" border="0" />

## Responsiveness

The platform was designed with a responsive design approach, ensuring users have a consistent learning experience across various devices. Regardless of screen size - whether on a desktop, laptop, tablet, or smartphone - the user interface dynamically adjusts to provide the best possible view and interaction. This not only improves accessibility but also allows users to study comfortably in any environment, at any time.

<a href="https://ibb.co/bsrqZ7H"><img src="https://i.ibb.co/D97syLG/res-1.png" alt="res-1" border="0"></a>

<a href="https://ibb.co/qCz8txq"><img src="https://i.ibb.co/1M3NDby/res-2.png" alt="res-2" border="0"></a>

## Tech Stack

The project was built using the following technologies and tools:

- [Next.js (App Router)](https://nextjs.org/) - React framework for web applications.
- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript superset for static typing.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for fast and customizable design
- [Motion](https://motion.dev/) - A robust animation library for modern web projects using JavaScript, React, or Vue.

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/pedroestevaodev/plataforma-estudo-personalizado.git
cd plataforma-estudo-personalizado
```

### 2. Install dependencies

```bash
$ npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root and configure the following variables:

```bash
NEXT_PUBLIC_GEMINI_MODEL="tobemodified"
NEXT_PUBLIC_GEMINI_API_KEY_="tobemodified"
NEXT_PUBLIC_GEMINI_API_KEY="tobemodified"
```

### 4. Start the development server

```bash
$ npm run dev
```

Open your browser and visit `http://localhost:3000` to see the project in action.

You can start editing the homepage by modifying the `app/page.tsx` file. The browser will automatically update as you make changes to the code.

## Deploy

The easiest way to deploy your Next.js application is by using the [Vercel Platform](https://vercel.com/new), created by the developers of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions to this project are welcome! Please read the contribution guidelines before submitting a pull request.

## License

This project is licensed under the [MIT License](https://mit-license.org/).  
<br />

---

<br />

**Built with ☕ by [Pedro Estevão](https://www.pedroestevao.com)**





