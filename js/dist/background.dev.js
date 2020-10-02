"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var p;

function setup() {
  p = new Particle(0, 0, 0, 200, 100);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
  background(0);
  p.update();
  p.show();
}

var Particle =
/*#__PURE__*/
function () {
  function Particle(x, y, z, r, size) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
    this.size = size;
  }

  _createClass(Particle, [{
    key: "update",
    value: function update() {
      this.x = sin(radians(frameCount)) * this.r;
      this.y = cos(radians(frameCount)) * this.r;
      this.z = sin(radians(frameCount)) * this.r;
    }
  }, {
    key: "show",
    value: function show() {
      noFill();
      ellipse(this.x, this.y, 100 + this.z * 0.25, 100 + this.z * 0.25);
    }
  }]);

  return Particle;
}();