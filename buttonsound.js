const se1 = new Audio('sound/hosiinya.wav');


[...document.getElementsByClassName('btnripple')].forEach(bt=>{
    bt.addEventListener('mousedown',()=>{
        se1.pause();
        se1.currentTime = 0;
        se1.play();
    });
});
