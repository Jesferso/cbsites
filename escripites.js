let soundclick = document.getElementById("audio1");
let buttonsound = document.getElementById("button");
let otario = document.getElementById("otario");
async function click1(){
    otario.style.display ="block";
    console.log("test");
    soundclick.src="gatoxj.mp3";
    await soundclick.play();
    
}
