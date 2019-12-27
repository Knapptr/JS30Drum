window.addEventListener("keydown", (e)=>{
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(audio===null){return;};
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
})
const keys = document.querySelectorAll(".key")
keys.forEach(key=>{
    key.addEventListener('transitionend',function(){
        key.classList.remove('playing');
    })
})