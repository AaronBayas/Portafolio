# Portafolio — Aaron Alejandro Bayas Caicedo

Portafolio web personal e interactivo que presenta mi formación académica, experiencia profesional, proyectos destacados y habilidades técnicas.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## Descripción General

Este portafolio web ha sido desarrollado como proyecto académico para la asignatura de **Desarrollo Web** (8vo Semestre — Universidad Estatal de Milagro). El proyecto consiste en una Single Page Application (SPA) que incluye las siguientes secciones:

- **Inicio / Presentación:** Introducción y resumen profesional.
- **Sobre Mí:** Perfil profesional y línea de tiempo de educación académica.
- **Habilidades Técnicas:** Tecnologías categorizadas con niveles de dominio.
- **Proyectos Destacados:** Seis proyectos principales con un sistema de filtrado dinámico y modales informativos detallados.
- **Design System:** Documentación visual de los colores, tipografía, espaciado y componentes reutilizables del proyecto.
- **Contacto:** Formulario de contacto funcional con validación en tiempo real.

---

## Tecnologías Utilizadas

| Tecnología | Implementación |
|-----------|-----|
| **HTML5** | Estructura semántica estricta (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`). |
| **CSS3** | Estilizado avanzado mediante CSS Custom Properties (Variables), Flexbox, Grid, Media Queries y Animaciones CSS. |
| **JavaScript** | Lógica central e interactividad: menú responsive, modo oscuro/claro, filtrado dinámico, modales, validación de formularios y efectos de revelado al hacer scroll. |
| **Google Fonts** | Tipografía: Inter (cuerpo de texto) y Outfit (encabezados). |

---

## Características Principales

1. **Navegación Responsive:** Menú tipo hamburguesa con transiciones fluidas, optimizado para dispositivos móviles.
2. **Modo Oscuro / Claro:** Cambio de tema nativo con persistencia de estado mediante `localStorage`.
3. **Filtrado Dinámico de Proyectos:** Filtrado en tiempo real de tarjetas de proyectos por tecnología (ej. React, TypeScript, Python).
4. **Modales de Proyecto:** Sistema centralizado de modales dinámicos que renderiza datos específicos del proyecto al interactuar.
5. **Validación de Formularios:** Validación en tiempo real del lado del cliente con retroalimentación visual inmediata.
6. **Efectos de Revelado (Scroll Reveal):** Implementación de Intersection Observer para animaciones de aparición fluida al desplazar la página.
7. **Seguimiento de Navegación Activa:** Resaltado automático del enlace de la sección actual en la barra de navegación basado en la posición del scroll.

---

## Arquitectura y Sistema de Diseño

El portafolio implementa un sistema de diseño escalable y consistente basado en principios modernos de UI/UX:

- **Colores Primarios:** Azul (`#2563eb`), Violeta (`#7c3aed`) y Cian (`#06b6d4`).
- **CSS Custom Properties:** Tokens centralizados para colores, tipografía, espaciado, radios de borde y sombras.
- **Variables de Tema:** Variables de color intercambiables para transiciones perfectas entre modo oscuro y claro.
- **Componentes Reutilizables:** Botones, tarjetas, insignias, inputs, líneas de tiempo y filtros estandarizados.

La documentación visual completa está disponible en la página del [Design System](design-system.html).

---

## Estructura del Proyecto

```text
Portafolio/
├── index.html              # Single Page Application principal
├── design-system.html      # Documentación del Design System / Componentes
├── css/
│   └── styles.css          # Estilos globales y tokens del Design System
├── js/
│   └── main.js             # Lógica central de JavaScript
├── media/                  # Recursos (Imágenes y Logos)
│   ├── Foto personal.jpg   
│   ├── iconopag.png         
│   ├── robot2.png           
│   ├── logo.png             
│   ├── giospro.png          
│   ├── medilife.png         
│   └── bike.png             
└── README.md
```

---

## Configuración e Instalación

### Ejecución Local
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/AaronBayas/Portafolio.git
   ```
2. Abrir el archivo `index.html` en su navegador web de preferencia.

### GitHub Pages
El proyecto está configurado para ser desplegado y alojado a través de GitHub Pages.

---

## Autor

**Aaron Alejandro Bayas Caicedo**
- Correo electrónico: aaronbayas19@gmail.com
- GitHub: [AaronBayas](https://github.com/AaronBayas)
- Institución Académica: Universidad Estatal de Milagro — Ingeniería en Software (8vo Semestre)

---

## Licencia

Este proyecto fue desarrollado con fines académicos. © 2024 Aaron Alejandro Bayas Caicedo.
