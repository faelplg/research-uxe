/**
 * Main JavaScript file for the site
 * This provides interactive functionality for the modern HTML skeleton
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  setupMobileMenu();

  // Theme toggle
  setupThemeToggle();

  // Smooth scrolling for anchor links
  setupSmoothScrolling();

  // Form validation example
  setupFormValidation();
});

/**
 * Sets up the mobile menu functionality
 */
function setupMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Toggle hamburger animation
    const hamburger = menuToggle.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.toggle('active');
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', event => {
    if (
      !event.target.closest('.main-nav') &&
      navLinks.classList.contains('show')
    ) {
      navLinks.classList.remove('show');
    }
  });
}

/**
 * Sets up the theme toggle functionality
 */
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) return;

  // Check if user has a preference stored
  const currentTheme = localStorage.getItem('theme') || 'auto';

  // Apply theme on page load
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Mudar para Tema Claro';
  } else if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = 'Mudar para Tema Escuro';
  } else {
    themeToggle.textContent = 'Usar Tema Personalizado';
  }

  // Theme toggle button
  themeToggle.addEventListener('click', () => {
    let theme = 'light';

    if (!document.documentElement.hasAttribute('data-theme')) {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = 'Mudar para Tema Claro';
      theme = 'dark';
    } else if (document.documentElement.getAttribute('data-theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.textContent = 'Mudar para Tema Escuro';
      theme = 'light';
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggle.textContent = 'Usar Tema Personalizado';
      theme = 'auto';
    }

    localStorage.setItem('theme', theme);
  });
}

/**
 * Sets up smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth',
      });
    });
  });
}

/**
 * Sets up basic form validation as an example
 */
function setupFormValidation() {
  const form = document.querySelector('.form-example');

  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const consentInput = document.getElementById('consent');

    // Simple validation
    if (nameInput && nameInput.value.trim() === '') {
      showError(nameInput, 'Por favor, digite seu nome');
      isValid = false;
    } else if (nameInput) {
      removeError(nameInput);
    }

    if (emailInput && emailInput.value.trim() === '') {
      showError(emailInput, 'Por favor, digite seu email');
      isValid = false;
    } else if (emailInput && !isValidEmail(emailInput.value)) {
      showError(emailInput, 'Por favor, digite um email válido');
      isValid = false;
    } else if (emailInput) {
      removeError(emailInput);
    }

    if (messageInput && messageInput.value.trim() === '') {
      showError(messageInput, 'Por favor, digite sua mensagem');
      isValid = false;
    } else if (messageInput) {
      removeError(messageInput);
    }

    if (consentInput && !consentInput.checked) {
      showError(consentInput, 'Você precisa concordar com os termos');
      isValid = false;
    } else if (consentInput) {
      removeError(consentInput);
    }

    if (isValid) {
      // Success message
      const successMessage = document.createElement('div');
      successMessage.classList.add('success-message');
      successMessage.textContent = 'Formulário enviado com sucesso!';

      form.innerHTML = '';
      form.appendChild(successMessage);

      // In a real application, you'd submit the form to a server here
    }
  });
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Shows error message for an input
 * @param {HTMLElement} input - The input element with error
 * @param {string} message - Error message to display
 */
function showError(input, message) {
  const formGroup = input.closest('.form-group');

  if (formGroup) {
    let errorElement = formGroup.querySelector('.error-message');

    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.classList.add('error-message');
      formGroup.appendChild(errorElement);
    }

    errorElement.textContent = message;
    formGroup.classList.add('has-error');
    input.classList.add('is-invalid');
  }
}

/**
 * Removes error message from an input
 * @param {HTMLElement} input - The input element to remove error from
 */
function removeError(input) {
  const formGroup = input.closest('.form-group');

  if (formGroup) {
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
      errorElement.remove();
    }

    formGroup.classList.remove('has-error');
    input.classList.remove('is-invalid');
  }
}

/**
 * Detects if user is on a mobile device
 * @returns {boolean} - True if on mobile device
 */
function isMobileDevice() {
  return (
    window.innerWidth <= 768 ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  );
}

/**
 * Initialize performance monitoring
 * This is a basic example of how you might set up performance monitoring
 */
function initPerformanceMonitoring() {
  // Detect when the page has fully loaded
  window.addEventListener('load', () => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      // Get navigation timing
      const pageNav = performance.getEntriesByType('navigation')[0];
      if (pageNav) {
        console.log(
          'Page load time:',
          pageNav.loadEventEnd - pageNav.startTime,
          'ms'
        );

        // Report to analytics in a real application
        // sendAnalyticsEvent('page_load_time', pageNav.loadEventEnd - pageNav.startTime);
      }

      // Get largest contentful paint
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('Largest Contentful Paint:', lastEntry.startTime, 'ms');
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }
  });
}

// Initialize performance monitoring if in production
// if (process.env.NODE_ENV === 'production') {
//     initPerformanceMonitoring();
// }
