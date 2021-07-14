function addUser(){


    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
    window.location ="after_login.html";
}

function b1(){

    window.location= "total_no_of_case.html";
}

function back(){

    window.location="info.html";
}


function b5(){

    window.location ="after_login.html";

}

function go(){
    window.location = "info.html";
}


function b4(){

    window.location = "syntoms.html";


}


function b3(){

    window.location= "what_is_corona.html";
}

function reminder(){

window.location= "reminder.html"; 

}












var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="start timer")
      {
        console.log("your timer has started --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Your timer has started";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    

    setTimeout(function()
    { 
        
    }, 3,600,000);
}