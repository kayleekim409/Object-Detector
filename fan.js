var status = "";
var object = [];

function preload() {
    img = loadImage("ceilingfan.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

    detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function modelLoaded() {
    status = true;
    detector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function backToHome() {
    window.location = "index.html";
}

function draw() {
    image(img, 0, 0, 600, 400);
    if (status != "") {
        detector.detect(img, gotResult);
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number").innerHTML = "Number of Objects : " + object.length;
            var label = object[i].label;
            var confidence = floor(object[i].confidence * 100) + "%";
            fill("black");
            text(object[i].label, object[i].x, object[i].y);
            noFill();
            stroke("black");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

    }

}