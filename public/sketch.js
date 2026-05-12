import { submitTimer } from "./index.js";
let floor;
  let Accel;
  let Force;
  let holding;
  let timer;
  let Yt;
  let game;
let ball1;
  let Dec;
  let button1;
  let Yb;
  let start1;
let ct;
let tt = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  world.gravity.y = 9.82;
 
 loadFont('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=L');
  Yb = window.innerHeight/1.6;
  start();
}

function start(){
  start1 = new Sprite();
  start1.y = Yb;
start1.x = window.innerWidth/2;
start1.width = window.innerWidth * (128/1196);
start1.height = window.innerHeight * (64/1174);
start1.physics = "STATIC";
start1.color = '#04FF00AFF';
 start1.text = "START";
  start1.textSize = window.innerWidth * (42/1196);
  start1.textColor = "White";
}



 function ball(){
 ball1 = new Sprite();
  ball1.diameter = window.innerHeight * 0.1;
  ball1.color = '#FFFFFF'
  ball1.allowSleeping = false;
  ball1.bounciness = 0.53;
  ball1.friction = 0;
  ball1.mass = 0;
  ball1.isSuperFast = true;
  ball1.y = window.innerHeight/window.innerHeight;
  ball1.x = window.innerWidth/2;
 }
function staticelems(){
floor = new Sprite();

     floor.color = '#42A76F'
  floor.x = window.innerWidth/2;
  floor.y = window.innerHeight/2;
  
  floor.width = window.innerWidth - 30;
  floor.height = window.innerHeight * 0.0511;
 
  floor.debug = true;
    floor.physics = KINEMATIC;
   floor.rotation = 10;
  floor.friction = 0;
  floor.isSuperFast = true;
  floor.bounciness = 0.53;
  floor.mass = 0;

}

function draw() {
  
  if(start1.mouse.pressed()){
 Accel = 0;
 Force = 0.05;
 holding = "";
  Yt = 100;
  Dec = 0.1;
   timer = 0;
    ball();
  staticelems();
    start1.delete();
}
  background(65, 127, 255);
  if (typeof floor == "object"){
    PInput();
   
    if (floor.collided(ball1)){
      if (performance.now() > tt){
        timer = timer + Math.ceil(floor.collided(ball1));
        tt = performance.now() + 500;
      }
      
  } 
  }
  
  if(typeof ball1 == "object"){
  if((ball1.y < window.innerHeight && ball1.y  !== 0) && (ball1.x > 0 && ball1.x < window.innerWidth) && game !== "Game Over"){                              
                  }else if(ball1.y > window.innerHeight || ball1.y == 0 || ball1.x > window.innerWidth || ball1.x < 0) {
                    if(game !== "Game Over"){
                      timer = "Game Over" + "\n" + timer;
                       button();
                      
                    }
                   game = "Game Over";
                  }
    text(timer + " score", window.innerWidth/2,Yt);
  textAlign(CENTER, TOP);
textSize(window.innerHeight * (64/1174));
fill(255,255,255);
gameOver
if(game == "Game Over"){
  floor.delete();
   Yt = window.innerHeight/2.5;
    if(button1.mouse.pressing()){
    window.location.reload();
  }
   }
} 
  
}

function gameOver(timer) {
let name = prompt("Enter your name: ");
submitTimer(name, timer);
}

function button(){
  
  button1 = new Sprite();
button1.y = Yb;
button1.x = window.innerWidth/2;
button1.width = window.innerWidth * (128/1196);
button1.height = window.innerHeight * (64/1174);
button1.physics = "STATIC";
button1.color = '#04FF00AFF';
 button1.text = "REPLAY";
  button1.textSize = window.innerWidth * (42/1196);
  button1.textColor = "White";
}

function PInput(){
if (holding == ""){
  if (kb.holding("a")){
    holding = "a";
  }

  if (kb.holding("d")){
    holding = "d";
  }
} else {
   if (!kb.holding("a") && holding == "a"){
    holding = "";

  }
if (!kb.holding("d") && holding == "d"){
    holding = "";
}
}
  if (kb.holding("a") && holding == "a"){
    
    Accel -= Force;
  }
  if (kb.holding("d") && holding == "d"){
    
    Accel += Force;
    
  }
  if(!kb.holding("a") && !kb.holding("d") && Accel != 0) {
    Accel -= (Dec * Accel/2) * (Accel/Accel);
    if((Accel > 0 && Accel < 0.1) || (Accel < 0 && Accel > -0.1)){
      Accel = 0;
    }
  }
if(Accel > 5){
  Accel = 5;
}
if(Accel < -5){
  Accel = -5;
}
  
floor.rotate(Accel, Accel);
  





 }



