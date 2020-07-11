var database;
var position;
var gamestate=0;
var count
var form,player,game;
var distance=0;
var allplayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  money =new Donation();
  money.getstate();
  money.start();

}


function draw(){
//  background("white");
if (count===4)
{
money.update(1);
}
if (gamestate===1)
{
  money.play()
}
}

