var navbar = document.getElementById('navbar');
var login = document.getElementById('login');
var logo = document.getElementById('logo');
var sticky = navbar.offsetTop;
window.onscroll = ()=> {
    if(window.pageYOffset >= login.offsetHeight) {
        navbar.classList.add('sticky');
        logo.classList.add('logo');
        logo.src = './styles/smallLogo.png';
    } else {
        navbar.classList.remove('sticky');
        logo.src = './styles/Logo.png';
        logo.classList.remove('logo');
    }
}

var user_icon = document.getElementById('user_icon');
let myAccount_div = document.getElementById('myAccount')
user_icon.onmouseenter = ()=> {
    console.log('working');
    myAccount_div.style.display = 'block'
    user_icon.style.backgroundColor = 'green'
    user_icon.style.color = 'white'
}

user_icon.onmouseleave = ()=> {
    myAccount_div.style.display = 'none'
    user_icon.style.backgroundColor = 'white'
    user_icon.style.color = '#6d6b6b'
}

myAccount_div.onmouseenter = ()=> {
    myAccount_div.style.display = 'block'
}

myAccount_div.onmouseleave = ()=> {
    myAccount_div.style.display = 'none'
}