pig_image="";
Status="";

function preload()
{
pig_image=loadImage("pig.jpg");
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
objectDetector.detect(pig_image, gotResult);
}

function gotResult(error, results){
if (error) {
console.error(error);

}
console.log(results);
}

function draw(){
image(pig_image, 0, 0, 640, 350);
}
