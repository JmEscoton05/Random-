function generate() {
  const messages = [
    //message 
    "kaya pa ba ang BSIT course?",
    "ano pinursue kana ba?",
    "nakakasabay pa ba?",
    "shift or tuloy?",
    "kaya mo ‘yan give up lang!",
    "wag palaging puyat, tandaan mo wala ka naman kausap!",
    "kaya mo pa ba?",
    "go lang, laban lang sis!",
    ];
    
    const messageElement = document.getElementById("message");
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    messageElement.textContent = messages[randomIndex];
}