;(function (exports) {

  var easeIn = function (elements, delay) {
    delay = delay || 50;
    if (elements.length > 0) {
      var firstEl = elements[0],
          remainingEls = Array.prototype.slice.call(elements, 1, elements.length);
      // if firstEl has children, prepend them to remainingEls
      if (firstEl.children.length > 0) {
        remainingEls = Array.prototype.slice.call(firstEl.children).concat(remainingEls);
      }
      firstEl.className += " visible";
      setTimeout(function () {
        easeIn(remainingEls, delay);
      }, delay);
    }
  };

  exports.easeIn = easeIn;

})(this);