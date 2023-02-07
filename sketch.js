//Create planet canvases
var zoomIn;

var i;

//Switch off canvas
let switchOn = false;

//Declare Fonts
let font1;
let fontBold;

//Load Data
var pInfo;

//Move
let increment = true;
let counter;
let counterNew;

//Declare Planet Names
let planetCode = [0, 1, 2, 3, 4, 5, 6, 7];

let names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let gStrength = ["3.70m/s^2", "8.36m/s^2", "9.80m/s^2", "3.72m/s^2", "24.79m/s^2", "10.44m/s^2", "8.87m/s^2", "11.15m/s^2",];

let orbitTime = ["88 Days", "225 Days", "365 Days", "687 Days", "4,380 Days", "10,585 Days", "30,660 Days", "60,225 Days"]

let orbitDistance = ["35M Miles", "67M Miles", "92M Miles", "141M Miles", "483M Miles", "886M Miles", "1783M Miles", "2795M Miles"];

let distEarth = ["28M Miles", "62M Miles", "38M Miles", "33.9M Miles", "365M Miles", "746M Miles", "1600M Miles", "2700M Miles"];

//Declare Background Image
let bg;

// Declare Planet Variables
let visibility;
let mercury;
let venus;
let earth;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;

//Declare Mid Points
let middleX;
let middleY;

//Declare Planet Speeds
let mercurySpeed = 300;
let venusSpeed = 200;
let earthSpeed = 1500;
let marsSpeed = 1800;
let jupiterSpeed = 0;
let saturnSpeed = 10;
let uranusSpeed = 200;
let neptuneSpeed = 800;
let plutoSpeed = 1900;

//planet rotation speed
let rotation = 100;

//Declare Planet Images
let mercuryImg;
let venusImg;
let earthImg;
let marsImg;
let jupiterImg;
let saturnImg;
let uranusImg;
let neptuneImg;

function preload() {
  font1 = loadFont("SpaceGrotesk-Medium.ttf");
  fontBold = loadFont("SpaceGrotesk-Medium.ttf");
  bg = loadImage('Background Image.png');
  pInfo = loadJSON("data.json");
  
  //load planet images
  mercuryImg = loadImage('Mercury.png');
  venusImg = loadImage('Venus.png');
  earthImg = loadImage('Earth.png');
  marsImg = loadImage('Mars.png');
  jupiterImg = loadImage('Jupiter.png');
  saturnImg = loadImage('Saturn.png');
  uranusImg = loadImage('Uranus.png');
  neptuneImg = loadImage('Neptune.png');
  
  //planet images array
  planetImgArr = [mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg];
  
}

function setup() {
  createCanvas(800, 800);
  extraCanvas = createGraphics(800,800);
  extraCanvas.clear();
  zoomIn = createGraphics(800, 800);
  zoomIn.clear();
  zoomIn.imageMode(CENTER);
    
  //Create planets as objects
  mercury = new Planets(64, 32, 5, "#CADCC1", names[0], planetCode[0]);
  venus = new Planets(90, 45, 8, "#FCEEC3", names[1], planetCode[1]);
  earth = new Planets(120, 60, 12, "#5C9BE4", names[2], planetCode[2]);
  mars = new Planets(146, 73, 10, "#DC6855", names[3], planetCode[3]);
  jupiter = new Planets(280, 140, 25, "#F58466", names[4], planetCode[4]);
  saturn = new Planets(400, 200, 20, "#F9B673", names[5], planetCode[5]);
  uranus = new Planets(520, 260, 16, "#F7941E", names[6], planetCode[6]);
  neptune = new Planets(600, 300, 14, "#27AAE1", names[7], planetCode[7]);
}

