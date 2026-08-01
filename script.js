document.addEventListener('DOMContentLoaded', function(){
  var els = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  els.forEach(function(el){ io.observe(el); });

  // animated counters
  var counters = document.querySelectorAll('[data-count]');
  var cio = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var el = e.target;
        var target = el.getAttribute('data-count');
        var isM = /M/.test(target);
        var numeric = parseFloat(target.replace(/[^0-9.]/g,''));
        var suffix = target.replace(/[0-9.M]/g,'');
        var dur = 1300;
        var t0 = null;
        function step(ts){
          if(!t0) t0 = ts;
          var p = Math.min((ts-t0)/dur, 1);
          var eased = 1 - Math.pow(1-p, 3);
          var val = (numeric*eased);
          var display;
          if(isM){
            display = val.toFixed(0) + 'M';
          } else if (numeric % 1 !== 0){
            display = val.toFixed(1);
          } else {
            display = Math.floor(val).toLocaleString('en-US');
          }
          el.textContent = display + suffix;
          if(p<1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        cio.unobserve(el);
      }
    });
  }, {threshold:0.4});
  counters.forEach(function(el){ cio.observe(el); });
});
