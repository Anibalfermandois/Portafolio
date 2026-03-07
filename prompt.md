I am building a personal portfolio website for me a software engineer. It is a way for people to find me and understand what im about. I expect it to be nice for devs and for the HR head hunters. It's supposed to look semi-profesional with a twist, not nerdy. The twist will be revealed later.
The parts of the website are:
- Hero, with a big image of me
- work experience, ive worked in two places. this is the most important part of the website. 
- Personal Projects, a grid or carousel of images and descriptions of side projects.
- Contact: my email, a button to open the email app and a link to my portfolio
- technologies: a very small section with the technologies i use/know. Its mainly there for the HR head hunters, it should be small and not very prominent, perhaps with some cool animations.

- The specs:
1. Astro, static site
2. Tailwind
3. TypeScript 
4. Use astro <Image/> component for maximum performance

I want you to create FIVE different designs. Each design should be creative and unique from all the others that you create. They should be hosted on /1 /2 /3 /4 and /5 respectively.

The twists for the diferent versions:
1. No twist, plain website 
2. The twist is that it's going to be a bit meta. It's going to be about the process of building the website itself. We mention the static caching, with small popovers in different parts showing the optimizations made: for example: webp image, cache headers, etc etc
3. the twist is 
4. the twist is 
5. the twist is 


---

## Portfolio Seed Data

Este documento consolida y comprime toda la información base del portafolio (experiencia laboral, proyectos, datos personales y tecnologías).

## 1. Perfil Personal
- **Nombre:** Aníbal Fermandois
- **Titular:** AI Infrastructure/Automation & Full Stack Developer
- **Resumen:** Ingeniero Civil de la Pontificia Universidad Católica, mi objetivo es ser el Tech Lead y Software Architect. Quiero discutir sobre problemas, soluciones, pros y contras de todo el software de la empresa. Apasionado por resolver problemas complejos a través de la tecnología, mi objetivo es diseñar y construir soluciones digitales eficientes, robustas y escalables.
- **Contacto:** anibal.fermandois@uc.cl

## 2. Experiencia Laboral

### Nikola Chile
**Rol:** Full-Stack Developer
**Período:** Mar 2025 - Aug 2025 (Part-time)
**Descripción:** Orchestrated full-cycle development from architecture to CI/CD deployments.
**Impacto Clave:**
- **Full-Cycle Ownership:** Engineered and launched the high-performance Next.js and Django infrastructure for nikola.cl, dominating end-to-end decisions.
- **Technical Leadership:** Lead engineer of current webpage www.nikola.cl. (This should be huge since its actual production code running). Directed the migration of legacy systems to modern, scalable architectures. Automations
- **Quality Assurance:** Spearheaded the implementation of automated code quality pipelines and infrastructure visualization tooling.

### Buda.com
**Rol:** AI & Automation Engineer / Software Automation Intern
**Período:** Aug 2025 - Dec 2025
**Descripción:** Engineered production-ready AI chatbots and N8N workflow infrastructures.
**Impacto Clave:**
- **Advanced RAG Systems:** Led the investigation and production deployment of an enterprise AI Chatbot connecting complex APIs, using Anthropic's Contextual Chunking, HyDE, and Context Engineering. Achieved over 95% Hit Rate.
- **Vector Optimization:** Engineered high-accuracy information retrieval using Contextual Embedding and MultiVector Indexing.
- **Workflow Architecture:** Architected robust automation pipelines using N8N for mission-critical processes.

## 3. Proyectos Destacados

### Anikio
- **Descripción:** El Async Event Loop para async functions sin 'async def'
- **Tecnologías:** Python
- **Links:** [GitHub Repo](https://github.com/path/Anikio)

### BCI++
- **Descripción:** Filtros, reactivo, rapido... una mejor que BCI
- **Tecnologías:** Astro, TypeScript
- **Links:** [Live Link](https://bcibeneficios.onrender.com/) | [Competencia (Base)](https://www.bci.cl/beneficios/beneficios-bci)

### Excluido
- **Descripción:** Juego de cartas mobil, multiplayer usando protocolo MQTT
- **Tecnologías:** Django, Kotlin

### RecordaBot
- **Descripción:** Para cuando no te han pagado...
- **Tecnologías:** Next.js, Tailwind, TypeScript
- **Links:** [Live Link](https://recordabot.vercel.app/)

## 4. Tecnologías en Producción (this should be smallish)
- **Lenguajes:** TypeScript, JavaScript, Python, C lang, Ruby, Rust, Kotlin
- **Frameworks / Librerías:** React, Astro, Next.js, Django, Tailwind CSS, QT, JQuery
- **Infraestructura / BD:** Node.js, AWS, Docker, Git, PostgreSQL


---
## Frontend Skill 
---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.