pencil_pouch_image="";
Status="";

function preload()
{
pencil_pouch_image=loadImage("pencil_pouch.jpg");
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
objectDetector.detect(pencil_pouch_image, gotResult);
}

function gotResult(error, results){
if (error) {
console.error(error);

}
console.log(results);
}

function draw(){
image(pencil_pouch_image, 0, 0, 640, 350);
}
