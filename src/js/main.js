// https://robots.thoughtbot.com/pong-clone-in-javascript

(function () { 'use strict';


//method for setting the framrate
var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

//set colours
var ink = 'rgba(10,0,141,1)';
var blue = 'rgba(0,0,246,1)';
var pink = 'rgba(255,0,141,1)';
var yellow = 'rgba(255,223,141,1)';
var yelPink = 'rgba(255,112,141,1)'  

//create a canvas element in the variable to be appended later
var canvas = document.createElement('canvas');
var canvBorder = 10;
var paddleDepth = 20;
var paddleWidth = 100;
var width = $(document).width() - (2 * canvBorder);
var height = $(document).height() - (2 * canvBorder);

//call canvas size
canvasSize();
var context = canvas.getContext('2d');

window.onload = function() {
  $('#game-wrap').append(canvas);
  animate(step);
};


//*************** DEFINE STEP *************** //

var step = function() {
  update();
  render();
  animate(step);
}

var update = function() {

}

var render = function() {
  context.fillStyle = ink;
  context.fillRect(0,0, width, height);
  player.render();
  computer.render();
  ball.render();
}


//*************** DEFINE PADDLES *************** //

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.xSpeed = 0;
  this.ySpeed = 0;
}


Paddle.prototype.render = function(colour) {
  context.fillStyle = colour;
  context.fillRect(this.x, this.y, this.width, this.height);
}

function Player() {
  this.Paddle = new Paddle( (width/2), (height - paddleDepth - 10), paddleWidth, paddleDepth);
}

function Computer() {
 this.Paddle = new Paddle( (width/2) , (0 + 10), paddleWidth, paddleDepth); 
}

Player.prototype.render = function() {
  this.Paddle.render(pink);
}

Computer.prototype.render = function() {
  this.Paddle.render(yellow);
}

//*************** DEFINE BALL *************** //

function Ball(x,y) {
  this.x = x;
  this.y = y;
  this.xSpeed = 0;
  this.ySpeed = 3;
  this.radius = 15;
}

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = yelPink;
  context.fill();
}





var player = new Player();
var computer = new Computer();
var ball = new Ball (200, 300);




//*************** XXX *************** //


function canvasSize () {
  canvas.width = width;
  canvas.height = height;
}











}()); // end 'use strict'