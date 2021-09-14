var retFixo, retMovendo;

var obj1;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(200,200,50,80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(150,200,50,50);
  retMovendo.shapeColor = "orange";
  retMovendo.debug = true;

  obj1 = createSprite(300,200,50,50);
  obj1.shapeColor = "red";
  obj1.debug = true;
}

function draw() {
  background(0,0,0);  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  if(isTouching(retMovendo,obj1)){
    retMovendo.shapeColor = "blue";
    obj1.shapeColor = "purple";
  }else{
    retMovendo.shapeColor = "purple";
    obj1.shapeColor = "green";
  }
  
  
  drawSprites();
}

function isTouching(objeto1, objeto2){
  if(objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2 && 
    objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2 && 
    objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2 &&
    objeto2.y - objeto1.y < objeto2.height/2 + objeto1.height/2 ){
     return true;
  }
}