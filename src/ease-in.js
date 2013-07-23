;(function (exports) {

  var easeIn = function (elements, delay) {
    delay = delay || 50;
    if (elements.length > 0) {
      var firstEl = elements[0],
          remainingEls = Array.prototype.slice.call(elements, 1, elements.length);
      firstEl.className += " visible";
      if (firstEl.children.length > 0) {
        setTimeout(function () {
          easeIn(Array.prototype.slice.call(firstEl.children).concat(remainingEls));
        }, delay);
      } else {
        setTimeout(function () {
          easeIn(remainingEls);
        }, delay);
      }
    }
  };

  exports.easeIn = easeIn;

})(this);