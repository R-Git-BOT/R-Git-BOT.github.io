const se1 = new Audio('https://github.com/R-Git-BOT/R-Git-BOT.github.io/blob/main/sound/telelen.mp3');


[...document.getElementsByClassName('btnripple')].forEach(bt=>{
    bt.addEventListener('mousedown',()=>{
        se1.pause();
        se1.currentTime = 0;
        se1.play();
    });
});
