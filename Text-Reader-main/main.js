// Variable declaration
let button = document.querySelector("button");
let text = document.querySelector("textarea");

/* This code adds a click event listener to a button. When the button is clicked, 
it creates a new SpeechSynthesisUtterance object using the value of the 'text' input 
field. Then, it uses the speechSynthesis API to speak the text contained in the utterance object. */ 
button.addEventListener("click",()=> {
  let utterance = new
  SpeechSynthesisUtterance(text.value);
  speechSynthesis.speak(utterance);
})