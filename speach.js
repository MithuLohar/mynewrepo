//call window object speech recognition...
window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

// var p=document.createElement('p');

// var words=document.getElementById("word");

// words.appendChild(p);
// console.log(words);

recognition.addEventListener("result",e=>{
    console.log(e.results);
    var transscript=[...e.results]
    .map(result=>result[0])
    .map (result=> result.transcript)
    .join("");
    if (e.results[0].isFinal) {
        p=document.createElement("p");
        words.appendChild(p);
        p.innerHTML=transscript;
    }
 

});//DOM methid
// recognition.addEventListener('end',recognition.start)
recognition.start();//starting speech recognition...

