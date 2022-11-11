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

// shopByCategory dropdown
let shopByCategory_btn = document.getElementById('shopByCategory_btn')
let shopByCategory_drpDwn = document.getElementById('shopByCategory_drpDwn')

shopByCategory_btn.onmouseenter = ()=> {
    shopByCategory_drpDwn.classList.add('shopByCategory_block')
    shopByCategory_drpDwn.style.display = 'grid';
}
shopByCategory_btn.onmouseleave = ()=> {
    shopByCategory_drpDwn.classList.remove('shopByCategory_block')
    shopByCategory_drpDwn.style.display = 'none';
}

shopByCategory_drpDwn.onmouseenter = ()=> {
    shopByCategory_drpDwn.classList.remove('shopByCategory_block')
    shopByCategory_drpDwn.style.display = 'grid';
}
shopByCategory_drpDwn.onmouseleave = ()=> {
    shopByCategory_drpDwn.style.display = 'none';
}