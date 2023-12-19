ball_image="";
Status="";
objects=[];

function preload()
{
ball_image=loadImage("ball.jpg");
}


function setup()
{
canvas=createCanvas(640, 350);
canvas.position(450, 200);
object_Detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}


function modelLoaded(){
console.log("Model Loaded!")
Status=true;
object_Detector.detect(ball_image, gotResult);
}

function gotResult(error, results){
if (error) {
console.error(error);

}
console.log(results);
objects=results;
}

function draw(){
image(ball_image, 0, 0, 640, 350);

if(Status != "")
{
for(i=0;i<objects.length;i++)
{
document.getElementById("status").innerHTML="Status: Object Detected";

fill("#FF0000");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%", objects[i].x-1016, objects[i].y-1550);
noFill();
stroke("#FF0000");
rect(objects[i].x-1016, objects[i].y-1400, objects[i].width-455, objects[i].height -1193);
}
}
}
