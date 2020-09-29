"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dot;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(color('#ffc533'));
  dot = new Dot(10, 10, 1, 20);
}

function draw() {
  background(color('#ffc533'));
  dot.move();
}

function windowResized() {
  setup();
}

var Dot =
/*#__PURE__*/
function () {
  function Dot(x, y, speed, size) {
    _classCallCheck(this, Dot);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
  }

  _createClass(Dot, [{
    key: "move",
    value: function move() {
      this.y += this.speed;
      fill(0);
      ellipse(this.x, this.y, this.size, this.size);
      text(frameCount / millis() * 1000, this.x + 10, this.y);
    }
  }]);

  return Dot;
}();