class User {
    constructor() {

    }

    validateUsername(username) {
        // if username include '@'
        return username.include('@') ? false : true;
    }
    validatePassword(password) {
        // if username include '@'
        return password.length<8 ? false : true;
    }

    // SignUp method
    async signUp(n, e, u, p) {
        // check if user is submitting valid username & password
        let isValidate = this.validatePassword && this.validateUsername;
        
        if(isValidate) {
            // good to store the data
            this.name = n;
            this.email = e;

            this.username = u;
            this.password = p;
            // this.mobile = m;
            // this.description = d;

            const register_api = 'https://masai-api-mocker.herokuapp.com/auth/register';

            const res = await fetch(register_api, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-Type':'application/json'
                }
            });

            const data = await res.json();
            console.log('signUp data: ', data);
        }
    }

    // Login method
    async Login(u, p) {

        const login_data = {
            username : u,
            password : p
        };

        const login_api = 'https://masai-api-mocker.herokuapp.com/auth/login';

        const res = fetch(login_api, {
            method:'POST',
            body:JSON.stringify(login_data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await (await res).json();
        // console.log('data: ', data);
        return data;
    }
};

// Creating a User
let user = new User();
// trying to register
const Register = ()=> {
    // accessing the data from the form
    let reg_form = document.getElementById('reg_form');

    const name = reg_form.name.value;
    const email = reg_form.email.value;
    const username = reg_form.username.value;

    const password = reg_form.password.value;
    // const mobile = reg_form.mobile.value;
    // const description = reg_form.description.value;

    // calling the signUp function with the data
    user.signUp(name, email, username, password);
    console.log('user: ', user);

};

// trying to login
const Login = async ()=> {

    // accessing the data from the form
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // calling the login funciton with the data and getting the token out of it
    let {token} = await user.Login(username, password);

    getProfile(username, token);
};

// to get the profile details of the user
const getProfile = async (username, token) => {

    let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let res = await fetch(api_link, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json'
        }
    });

    let data = await res.json();
    console.log('data: ', data);

}