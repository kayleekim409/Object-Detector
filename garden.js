var status = "";
function preload() {
    img = loadImage("wardrobe.jpg");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

    detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
}
function modelLoaded() {
    status = true;
    detector.detect(img, gotResult);
}
function gotResult() {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}
}