Webcam.set({
    width: 300,
    height: 250,
    image_format : 'png',
    png_quality:120 
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' ); 

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B9M-1RPyj/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}

function speak(){
    var synth = window.speakSynthesis;
    speak_data_1 = "The First  predection is" + predection_1;
    speak_data_2 = "The Second  predection is" + predection_2;
    var utterThis = new SpeachSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}