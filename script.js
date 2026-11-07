document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'block';
      mobileMenu.style.display = isOpen ? 'none' : 'block';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  const faqItems = document.querySelectorAll('.faq-list details');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });
});

