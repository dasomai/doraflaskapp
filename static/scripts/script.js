const voiceIcon = document.querySelector(".voiceIcon")
const doraImage = document.querySelector(".doraImage")
const container = document.querySelector(".container")



// const listenMessage = document.querySelector(".listenMessage")

let playSound = () => new Audio("sounds/click.wav").play()

let playSoundTTre = () => new Audio("sounds/cctre.mp3").play()

let playMusic = () => new Audio("sounds/music.mp3").play()

let playSoundTTreNe = () => new Audio("sounds/cctre2.mp3").play()
let appear = () => new Audio("sounds/appear.mp3").play()
let magicwand = () => new Audio("sounds/magicwand.mp3").play()




let yesOfcourse = () => new Audio("sounds/response/yesOfcourse.mp3").play()

let imdoingwell = () => new Audio("sounds/response/imdoingwell.mp3").play()
let hi = () => new Audio("sounds/response/hi.mp3").play()
let hinobi = () => new Audio("sounds/response/hinobi.mp3").play()
let handsome = () => new Audio("sounds/response/handsome.mp3").play()
let noProblem = () => new Audio("sounds/response/noProblem.mp3").play()

let peaceOfcake = () => new Audio("sounds/response/peaceOfcake.mp3").play()



let yesIknow = () => new Audio("sounds/response/yesIknow.mp3").play()
let hereIam = () => new Audio("sounds/response/hereIam2.mp3").play()
let hereIamHelp = () => new Audio("sounds/response/hereIam.mp3").play()


let realTalk = () => new Audio("sounds/response/cccare.mp3").play()
let realTalk2 = () => new Audio("sounds/response/realTalk2.mp3").play()
let realTalk3 = () => new Audio("sounds/response/realTalk3.mp3").play()

let noProblem2 = () => new Audio("sounds/response/noProblem2.mp3").play()



let ywc = () => new Audio("sounds/response/uwc.mp3").play()
let matane = () => new Audio("sounds/response/matane.mp3").play()
let goodbye = () => new Audio("sounds/response/goodbye.mp3").play()
let goodbyeNobita = () => new Audio("sounds/response/goodbyeNobita.mp3").play()


let noDiy = () => new Audio("sounds/response/noDiy.mp3").play()


let ok = () => new Audio("sounds/response/ok.mp3").play()
let noIcant = () => new Audio("sounds/response/noIcant.mp3").play()
let noStop = () => new Audio("sounds/response/noStop.mp3").play()
let imhere = () => new Audio("sounds/response/imhere.mp3").play()












voiceIcon.addEventListener('click', e => {
    e.preventDefault();
    console.log("clicked")
    playSound()
    
    // voiceIcon.classList.toggle("saySomething")
    // listenMessage.classList.toggle("hidden")
    //listen to voice and show it in screen
    //listen to voice and show it in console
    // listenVoice() 
    runSpeechRecognition()


})

// function listenVoice() {

// }


function runSpeechRecognition() {
    voiceIcon.classList.toggle("saySomething")
    // listenMessage.classList.toggle("hidden")
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        // action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        voiceIcon.classList.toggle("saySomething")
        // listenMessage.classList.toggle("hidden")
        // action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = "<b>Nobita:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
        output.classList.remove("hide");
        // chatbot(transcript)
        botTalk(chatbot(transcript))
    };
  
     // start recognition
     recognition.start();
     
     
}


function chatbot(text){
    message = text.toLowerCase()
    let reply = ""
    if(message == "what is your name"){
        // reply = "Hi. My name is Doraemon. How about you?"
        hi()
    }
    if(message == 'my name is nobita'){
        // reply = "Hi Nobita, nice to meet you. Do you think I'm handsome?"
        hinobi()

    }
   
    

    if(message == "yeah you are so handsome" || message == "yeah you're so handsome"
    
    || message == "you're so handsome"){

        // reply = "Yes, I'm too handsome to the world."    
        yesIknow()
    
    }

    if(message == "doraemon"){
        // reply = "Here I am,  How can I help you Nobita?"
        // hereIam()
        hereIamHelp()
    }

  

    if(message == "i want to fly into the sky can you help me"){
        ok()
        // playSoundTTreNe()
        const openCctre = () => window.open("https://doraemon.fandom.com/vi/wiki/Chong_ch%C3%B3ng_tre");
        setTimeout(()=>{
            playSoundTTreNe()
            openCctre()
        }, 3000)
    }

    

    if(message == "i'm hungry"){
        ok()
        // playSoundTTreNe()
        const openFood = () => window.open("https://www.foody.vn/ha-noi/com-ga-ba-than-dac-san-phu-yen-online");
        setTimeout(()=>{
            magicwand()
            openFood()
        }, 3000)
    }

    if(message == "wow that's cool"){
        peaceOfcake()
    }

    if(message == "can you help me do my homework"){
        // reply = "Here I am,  How can I help you Nobita?"
        noIcant()
    }

    if(message == "just one more time please"){
        // reply = "Here I am,  How can I help you Nobita?"
        noDiy()
    }

    if(message == "help me please"){
        // reply = "Here I am,  How can I help you Nobita?"
        noStop()
    }

    

    if(message == "i hate you" || message == "i hate you doraemon"){
        // reply = "I don't care Nobita. You're already an adult now. Take care of yourself. Stop whining "
        // container.classList.add("dark")
        // doraImage.classList.add("light")

        // realTalk()
        realTalk2()
        setTimeout(()=> {
            playMusic()
        },3000)
    }

    if(message == "what's up" || message == "what's up doraemon"){
        // reply = "I'm doing well. How you doing today"
        imdoingwell()
    }

    if(message == "i'm good" || message == "i'm doing great"){
        handsome()
    }

    
   

    if(message == "thank you"){
        // reply = "You're welcome"
        ywc()

    }

    if(message == "okay thank you" ){
        // container.classList.remove("dark")
        noProblem2()

    }

    if(message == "goodbye" || message == "goodbye doraemon"){
        // reply = "bye"
        // matane()
        // goodbye()
        goodbyeNobita()
        doraImage.classList.add("goodbye")

    


    }
    
    
    if(message== "open youtube"){
        // window.open("https://www.youtube.com");
        // reply = "Được! Chong chóng tre nè Nobita :)))"


       
        window.open("https://www.youtube.com");
        playSoundTTre()

    }

    if(message == "hello anyone here"){
        // setTimeout(()=>{
        //   yesOfcourse()

        // },1000)
        yesOfcourse()

        setTimeout(()=>{
            appear();
            doraImage.classList.remove("hidden");
            doraImage.classList.add("appear");
        }, 2000)
        setTimeout(()=>{
            hereIam()
        },6000)
    }

    console.log(reply)
    return reply
    
}


function botTalk(m){
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.text = m;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
}