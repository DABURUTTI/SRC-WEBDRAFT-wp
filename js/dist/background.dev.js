"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dot = new Array(); //var maxWidth = window.innerWidth;

var sap = 5;
var boxWidth = window.innerWidth / sap;
var logo;
var pointers = new Array();

function setup() {
  logo = loadImage("../img/logo_w.svg");
  createCanvas(window.innerWidth, window.innerHeight);
  background(color('#ffc533'));

  for (var i = 0; i < sap; i++) {
    for (var j = 0; j < window.innerHeight / boxWidth; j++) {
      pointer_instance = new Pointer(Math.random() * windowWidth, Math.random() * windowHeight, 200);
      pointers.push(pointer_instance);
    }
  }

  maxHeight = window.innerHeight;
  boxWidth = window.innerWidth / sap;
}

function draw() {
  background(color('#ffffff20'));
  pointers.forEach(function (element) {
    element.move();
  });
  noStroke();
  fill(0);
  noStroke();
  rect(5, window.innerHeight - 25, 150, 20);
  fill(255);
  text("".concat(int(frameCount / millis() * 1000), " fps - mode : DEBUG"), 10, window.innerHeight - 10);
  pointers.forEach(function (element) {
    element.update(Math.random() * windowWidth, Math.random() * windowHeight, 200);
  });
  fill(0);
  image(logo, windowWidth / 2 - 300, windowHeight / 2 - 200, 600, 400);
}

function windowResized() {
  setup();
}

var Pointer =
/*#__PURE__*/
function () {
  function Pointer(x, y, size) {
    _classCallCheck(this, Pointer);

    this.x = x;
    this.y = y;
    this.size = size;
    this.destX = x;
    this.destY = y;
    this.nSize = size;
    this.color = color(Math.random() * 255, Math.random() * 255, Math.random() * 255); //this.color = color(50,84,48);
  }

  _createClass(Pointer, [{
    key: "update",
    value: function update(newX, newY, newSize) {
      this.destX = newX;
      this.destY = newY;
      this.nSize = newSize;
    }
  }, {
    key: "move",
    value: function move() {
      stroke(this.color);
      strokeWeight(53);
      noFill();
      ellipse(this.x, this.y, 500, 500); //update position

      this.x = (this.destX - this.x) * 0.01 + this.x;
      this.y = (this.destY - this.y) * 0.01 + this.y;
      this.size = (this.nSize - this.size) * 0.01 + this.size;
    }
  }]);

  return Pointer;
}();

var colorDirector = function colorDirector() {
  _classCallCheck(this, colorDirector);
};

var Dot =
/*#__PURE__*/
function () {
  function Dot(x, y, speed, size) {
    _classCallCheck(this, Dot);

    this.x = x;
    this.y = y;
    this.speed = speed + 0.1;
    this.size = speed * 10 + 5;
    this.color = speed * 255;
  }

  _createClass(Dot, [{
    key: "move",
    value: function move() {
      //this.x += this.speed;
      stroke(this.color); //fill(sin()*255);

      fill(this.color);
      rect(this.x, this.y, boxWidth, boxWidth); //text(frameCount/millis()*1000,this.x+10,this.y);
    }
  }]);

  return Dot;
}();