# 🚀 Portafolio Web — Aaron Alejandro Bayas Caicedo

Portafolio web personal e interactivo que presenta mi información académica, profesional, proyectos destacados y habilidades técnicas.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Descripción

Este portafolio web ha sido desarrollado como proyecto académico para la materia de **Desarrollo Web** (8vo Semestre — Universidad Estatal de Milagro). Incluye:

- **Inicio / Presentación** — Sección hero con presentación personal
- **Sobre Mí** — Descripción profesional y timeline de educación
- **Habilidades / Skills** — Tecnologías organizadas por categoría con niveles de dominio
- **Proyectos Destacados** — 6 proyectos con filtro por tecnología y modales informativos
- **Design System** — Documentación visual de colores, tipografía, espaciado y componentes
- **Contacto** — Formulario con validación en tiempo real

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura semántica (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`) |
| **CSS3** | Estilos con CSS Custom Properties, Flexbox, Grid, Media Queries, animaciones |
| **JavaScript** | Interactividad: menú responsive, dark/light mode, filtros, modales, validación, scroll reveal |
| **Google Fonts** | Tipografías: Inter (cuerpo) y Outfit (headings) |

---

## ✨ Funcionalidades Interactivas

1. **Menú Responsive** — Hamburger menu con animación para dispositivos móviles
2. **Dark / Light Mode** — Toggle de tema con persistencia en `localStorage`
3. **Filtro de Proyectos** — Filtrar cards por tecnología (React, TypeScript, Python, etc.)
4. **Modal de Proyecto** — Click en una card abre un modal con información completa
5. **Validación del Formulario** — Validación en tiempo real con feedback visual
6. **Scroll to Top** — Botón flotante que aparece al hacer scroll
7. **Scroll Reveal** — Animaciones al hacer scroll usando Intersection Observer
8. **Navegación Activa** — Highlight automático del enlace activo según la sección visible

---

## 📁 Estructura del Proyecto

```
Portafolio/
├── index.html              → Página principal (SPA con secciones)
├── design-system.html      → Página Design System / Componentes
├── css/
│   └── styles.css          → Estilos globales + Design System tokens
├── js/
│   └── main.js             → JavaScript (interactividad)
├── media/
│   ├── Foto personal.jpg   → Fotografía profesional
│   ├── iconopag.png         → Imagen: Batalla Trivial
│   ├── robot2.png           → Imagen: Cuentia
│   ├── logo.png             → Imagen: AgroMercado
│   ├── giospro.png          → Imagen: GUIOSPRO
│   ├── medilife.png         → Imagen: ServiNurse
│   └── bike.png             → Imagen: UNEMI Bike
└── README.md
```

---

## 🎨 Design System

El portafolio utiliza un sistema de diseño consistente basado en:

- **3 Colores Primarios**: Azul (`#2563eb`), Violeta (`#7c3aed`), Cyan (`#06b6d4`)
- **CSS Custom Properties** para colores, tipografía, espaciados, radios, sombras
- **Tema Dark/Light** con variables intercambiables
- **Componentes reutilizables**: Botones, Cards, Badges, Inputs, Timeline, Filtros

Ver la página completa en: [Design System](design-system.html)

---

## 📱 Responsive Design

El sitio se adapta correctamente a:

- 💻 **Desktop** (> 1024px)
- 📱 **Tablet** (768px – 1024px)
- 📱 **Móvil** (< 768px)

Utilizando Flexbox, CSS Grid, Media Queries y unidades relativas.

---

## 🚀 Visualización

### Opción 1: Abrir localmente
1. Clona el repositorio:
   ```bash
   git clone https://github.com/AaronBayas/Portafolio.git
   ```
2. Abre `index.html` en tu navegador.

### Opción 2: GitHub Pages
Visita la URL publicada en GitHub Pages.

---

## 👤 Autor

**Aaron Alejandro Bayas Caicedo**
- 📧 Email: aaronbayas19@gmail.com
- 🐙 GitHub: [AaronBayas](https://github.com/AaronBayas)
- 🎓 Universidad Estatal de Milagro — Ingeniería en Software (8vo Semestre)

---

## 📄 Licencia

Este proyecto fue creado con fines académicos. © 2024 Aaron Alejandro Bayas Caicedo.
