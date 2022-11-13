var navbar = document.getElementById('navbar');
var login = document.getElementById('login');
var logo = document.getElementById('logo');
var shopByCategory = document.getElementById('shopByCategory');
var sticky = navbar.offsetTop;
window.onscroll = ()=> {
    if(window.pageYOffset >= login.offsetHeight) {
        navbar.classList.add('sticky');
        logo.classList.add('logo');
        // shopByCategory.style.margin = '200px';
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
    shopByCategory_drpDwn.style.gridTemplateColumns = 'repeat(5, 1fr)';
}
shopByCategory_btn.onmouseleave = ()=> {
    shopByCategory_drpDwn.classList.remove('shopByCategory_block')
    shopByCategory_drpDwn.style.display = 'none';
}

shopByCategory_drpDwn.onmouseenter = ()=> {
    // shopByCategory_drpDwn.classList.remove('shopByCategory_block')
    shopByCategory_drpDwn.style.display = 'grid';
    shopByCategory_drpDwn.style.gridTemplateColumns = 'repeat(5, 1fr)';
}
shopByCategory_drpDwn.onmouseleave = ()=> {
    shopByCategory_drpDwn.style.display = 'none';
}

// inner_links

let second = document.getElementById('second');
let third = document.getElementById('third');
let inner_link1 = document.getElementById('inner_link1');
second.onmouseenter = ()=>{
    inner_link1.style.display = 'grid'
}
second.onmouseleave = ()=>{
    inner_link1.style.display = 'none'
}
let inner_link2 = document.getElementById('inner_link2');
third.onmouseenter = ()=>{
    inner_link2.style.display = 'grid'
}
third.onmouseleave = ()=>{
    inner_link2.style.display = 'none'
}

let col2 = document.getElementById('col2')
col2.onmouseenter = ()=>{
    inner_link1.style.display = 'grid'
}
col2.onmouseleave = ()=>{
    inner_link1.style.display = 'none'
}

let col3 = document.getElementById('col3')
col3.onmouseenter = ()=>{
    inner_link2.style.display = 'grid'
}
col3.onmouseleave = ()=>{
    inner_link2.style.display = 'none'
}

// Login Popup
let logInBtn = document.getElementById('logInBtn')
let Login_container = document.getElementById('Login_container')
logInBtn.onclick = ()=> {
    console.log('logged in!');
    Login_container.style.display = 'flex'
}


let cartLength = document.getElementById('cartLength')
const cartLength2 = async ()=> {
    let res=await fetch(`https://bigbasket-kb7a.onrender.com/carts`)
    let data=await res.json()
    // console.log(data.length)
    cartLength.innerText = data.length;
}

cartLength2();



let userNaam = JSON.parse(localStorage.getItem('login_detail'))
console.log(userNaam)

let userName = document.getElementById('userName');
userName.innerText = userNaam.name
console.log(userName.innerText);

let logOutBtn = document.getElementById('logOutBtn')
logOutBtn.onclick =()=> {
    localStorage.clear();
    window.location.reload();
}