'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener('DOMContentLoaded', init, false);

var APP = undefined;

function init() {
   APP = new App();

   events();

   loop();
}

function loop() {
   APP.render();

   requestAnimationFrame(loop);
}

function events() {
   document.addEventListener('mousemove', APP.mousemoveHandler, false);
   document.addEventListener('mouseleave', APP.mouseleaveHandler, false);

   window.addEventListener('resize', APP.resize, false);
}

var App = function () {
   function App() {
      _classCallCheck(this, App);

      this.canvas = document.getElementById('dots');
      this.context = this.canvas.getContext('2d');

      this.canvas.width = this.width = window.innerWidth;
      this.canvas.height = this.height = window.innerHeight;

      this.setupDots();

      this.resize = this.resize.bind(this);
      this.mousemoveHandler = this.mousemoveHandler.bind(this);
      this.mouseleaveHandler = this.mouseleaveHandler.bind(this);
   }

   App.prototype.setupDots = function setupDots() {
      this.dots = [];
      this.scl = 30; //spacing
      this.cols = this.width / this.scl;
      this.rows = this.height / this.scl;

      var id = 0;
      for (var x = 0; x < this.cols; x += 1) {
         for (var y = 0; y < this.rows; y += 1) {
            this.dots.push(new Dot(id, x * this.scl, y * this.scl, this.context, this.scl));
            id += 1;
         }
      }
   };

   App.prototype.resize = function resize() {
      this.canvas.width = this.width = window.innerWidth;
      this.canvas.height = this.height = window.innerHeight;

      this.setupDots();
   };

   App.prototype.mousemoveHandler = function mousemoveHandler(event) {
      this.dots.forEach(function (d) {
         d.mousemove(event);
      });
   };

   App.prototype.mouseleaveHandler = function mouseleaveHandler() {
      this.dots.forEach(function (d) {
         d.isHover = false;
      });
   };

   App.prototype.render = function render() {
      this.context.clearRect(0, 0, this.width, this.height);

      this.dots.forEach(function (d) {
         d.render();
      });
   };

   return App;
}();

var Dot = function () {
   function Dot(id, x, y, context, scl) {
      _classCallCheck(this, Dot);

      this.id = id;
      this.x = x;
      this.y = y;
      this.new = { x: x, y: y };
      this.radius = 3;

      this.context = context;
      this.scl = scl;
      this.isHover = false;
      this.isANimated = false;
   }

   Dot.prototype.mousemove = function mousemove(event) {
      var x = event.clientX;
      var y = event.clientY;

     //attraction (4*3)
      this.isHover = Math.abs(this.x - x) < this.scl / 4 * 3 && Math.abs(this.y - y) < this.scl / 4 * 3 ? true : false;

      if (this.isHover) {//speed 0.4
         TweenMax.to(this.new, 0.4, { x: x, y: y });
      } else {
         TweenMax.to(this.new, 0.4, { x: this.x, y: this.y });
      }
   };

   Dot.prototype.render = function render() {
      this.context.beginPath();
      this.context.arc(this.new.x, this.new.y, this.radius, 0, 2 * Math.PI, false);

      this.context.fillStyle = '#d9d9d9';
      this.context.globalAlpha = this.isHover ? 1 : 0.25;
      this.context.fill();
   };

   return Dot;
}();