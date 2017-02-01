/**
 * Created by Deff on 01.02.2017.
 */
function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

window.onload = function () {

    var elem = document.getElementById('scroll');
    elem.addEventListener( "click" , function() {
        var elmnt = document.getElementById("one");
        scrollTo(document.body, elmnt.offsetTop, 600);
    });

}