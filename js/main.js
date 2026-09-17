/* ===================================================================
   PORTAFOLIO - Aaron Alejandro Bayas Caicedo
   JavaScript — Interactividad
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ===========================
     1. MENÚ RESPONSIVE (Hamburger)
     =========================== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ===========================
     2. DARK / LIGHT MODE CON LOCALSTORAGE
     =========================== */
  const themeToggle = document.getElementById('theme-toggle');
  const THEME_KEY = 'portfolio-theme';

  function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  // Cargar tema guardado
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  /* ===========================
     3. NAVBAR SCROLL EFFECT
     =========================== */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ===========================
     4. FILTRO DE PROYECTOS
     =========================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Actualizar botón activo
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const techs = card.getAttribute('data-techs') || '';
        const techList = techs.split(',').map(t => t.trim().toLowerCase());

        if (filter === 'all' || techList.includes(filter.toLowerCase())) {
          card.classList.remove('hidden');
          card.style.animation = 'fade-in-up 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
          card.style.animation = '';
        }
      });
    });
  });

  /* ===========================
     5. MODAL DE PROYECTO
     =========================== */
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalProblem = document.getElementById('modal-problem');
  const modalTechs = document.getElementById('modal-techs');
  const modalLinks = document.getElementById('modal-links');

  function openModal(card) {
    if (!modalOverlay) return;

    const title = card.getAttribute('data-title') || '';
    const description = card.getAttribute('data-description') || '';
    const problem = card.getAttribute('data-problem') || '';
    const technologies = card.getAttribute('data-technologies') || '';
    const image = card.getAttribute('data-image') || '';
    const repo = card.getAttribute('data-repo') || '';
    const demo = card.getAttribute('data-demo') || '';

    // Rellenar el modal
    modalImage.src = image;
    modalImage.alt = `Imagen del proyecto ${title}`;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalProblem.textContent = problem;

    // Tecnologías como badges
    modalTechs.innerHTML = '';
    technologies.split(',').forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = tech.trim();
      modalTechs.appendChild(tag);
    });

    // Enlaces
    modalLinks.innerHTML = '';
    if (repo) {
      const repoLink = document.createElement('a');
      repoLink.href = repo;
      repoLink.target = '_blank';
      repoLink.rel = 'noopener noreferrer';
      repoLink.className = 'btn btn--secondary btn--sm';
      repoLink.innerHTML = '<i class="fa-solid fa-folder-open" aria-hidden="true"></i> Repositorio';
      modalLinks.appendChild(repoLink);
    }
    if (demo) {
      const demoLink = document.createElement('a');
      demoLink.href = demo;
      demoLink.target = '_blank';
      demoLink.rel = 'noopener noreferrer';
      demoLink.className = 'btn btn--primary btn--sm';
      demoLink.innerHTML = '<i class="fa-solid fa-globe" aria-hidden="true"></i> Ver Demo';
      modalLinks.appendChild(demoLink);
    }

    // Mostrar modal
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus trap
    modalClose.focus();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Click en project card para abrir modal
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // No abrir modal si se clickea un enlace directo
      if (e.target.closest('a')) return;
      openModal(card);
    });

    // Teclado: Enter para abrir
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.target.closest('a')) {
        openModal(card);
      }
    });
  });

  // Cerrar modal
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  /* ===========================
     6. VALIDACIÓN DEL FORMULARIO
     =========================== */
  const contactForm = document.getElementById('contact-form');
  const formFields = {
    name: {
      input: document.getElementById('form-name'),
      error: document.getElementById('error-name'),
      validate: (value) => value.trim().length >= 3
    },
    email: {
      input: document.getElementById('form-email'),
      error: document.getElementById('error-email'),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    },
    message: {
      input: document.getElementById('form-message'),
      error: document.getElementById('error-message'),
      validate: (value) => value.trim().length >= 10
    }
  };

  function validateField(fieldName) {
    const field = formFields[fieldName];
    if (!field || !field.input) return true;

    const isValid = field.validate(field.input.value);

    if (isValid) {
      field.input.classList.remove('error');
      field.input.classList.add('success');
      if (field.error) field.error.classList.remove('visible');
    } else {
      field.input.classList.remove('success');
      field.input.classList.add('error');
      if (field.error) field.error.classList.add('visible');
    }

    return isValid;
  }

  // Validación en tiempo real (blur)
  Object.keys(formFields).forEach(fieldName => {
    const field = formFields[fieldName];
    if (field.input) {
      field.input.addEventListener('blur', () => validateField(fieldName));
      field.input.addEventListener('input', () => {
        if (field.input.classList.contains('error')) {
          validateField(fieldName);
        }
      });
    }
  });

  // Submit del formulario
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isFormValid = true;
      Object.keys(formFields).forEach(fieldName => {
        if (!validateField(fieldName)) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Simular envío exitoso
        const successMessage = document.getElementById('form-success');
        if (successMessage) {
          successMessage.classList.add('visible');
        }

        // Reset formulario después de 3 segundos
        setTimeout(() => {
          contactForm.reset();
          Object.keys(formFields).forEach(fieldName => {
            const field = formFields[fieldName];
            if (field.input) {
              field.input.classList.remove('success', 'error');
            }
          });
          if (successMessage) {
            successMessage.classList.remove('visible');
          }
        }, 4000);
      }
    });
  }

  /* ===========================
     7. SCROLL TO TOP
     =========================== */
  const scrollTopBtn = document.getElementById('scroll-top');

  function handleScrollTop() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScrollTop, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===========================
     8. SCROLL REVEAL (Intersection Observer)
     =========================== */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: mostrar todo
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ===========================
     BONUS: NAVEGACIÓN ACTIVA (Highlight)
     =========================== */
  const sections = document.querySelectorAll('section[id]');
  const navMenuLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function highlightActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navMenuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNav, { passive: true });
  highlightActiveNav();
});
