var xpoint;
var ypoint;

function preload() {
    image_mustache = loadImage('muswala-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(image_mustache, xpoint, ypoint, 50, 50);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        xpoint = results[0].pose.nose.x - 25;
        ypoint = results[0].pose.nose.y - 5;
    }
}

function take_snapshot() {
    var save_file = prompt('Please enter your required file name');
    save(save_file);
}