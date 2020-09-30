"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dot = new Array();
var maxHeight = window.innerHeight;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(color('#ffc533'));

  for (var i = 0; i < 100; i++) {
    dot_instance = new Dot(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 1, 20);
    dot.push(dot_instance);
  }

  maxHeight = window.innerHeight;
}

function draw() {
  background(color('#ffc53305'));
  dot.forEach(function (element) {
    element.move();
  });
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
      noStroke();
      fill(255, 255, 255, 40);
      ellipse(this.x, this.y, this.size, this.size); //text(frameCount/millis()*1000,this.x+10,this.y);

      if (this.y - this.size >= maxHeight) {
        this.y = -this.size;
      }
    }
  }]);

  return Dot;
}();