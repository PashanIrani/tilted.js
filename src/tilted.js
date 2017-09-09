import './styles/main.scss';

var updateTilt = function(event, el, intensity, disableX, disableY, invert) {
  var amount = invert ? intensity * -1 : intensity;
  var x = event.clientX;
  var y = event.clientY;
  var w = window.innerWidth;
  var h = window.innerHeight;
  var midpointX = w / 2;
  var midpointY = h / 2;
  var posX = x - midpointX;
  var posY = y - midpointY;

  //Tilt
  var valX = disableX ? 0 : (posX / midpointX) * amount;
  var valY = disableY ? 0 : (posY / midpointY) * -amount;

  el.style.transform = 'perspective(550px) rotateY(' + valX + 'deg) rotateX(' + valY + 'deg)';
};

function toDefault(el, callback) {
  var time = 500;
  console.log('a');
  el.style.transition = 'all ' + time + 'ms';
  el.style.transform = 'perspective(550px) rotateY(0deg)  rotateX(0deg)';
  setTimeout(function() {
    el.style.transition = '';
  }, time);

  if (callback) {
    callback();
  }
}

window.tilted = function(tag_id, params) {

  var el = document.getElementById(tag_id);

  if (params) {
    var intensity = params.intensity;
    var disableX = params.disableX;
    var disableY = params.disableY;
    var invert = params.invert;
    var onHover = params.onHover; //TODO: make onhover be smooth
  }

  if (onHover) {
    el.addEventListener('mouseenter', function(event) {
      updateTilt(event, el, intensity, disableX, disableY, invert);
    });

    el.addEventListener('mouseleave', function() {
      toDefault(el);
    });
  } else {
    document.addEventListener('mousemove', function(event) {
        updateTilt(event, el, intensity, disableX, disableY, invert);
      }, false);

    document.addEventListener('mouseleave', function(event) {
      toDefault(el);
    }, false);
  }

};
