class User{
    constructor(){
    }
    validUsername(username){
        return username.includes('@') ? false:true
    }
    validPassword(password){
        return password.length<8 ? false:true
    }
    async signUp(n,e,u,p){
        let isvalidated=this.validUsername(u)&&this.validPassword(p)
        if(isvalidated){
            this.name=n,
            this.email=e,
            this.username=u,
            this.password=p
            // this.mobile=m,
            // this.description=d
        }
        const register_api=`https://masai-api-mocker.herokuapp.com/auth/register`
        let res=await fetch(register_api,{
            method:'POST',
            body:JSON.stringify(this),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await res.json()
        console.log('signUp data: ',data)
    }
    async login(u,p){
        const login_data={
            username:u,
            password:p
        }
         const login_api=`https://masai-api-mocker.herokuapp.com/auth/login`
         let res=await fetch(login_api,{
            method:'POST',
            body:JSON.stringify(this),
            headers:{
             'Content-Type':'application/json'
            }
         })
         const data=await res.json()
         console.log('Login error: ',data)
         return data
    }
}
let user=new User()
const Register=()=>{
   let form=document.getElementById("reg_form")
   let name=form.name.value
   let email=form.email.value
   let username=form.username.value
   let password=form.password.value
//    let mobile=form.mobile.value
//    let description=form.description.value
   user.signUp(name,email,username,password)
   console.log(user)
console.log(name,email,username,password)
}
const Login=async()=>{
  const username=document.getElementById("login_username").value
  const password=document.getElementById("login_password").value

 let {token}= await user.login(username,password)
  getprofile(username,token)
}
const getprofile=async(username,token)=>{
    const api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`
    let res=await fetch(api_link,{
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    let data=await res.json()
    console.log(data)
    // let x=data.username
    // let y=x[0].toUpperCase()
    // console.log(y)
    // localStorage.setItem("firstletter",JSON.stringify(y))
    // window.location.href="index.html"
}

let Register_btn = document.getElementById('Register_btn')
Register_btn.onclick = ()=> {
    Register();

}

// On clicking Login Button
let Login_btn = document.getElementById('Login_btn')
Login_btn.onclick = ()=> {
    Login();
    setTimeout(changeUsername, 4000)
}