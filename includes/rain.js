var newSpin = 0;
var abort = "";
var spinRunning = false;

$("#men").click(function () {

    var winHeight = $(window).height();
    var randLocation = Math.floor(Math.random() * ($(window).width()+50) - 25);
    var deadMan = $("<img src='includes/fallingman.png' class='fallingman'>").appendTo('body');

    deadMan.css("left", randLocation + "px");
    makeItRain(deadMan, deadMan.position().left);
}
);

$("#tilt").click(function () {
    
    spinRunning = true;

    abort = setInterval("rotateAll()", 7);
});

$("#abort").click(function () {


    if (spinRunning) {
        clearInterval(abort);
        $("#abort").text("Fix page!");
        spinRunning = false;

    } else {
        $("#allPage").css({
            "-webkit-transform": "rotate(0deg)",
            "-ms-transform": "rotate(0deg)",
            "-moz-transform": "rotate(0deg)",
            "transform": "rotate(0deg)",
        });
        newSpin = 0;
    }
});

function rotateAll() {

    $("#abort").text("OMG MAKE IT STOP!");

    $("#allPage").css({
        "-webkit-transform": "rotate(" + newSpin + "deg)",
        "-ms-transform": "rotate(" + newSpin + "deg)",
        "-moz-transform": "rotate(" + newSpin + "deg)",
        "transform": "rotate(" + newSpin + "deg)",
    });
    newSpin = newSpin + 1;
}




function makeItRain(dude, xPos) {

    var timeDrop = Math.floor(Math.random() * 3000) + 1000;
    var randY = Math.floor(Math.random() * $("#ground").height()) - .5 * ($("#ground").height());
    var randFireTime = Math.floor(Math.random() * 4000) + 2000;
    dude.animate({
        top: $("#ground").position().top + randY + 15,
    }, timeDrop, "linear", function () {
            dude.remove();

    var ragingFire = $("<img src='includes/fire.gif' class='fire'>").appendTo('body');
    ragingFire.css("left", xPos +"px");
    ragingFire.css("top", $("#ground").position().top + randY + "px");
    ragingFire.fadeOut(randFireTime);

    });


}