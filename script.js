/**
 * CV One-Page — Smooth scroll, scroll animations, dark mode, form
 */

(function () {
  'use strict';

  const NAV = document.getElementById('navbar');
  const NAV_TOGGLE = document.getElementById('nav-toggle');
  const NAV_LINKS = document.querySelectorAll('#navbar-nav a[href^="#"]');
  const THEME_TOGGLE = document.getElementById('theme-toggle');
  const CONTACT_FORM = document.getElementById('contact-form');
  const FORM_STATUS = document.getElementById('form-status');
  const ANIMATE_ELS = document.querySelectorAll('[data-animate]');
  const YEAR_SPAN = document.getElementById('year');

  const STORAGE_THEME = 'cv-theme';
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ——— Badge avatar (navbar + hero): stessa foto, fallback se manca ———
  (function initBadges() {
    document.querySelectorAll('.navbar__badge, .hero__badge').forEach(function (badge) {
      const img = badge.querySelector('img');
      if (!img) return;
      img.onload = function () { badge.classList.add('has-img'); };
      img.onerror = function () { badge.classList.add('img-error'); };
      if (img.complete && img.naturalWidth) badge.classList.add('has-img');
      else if (img.complete) badge.classList.add('img-error');
    });
  })();

  // ——— Year in footer ———
  if (YEAR_SPAN) YEAR_SPAN.textContent = new Date().getFullYear();

  // ——— Navbar scroll + link attivo ———
  function updateNavbar() {
    if (!NAV) return;
    const hero = document.getElementById('hero');
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    if (heroBottom < 100) {
      NAV.classList.add('is-scrolled');
    } else {
      NAV.classList.remove('is-scrolled');
    }
    // Evidenzia link della sezione in vista
    const headerH = NAV.offsetHeight;
    const threshold = headerH + 120;
    let activeId = '';
    NAV_LINKS.forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const id = href.slice(1);
      const section = document.getElementById(id);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= threshold && rect.bottom > headerH) {
        activeId = id;
      }
    });
    if (!activeId && hero && hero.getBoundingClientRect().bottom > headerH) {
      activeId = 'hero';
    }
    NAV_LINKS.forEach(function (link) {
      const href = link.getAttribute('href');
      const id = href ? href.slice(1) : '';
      if (id === activeId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }
  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateNavbar);
  }, { passive: true });
  updateNavbar();

  // ——— Mobile menu ———
  (function initMobileMenu() {
    var nav = document.getElementById('navbar-nav');
    var overlay = document.getElementById('navbar-overlay');
    if (!NAV_TOGGLE || !nav) return;

    function closeMenu() {
      nav.classList.remove('is-open');
      NAV_TOGGLE.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      document.body.classList.remove('nav-open');
      if (overlay) {
        overlay.setAttribute('aria-hidden', 'true');
        overlay.removeAttribute('tabindex');
      }
      NAV_TOGGLE.focus();
    }

    function openMenu() {
      nav.classList.add('is-open');
      NAV_TOGGLE.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('nav-open');
      if (overlay) {
        overlay.setAttribute('aria-hidden', 'false');
        overlay.setAttribute('tabindex', '0');
      }
    }

    NAV_TOGGLE.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
      overlay.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeMenu(); }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open') && window.innerWidth < 900) {
        closeMenu();
      }
    });

    NAV_LINKS.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 900) closeMenu();
      });
    });
  })();

  // ——— Popup Presentazione (bottone fisso + apertura dopo 5 s) ———
  (function initPresentationModal() {
    var modal = document.getElementById('presentation-modal');
    var overlay = document.getElementById('presentation-overlay');
    var closeBtn = document.getElementById('presentation-close');
    var fab = document.getElementById('presentation-fab');

    function openModal() {
      if (!modal) return;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      var nav = document.getElementById('navbar-nav');
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        if (NAV_TOGGLE) NAV_TOGGLE.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
        document.body.style.overflow = '';
      }
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (fab && document.activeElement === closeBtn) fab.focus();
    }

    if (fab) fab.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeModal();
    });

    // Apertura automatica dopo 5 secondi (una sola volta per visita)
    setTimeout(function () {
      if (modal && !modal.classList.contains('is-open')) openModal();
    }, 10000);
  })();

  // ——— Smooth scroll ———
  NAV_LINKS.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === '#') return;
    link.addEventListener('click', function (e) {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const headerHeight = NAV ? NAV.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ——— Scroll animations ———
  function revealOnScroll() {
    if (REDUCED_MOTION) {
      ANIMATE_ELS.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    const winH = window.innerHeight;
    const margin = winH * 0.15;
    ANIMATE_ELS.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < winH - margin) {
        el.classList.add('is-visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('load', revealOnScroll);
  revealOnScroll();

  // ——— Dark mode ———
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_THEME);
    } catch (e) {
      return null;
    }
  }
  function setTheme(value) {
    if (value === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(STORAGE_THEME, value || 'light');
    } catch (e) {}
  }
  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      setTheme('dark');
    } else {
      setTheme(stored || 'light');
    }
  }
  initTheme();
  if (THEME_TOGGLE) {
    THEME_TOGGLE.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // ——— Contact form ———
  if (CONTACT_FORM && FORM_STATUS) {
    CONTACT_FORM.addEventListener('submit', function (e) {
      e.preventDefault();
      FORM_STATUS.textContent = '';
      FORM_STATUS.classList.remove('success', 'error');

      const name = (document.getElementById('name') || {}).value || '';
      const email = (document.getElementById('email') || {}).value || '';
      const message = (document.getElementById('message') || {}).value || '';

      if (!name.trim()) {
        FORM_STATUS.textContent = 'Inserisci il tuo nome.';
        FORM_STATUS.classList.add('error');
        return;
      }
      if (!email.trim()) {
        FORM_STATUS.textContent = 'Inserisci la tua email.';
        FORM_STATUS.classList.add('error');
        return;
      }
      if (!message.trim()) {
        FORM_STATUS.textContent = 'Scrivi un messaggio.';
        FORM_STATUS.classList.add('error');
        return;
      }

      // Qui puoi integrare Formspree, Netlify Forms o un backend
      // Esempio Formspree: action="https://formspree.io/f/xxx" method="POST"
      FORM_STATUS.textContent = 'Messaggio inviato! Ti risponderò al più presto.';
      FORM_STATUS.classList.add('success');
      CONTACT_FORM.reset();
    });
  }
})();
