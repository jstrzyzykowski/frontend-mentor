document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll([
    '.section-divider',
    '.feature-item',
    '.features-content__header',
    '.footer-content'
  ].join(','));

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    observer.observe(element);
  });
}); 