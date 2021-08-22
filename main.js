function setup(){
    canvas = createCanvas(650,500);
    canvas.position(650,350);

    video = createCapture(VIDEO);
    video.size(650, 500);
    video.hide();
}

function draw(){
    image(video, 0, 0, 650, 500);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_detected").innerHTML = "Status : Detecting Objects"
    status = false;
}
function modelLoaded(){
    console.log("Model has been loaded!");
    status = true;
}