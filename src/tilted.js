import './styles/main.scss';

var calcTilt = function(event, el, intensity, disableX, disableY, invert) {
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
  var valX = disableY ? 0 : (posY / midpointY) * -amount;
  var valY = disableX ? 0 : (posX / midpointX) * amount;

  //el.style.transform = 'perspective(550px) rotateY(' + valX + 'deg) rotateX(' + valY + 'deg)';
  return {
    x: valX,
    y: valY
  };
};

function rotate(el, x, y, callback, time) {
  console.log(time);
  time = time ? time : 500;
  el.style.transition = time + 'ms';
  el.style.transform = 'perspective(550px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)  ';
  setTimeout(function() {
    el.style.transition = '';
  }, time);

  if (callback) {
    callback();
  }
}

function tilt(el, x, y) {
  el.style.transform = 'perspective(550px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)  ';
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
    el.addEventListener('mouseenter', start);
    el.addEventListener('mouseleave', leave);
  } else {
    document.addEventListener('mouseenter', start);
    document.addEventListener('mouseleave', leave);
  }

  function start(event) {
    var degs = calcTilt(event, el, intensity, disableX, disableY, invert);

    //rotate to deg on enter then follow
    rotate(el, degs.x, degs.y, function() {
      el.addEventListener('mousemove', follow, false);
    }, 100);
  }

  function follow(event) {
    var degs = calcTilt(event, el, intensity, disableX, disableY, invert);
    tilt(el, degs.x, degs.y);
  }

  function leave() {
    el.removeEventListener('mousemove', follow, false);
    rotate(el, 0, 0);
  }
};
