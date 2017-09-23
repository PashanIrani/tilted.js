var calcTilt = function(event, el, intensity, disableX, disableY, invert) {
  var amount = invert ? intensity * -1 : intensity;
  var x = (el == document) ? event.clientX : event.clientX - el.getBoundingClientRect().left;
  var y = (el == document) ? event.clientY : event.clientY - el.getBoundingClientRect().top;
  w = (el == document) ? window.innerWidth : el.getBoundingClientRect().width;
  h = (el == document) ? window.innerHeight : el.getBoundingClientRect().height;
  var midpointX = w / 2;
  var midpointY = h / 2;

  var posX = x - midpointX;
  var posY = y - midpointY;

  //Tilt
  var valX = disableY ? 0 : (posY / midpointY) * -amount;
  var valY = disableX ? 0 : (posX / midpointX) * amount;

  return {
    x: valX,
    y: valY
  };
};

//titls to with animation
function rotate(el, x, y, time, callback) {
  if (el == document) return;
  time = time ? time : 500;
  el.style.transition = time + 'ms';
  el.style.transform = 'perspective(550px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
  setTimeout(function() {
    el.style.transition = '';
    if (callback) {
      callback();
    }
  }, time);

}

//snaps to deg
function tilt(el, x, y) {
  el.style.transform = 'perspective(550px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)  ';
}

window.tilted = function(tag_id, params) {

  /*
  * 0: not in focus
  * 1: animation
  * 2: follow
  */
  var state = 0;

  var el = document.getElementById(tag_id); //getting element ready

  //defaults
  var intensity = 12;
  var disableX = false;
  var disableY = false;
  var invert = false;
  var onHover = false;

  // configuring params
  if (params) {
    intensity = params.intensity ? params.intensity : intensity;
    disableX = params.disableX ? params.disableX : disableX;
    disableY = params.disableY ? params.disableY : disableY;
    invert = params.invert ? params.invert : invert;
    onHover = params.onHover ? params.onHover : onHover;
  }

  console.log(intensity);
  // determines what to place events on
  var obj = onHover ? el : document;
  console.log(obj);
  //adding listener :P
  obj.addEventListener('mouseenter', start);
  obj.addEventListener('mouseleave', leave);
  obj.addEventListener('mousemove', follow);

  function start(event) {
    if (state == 0) {
      var degs = calcTilt(event, obj, intensity, disableX, disableY, invert);
      state = 1;

      //rotate to deg on enter then follow
      rotate(el, degs.x, degs.y, 75, function() {
        state = 2;
      });
    }
  }

  function follow(event) {
    if (state == 2) {
      var degs = calcTilt(event, obj, intensity, disableX, disableY, invert);
      tilt(el, degs.x, degs.y);
    }
  }

  function leave() {
    if (state == 2) {
      state = 1;
      rotate(el, 0, 0, 200, function() {
        state = 0;
      });
    }
  }
};
