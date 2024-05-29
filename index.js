var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display="none";
})
var x = document.getElementById("music");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
const button = document.querySelector("button");

const SpeechRecognition = 
 window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function (){
    console.log("speech recognition started");
};

recognition.onresult = function(event){
    const spokenwords = event.results[0][0].transcript;

    console.log("spoken words are",spokenwords);
    computerSpeech(spokenwords);
};



function computerSpeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;
    
    determineWords(speech,words);

    window.speechSynthesis.speak(speech);
}
function determineWords(speech,words){
    if(words.includes("Hello, how are you?")){
        speech.text = "i am fine , thank you!";
    }
    else if(words.includes("What is your name?")){
        speech.text = "My name is mr. robot";
    }
    else if(words.includes("Open Facebook")){
        speech.text = "opening facebook for you";
        window.open("https://www.facebook.com/login.php");
    }
    else if(words.includes("Open Google")){
        speech.text = "Opening google for you";
        window.open("https://www.google.com/");
    }
    else if(words.includes("Open YouTube")){
        speech.text = "Opening YouTube for you";
        window.open("https://www.youtube.com/");
    }
    else if(words.includes("Animal HD image")){
        speech.text = "Opening Animal images for you";
        window.open("https://unsplash.com/s/photos/animal");
    }
    
    else if(words.includes("Restaurant website project")){
        speech.text = "Opening Restaurant website project made by Harsha";
        window.open("https://resturantwebsite12.netlify.app/");
    }

    // https://responsivewebsite12.netlify.app
    else if(words.includes("Responsive website project")){
        speech.text = "Opening Responsive website project made by Harsha";
        window.open("https://responsivewebsite12.netlify.app");
    }

    else if(words.includes("Open library project")){
        speech.text = "Opening library website project made by Harsha";
        window.open("https://book-library-website.netlify.app/");
    }
    
    else if(words.includes("Open calculator")){
        speech.text = "Opening calculator project made by Harsha";
        window.open("https://calculatorweb12.netlify.app/");
    }
   // https://cvproject12.netlify.app/
   else if(words.includes("CV project")){
        speech.text = "Opening cv project made by Harsha";
        window.open("https://cvproject12.netlify.app/");
    }
   // http://127.0.0.1:5501/newsproject/index.html
   else if(words.includes("Open news")){
        speech.text = "today news";
        window.open(" http://127.0.0.1:5501/newsproject/index.html");
    }
    else if(words.includes("Play music")){
        x.play();
    }
    else if(words.includes("Stop music")){
        x.pause();
    }
    else{
        speech.text = words;
        
    }

}

button.addEventListener("click",()=>{
    recognition.start();
});