function draw() {
  middleX = width / 2;
  middleY = height / 2;
  image(bg, 0, 0);
  
  push();
  textSize(28);
  fill("#F4F2BD");
  textFont(fontBold);
  textAlign(CENTER);
  text("A Guide to the Galaxy", width/2, 65);
  textSize(12);
  textFont(font1);
  textAlign(LEFT);
  text("Click on a planet " + "\n" + "for more info", 50, 730);
  textSize(12);
  textFont(font1);
  textAlign(RIGHT);
  text("An experiment in" + "\n" + "interactivity", 730, 730);
  pop();
  
  
  // background(0);

  //Sun
  fill(255, 214, 0);
  noStroke();
  circle(middleX, middleY, 50);
  
  //Mercury
  mercury.make(mercurySpeed);
  
  //Venus
  venus.make(venusSpeed);

  //Earth
  earth.make(earthSpeed);
  
  //Mars
  mars.make(marsSpeed);

  //Jupiter
  jupiter.make(jupiterSpeed);
  
  //Saturn
  saturn.make(saturnSpeed);
  push();
  fill("#F9B673")
  ellipse(sin(saturnSpeed) * 200 + middleX, cos(saturnSpeed) * 200 + middleY, 27, 14)
  pop();
  
  //Uranus
  uranus.make(uranusSpeed);
  
  //Neptune
  neptune.make(neptuneSpeed);

  //Orbital Speeds
  mercurySpeed += 0.01;
  venusSpeed -= 0.0075;
  earthSpeed += 0.006;
  marsSpeed += 0.005;
  jupiterSpeed += 0.003;
  saturnSpeed += 0.0025;
  uranusSpeed += 0.0015;
  neptuneSpeed += 0.0012;
  
  rotation += 0.001;
  
  i++;
  
  

  image(extraCanvas, 0, 0);
  if(switchOn) {
    image(zoomIn,0 ,0);
  } else {
    zoomIn.clear();
  }
}



function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function mouseClicked() {
  extraCanvas.clear();
  counter = millis() + 2000;
  
  var d2 = dist(75, 75, mouseX, mouseY);
  
  if (mercury.clicked() == true) {
    mercury.display();
  } else if (venus.clicked() == true) {
    venus.display();
  } else if (earth.clicked() == true) {
    earth.display();
  } else if (mars.clicked() == true) {
    mars.display();
  } else if (jupiter.clicked() == true) {
    jupiter.display();
  } else if (saturn.clicked() == true) {
    saturn.display();
  } else if (uranus.clicked() == true) {
    uranus.display();
  } else if (neptune.clicked() == true) {
    neptune.display();
  } else {
    console.log("This is not a planet");
  }
  
    switchOn = !switchOn;
  
  
}

class Planets {
  constructor(orbit, radius, size, color, name, code) {
    this.orbit = orbit;
    this.radius = radius;
    this.size = size;
    this.color = color;
    this.name = name;
    this.code = code;
  }

  //Make Function
  make(speed) {
    this.speed = speed;

    push();
    setLineDash([4, 4]);
    noFill();
    strokeWeight(2);
    stroke(255, 50);
    circle(middleX, middleY, this.orbit);
    pop();

    fill(this.color);
    noStroke();
    circle(
      (sin(this.speed) * this.radius + middleX), (cos(this.speed) * this.radius + middleY), this.size);
  }
  
  //Display Function
  display() {
    zoomIn.clear();
    zoomIn.background(0);
    zoomIn.image(bg, width/2, height/2);
    
    //Close button
    push();
    zoomIn.noFill(255);
    zoomIn.stroke(255);
    zoomIn.strokeWeight(2);
    zoomIn.circle(50, 50, 50);
    zoomIn.line(40, 40, 60, 60);
    zoomIn.line(60,40, 40, 60);
    pop();
    
    //Display planet image
    push();
    var planetVarName = planetImgArr[pInfo.id];
    zoomIn.image(planetImgArr[this.code], width/2, height/2);
    pop();
    
    //Display information
    let info1 = "Name: " + pInfo[this.code].name + "\n" + "Gravitational Strength: " + pInfo[this.code].gravity + "\n" + "Relative Mass: " + pInfo[this.code].mass;
    
    let info2 = "Orbit Period: " + pInfo[this.code].orbitalPeriod + "\n" + "Number of Moons: " + pInfo[this.code].numberOfMoons + "\n" + "Distance from Sun: " + pInfo[this.code].distanceFromSun;

    let title = pInfo[this.code].name;
    
    push();
    zoomIn.noStroke();
    zoomIn.fill("#F4F2BD");
    zoomIn.textAlign(LEFT);
    zoomIn.textFont(font1);
    zoomIn.textSize(16);
    zoomIn.text(info1, 50, 710);
    zoomIn.text(info2, 525, 710);
    zoomIn.fill("#F4F2BD");
    zoomIn.textAlign(CENTER);
    zoomIn.textSize(28);
    zoomIn.textFont(fontBold);
    zoomIn.text(title, width/2, 75);
    pop();
  }
  
  
  //Clicked Function 
  clicked() {
    increment = false;
    var d = dist(
      sin(this.speed) * this.radius + middleX, cos(this.speed) * this.radius + middleY, mouseX, mouseY);
    if (d < this.size) {
      return true;
    } else { 
      return false;
    }
  }
}
