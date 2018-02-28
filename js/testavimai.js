var forma;
var soc;
var logo;
var toggle_state = true;

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



document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
document.getElementsByTagName('body')[0].style.color = 'white';