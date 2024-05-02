// Creates object to store drum beats.

let keys = document.querySelectorAll(".key");

let audio = document.querySelectorAll("audio");

for(let i = 0; i < keys.length; i++){
keys[i].addEventListener("mousedown", () => playDrum(i));
keys[i].addEventListener("mousedown", () => highlight(i));
keys[i].addEventListener("mouseup", () => unhighlight(i));
// Will come back to this as I'm not sure exactly how it works.
}

function playDrum(i){
let audio = new Audio(audio[i]);
audio.play();
};

function highlight(i){
keys[i].classList.add("playing"); // add a class
}

function unhighlight(i){
keys[i].classList.remove("playing"); // remove a class
}
