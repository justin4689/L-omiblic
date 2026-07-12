/* Apparition douce des éléments au scroll — L'OMBILIC */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var selectors = [
    '.section-header',
    '.service-card',
    '.prestation-item',
    '.other-service-card',
    '.why-item',
    '.testi-card',
    '.vmv-card',
    '.team-card',
    '.about-text',
    '.about-visual',
    '.service-intro-inner',
    '.real-stat',
    '.real-intro-text',
    '.real-domain-card',
    '.portfolio-card',
    '.real-testi-card',
    '.featured-card',
    '.actu-card',
    '.fiscal-cal-card',
    '.resource-card',
    '.newsletter-inner',
    '.contact-card',
    '.contact-form-wrap',
    '.contact-aside > *',
    '.devis-form-wrap',
    '.devis-aside > *'
  ].join(',');

  var els = Array.prototype.slice.call(document.querySelectorAll(selectors));
  els.forEach(function (el) { el.classList.add('reveal'); });

  /* Cascade : décalage progressif des éléments frères dans une même grille */
  var grids = document.querySelectorAll(
    '.services-grid, .prestations-grid, .other-services-grid, .testi-grid, ' +
    '.vmv-grid, .team-grid, .real-stats-grid, .real-intro-domains, ' +
    '.portfolio-grid, .real-testi-grid, .actu-grid, .fiscal-cal-grid, ' +
    '.resources-grid, .contact-cards-grid'
  );
  grids.forEach(function (grid) {
    Array.prototype.forEach.call(grid.children, function (child, i) {
      if (child.classList.contains('reveal')) {
        child.style.transitionDelay = Math.min(i * 70, 420) + 'ms';
      }
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('reveal-visible');
      io.unobserve(el);
      /* Une fois l'animation finie, on nettoie pour ne pas gêner les
         transitions de hover (transform / delay) définies ailleurs */
      el.addEventListener('transitionend', function handler() {
        el.classList.remove('reveal', 'reveal-visible');
        el.style.transitionDelay = '';
        el.removeEventListener('transitionend', handler);
      });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) { io.observe(el); });
})();
