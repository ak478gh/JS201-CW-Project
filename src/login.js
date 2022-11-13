let register_form = document.getElementById('register_form');
Register_btn.onclick = ()=> {
    let reg_form = document.getElementById('reg_form');

    const name = reg_form.name.value;
    const email = reg_form.email.value;
    const username = reg_form.username.value;

    const password = reg_form.password.value;


    let login_details = {
        name,
        email,
        username,
        password
    }

    console.log(login_details);

    localStorage.setItem('login_detail', JSON.stringify(login_details))

}

let userName = document.getElementById('myAccount')
console.log(userName)


Login_btn.onclick = ()=> {

    const username = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;

    let credentials = JSON.parse(localStorage.getItem('login_detail'));

    // console.log(credentials.username)

    if(username == credentials.username && password == credentials.password) {
        alert('Login Successful!');
        window.location.reload();
        Login_container.style.display = 'none';
        // let userNaam = JSON.parse(localStorage.getItem('login_detail'))
        console.log(userNaam);
    } else {
        let warning = document.createElement('h4');
        warning.innerText = 'Credentials Does not match';
        register_form.append(warning);
    }
    console.log(userName);
}
