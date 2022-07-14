https://teachablemachine.withgoogle.com/models/8BKxi3W2E/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function Take_Snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("Result").innerHTML="<img id='image1' src='"+data_uri+"'>";
    });
}
console.log("ml5version-",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8BKxi3W2E/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded")
}