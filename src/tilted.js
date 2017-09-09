import './styles/main.scss';

var rotate = function(event, el) {
  var amount = 20;
  var x = event.clientX;
  var y = event.clientY;
  var w = window.innerWidth;
  var h = window.innerHeight;
  var midpointX = w / 2;
  var midpointY = h / 2;
  var posX = x - midpointX;
  var posY = y - midpointY;

  var valX = (posX / midpointX) * amount;
  var valY = (posY / midpointY) * -amount;

  el.style.transform = 'perspective(550px) rotateY(' + valX + 'deg) rotateX(' + valY + 'deg)';
};

window.tilted = function(tag_id, params) {
  var el = document.getElementById(tag_id);
  document.addEventListener('mousemove', function(event) {
    rotate(event, el);
  }, false);
};
