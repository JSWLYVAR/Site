document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('nav.primary');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burger.textContent = isOpen ? '✕' : '☰';
    });
  }

  // Sous-menus : au clic/tap sur mobile, au survol sur desktop (géré en CSS)
  document.querySelectorAll('.has-dropdown > .nav-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var parent = toggle.parentElement;
      var isMobile = window.matchMedia('(max-width: 960px)').matches;
      if (!isMobile) return;
      var wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
        if (el !== parent) el.classList.remove('open');
      });
      parent.classList.toggle('open', !wasOpen);
      toggle.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');
    });
  });

  // Ferme le menu mobile quand on clique un lien direct
  document.querySelectorAll('nav.primary > ul > li > a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.textContent = '☰';
      }
    });
  });
});
