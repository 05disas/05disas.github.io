// Small navigation toggle for mobile
(function(){
  function init() {
    function updateHeaderTitle() {
      document.body.classList.toggle('is-scrolled', window.scrollY > 80);
    }

    updateHeaderTitle();
    window.addEventListener('scroll', updateHeaderTitle, { passive: true });

    var btns = document.querySelectorAll('.nav-toggle');
    Array.prototype.forEach.call(btns, function(btn){
      btn.addEventListener('click', function(){
        var header = btn.closest('.header');
        if (!header) return;
        header.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', header.classList.contains('nav-open') ? 'true' : 'false');
      });
    });

    // Close menu when a nav link is clicked
    var navLinks = document.querySelectorAll('.nav-links a');
    Array.prototype.forEach.call(navLinks, function(link){
      link.addEventListener('click', function(){
        var header = link.closest('.header');
        if (!header) return;
        header.classList.remove('nav-open');
        var toggle = header.querySelector('.nav-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
