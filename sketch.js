var database;
var gameState=0;
var playerCount=0;
var form;
var game;
var player;


function setup(){
  database = firebase.database();
  createCanvas(800,800);
  game=new Game();
  game.getState()
  game.start()
}

function draw(){
  background("white");  
}

