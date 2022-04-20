
window.addEventListener('load', function(){
    const play_btn1 = document.querySelector('#hosiinya');
    const play_btn2 = document.querySelector('#koukun');
    const play_btn3 = document.querySelector('#nemunemu');
    const play_btn4 = document.querySelector('#nepht');
    const play_btn5 = document.querySelector('#answer');
    const play_btn6 = document.querySelector('#pinpon');
    const play_btn7 = document.querySelector('#bubbu');

    var audio1 = new Audio("sound/hosiinya.wav");
    var audio2 = new Audio("sound/koukun.wav");
    var audio3 = new Audio("sound/nepht.wav");
    var audio4 = new Audio("sound/nemunemu.wav");
    var audio5 = new Audio("sound/Answer.mp3");
    var audio6 = new Audio("sound/pinpon.wav");
    var audio7 = new Audio("sound/bubbu.wav");

    //play event
    play_btn1.addEventListener( 'click', function() {
        var audio1 = new Audio("sound/hosiinya.wav");
        audio1.play();
    }, false );
    play_btn2.addEventListener( 'click', function() {
        var audio2 = new Audio("sound/koukun.wav");
        audio2.play();
    }, false );
    play_btn3.addEventListener( 'click', function() {
        var audio3 = new Audio("sound/nepht.wav");
        audio3.play();
    }, false );
    play_btn4.addEventListener( 'click', function() {
        var audio4 = new Audio("sound/nemunemu.wav");
        audio4.play();
    }, false );
    play_btn5.addEventListener( 'click', function() {
        var audio5 = new Audio("sound/Answer.mp3");
        audio5.play();
    }, false );
    play_btn6.addEventListener( 'click', function() {
        var audio6 = new Audio("sound/pinpon.wav");
        audio6.play();
    }, false );
    play_btn7.addEventListener( 'click', function() {
        var audio7 = new Audio("sound/bubbu.wav");
        audio7.play();
    }, false );
})
