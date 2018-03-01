var forma;
var soc;
var logo;
var toggle_state = true;
var day_night_state = true;
var timer_state = true;

function gautiDuomenis() {
    forma = document.getElementsByTagName("form")[0].innerHTML;
    soc = document.getElementsByClassName('socialiniai_puslapiai')[0].innerHTML;
    logo = document.getElementById('logo').src;
}

function atstatyti() {
    document.getElementsByTagName("form")[0].innerHTML = forma;
    document.getElementsByClassName('socialiniai_puslapiai')[0].innerHTML = soc;
    document.getElementById('logo').src = logo;
}

function salinti() {
    document.getElementsByTagName("form")[0].innerHTML = 'Forma';
    document.getElementsByClassName('socialiniai_puslapiai')[0].innerHTML = 'Socialianiai';
    document.getElementById('logo').src = '/img/profilis.jpg';
}

gautiDuomenis();

function toggleElements() {
    if (toggle_state){
        salinti();
    } else {
        atstatyti();
    }
    toggle_state = !toggle_state;
}

function toggleDayNight() {
    if (day_night_state){
        naktis();
    } else {
        diena();
    }
    day_night_state = !day_night_state;
}

function naktis() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function diena() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function toggleTimer() {
    if (timer_state){
        t = setInterval(toggleDayNight, 1000);
    } else {
        clearTimeout(t);
    }
    timer_state = !timer_state;
}



var objs = document.getElementsByClassName("puslapis");

for (var i = 0; i < objs.length; ++i) {
    item = objs[i];
    item.style.backgroundColor = "brown";
}