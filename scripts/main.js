// Small navigation toggle for mobile
(function(){
  function init() {
    var btns = document.querySelectorAll('.nav-toggle');
    Array.prototype.forEach.call(btns, function(btn){
      btn.addEventListener('click', function(){
        var header = btn.closest('.header');
        if (!header) return;
        header.classList.toggle('nav-open');
      });
    });

    // Close menu when a nav link is clicked
    var navLinks = document.querySelectorAll('.nav-links a');
    Array.prototype.forEach.call(navLinks, function(link){
      link.addEventListener('click', function(){
        var header = link.closest('.header');
        if (!header) return;
        header.classList.remove('nav-open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
