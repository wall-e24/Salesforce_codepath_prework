
// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables

var pattern = [0,0,0];

function reset_pattern(){
  for (let i=0;i<pattern.length;i++){
    pattern[i] = 1+ Math.floor(Math.random() * 6);
  }
}

var mistakes = 0
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0\
var guessCounter = 0;
var shotclock = 11900;

let timing = setTimeout(timeout, 12000)
let clock = setInterval(playertime, 100);



function startGame(){
    //initialize game variables
    var shotclock = 11900;
    progress = 0;
    gamePlaying = true;
    reset_pattern();
    mistakes = 0
  
    clearInterval(timing);
    clearInterval(clock);
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("timer").innerHTML = "Time Remaining: " + 12000;
    playClueSequence()
}


function stopGame(){
    //initialize game variables
    gamePlaying = false;

    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 700.6,
  2: 250.6,
  3: 362,
  4: 566.2,
  5: 630.8,
  6: 451.3
  
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}



function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime
  }
  
  setTimeout(ticking, delay);
  
  

}

function ticking(){
  shotclock = 11900;
  timing = setTimeout(timeout, 12000)
  clock = setInterval(playertime, 100);
}


function guess(btn){
  console.log("user guessed: " + btn);
  if (pattern[guessCounter] == btn){
    if (guessCounter == progress){
       canceltimeout();
      if (guessCounter == pattern.length - 1){
        winGame();
      }
      else{
        progress += 1;
        playClueSequence();
      }
    }
    else{
      guessCounter += 1;
    }
  }
  else{
    mistakes++;
    if (mistakes == 3){
      loseGame();
    }
  }
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats!! You have proven victorious against all odds!");
}


function timeout(){
  if(gamePlaying){
    alert("Gotta go fast buddy D:");
    loseGame();
  }
}

function canceltimeout(){
  clearInterval(timing);
  clearInterval(clock);
  document.getElementById("timer").innerHTML = "Time Remaining: " + 12000;
  console.log("here")
}

function playertime(){
  if(gamePlaying){
    document.getElementById("timer").classList.remove("hidden");
    shotclock -= 100
    document.getElementById("timer").innerHTML = "Time Remaining: " + shotclock;
  }
  else{
    document.getElementById("timer").classList.add("hidden");
  }
}