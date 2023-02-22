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

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        predection_1 = results[0].label;
        predection_2 = results[1].label;
        speak();
        if(results[0].label == "Fist")
        {
            document.getElementById("update_emoji").innerHTML = "&#9994;";
        } 
        if(results[0].label == "Hand")
        {
            document.getElementById("update_emoji").innerHTML = "&#9995;";
        } 
        if(results[0].label == "Peace")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        } 

        if(results[1].label == "Fist")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9994;";
        } 
        if(results[1].label == "Hand")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9995;";
        } 
        if(results[1].label == "Peace")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        } 
    }
    }

function speak(){
    var synth = window.speakSynthesis;
    speak_data_1 = "The First  predection is" + predection_1;
    speak_data_2 = "The Second  predection is" + predection_2;
    var utterThis = new SpeachSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}