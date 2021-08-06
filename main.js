function setup(){
    canvas= createCanvas(500, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide()
    classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CZ5wBAsxZ/model.json", modelLoaded);
}
function draw(){
    image(video, 0, 0, 500, 300);
    classifier.classify(video, gotResults);
}
function gotResults(error, results){
    if (error) {
        console.log(error)
} else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.tofixed(3)
}
}
function modelLoaded(){
    console.log('Model Loaded!!')
}