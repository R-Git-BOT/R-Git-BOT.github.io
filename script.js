
window.addEventListener('load', function(){
    const play_btn1 = document.querySelector('#hosiinya');
    const play_btn2 = document.querySelector('#koukun');
    const play_btn3 = document.querySelector('#nemunemu');
    const play_btn4 = document.querySelector('#nepht');
    const play_btn5 = document.querySelector('#answer');
    const play_btn6 = document.querySelector('#pinpon');
    const play_btn7 = document.querySelector('#bubbu');
    //play event
    play_btn1.addEventListener( 'click', function() {
        var audio = new Audio("sound/hosiinya.wav");
        audio.play();
    }, false );
    play_btn2.addEventListener( 'click', function() {
        var audio = new Audio("sound/koukun.wav");
        audio.play();
    }, false );
    play_btn3.addEventListener( 'click', function() {
        var audio = new Audio("sound/nepht.wav");
        audio.play();
    }, false );
    play_btn4.addEventListener( 'click', function() {
        var audio = new Audio("sound/nemunemu.wav");
        audio.play();
    }, false );
    play_btn5.addEventListener( 'click', function() {
        var audio = new Audio("sound/Answer.mp3");
        audio.play();
    }, false );
    play_btn6.addEventListener( 'click', function() {
        var audio = new Audio("sound/pinpon.wav");
        audio.play();
    }, false );
    play_btn7.addEventListener( 'click', function() {
        var audio = new Audio("sound/bubbu.wav");
        audio.play();
    }, false );
})
