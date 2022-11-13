import footer from "../components/footer.js"
const checkoutheader=async()=>{
    let res=await fetch(`https://bigbasket-kb7a.onrender.com/carts`)
    let data=await res.json()
    console.log(data)
    let div=document.getElementById('checkout-header')
    div.innerText=`Your Basket (${data.length}) items`
 }
 checkoutheader()

 const checkoutdata=async()=>{
    let res=await fetch(`https://bigbasket-kb7a.onrender.com/carts`)
    let data=await res.json()
    console.log(data)
    checckoutappend(data)
 }
 checkoutdata()
 const checckoutappend=(data)=>{
   data.forEach((el)=>{
      let div=document.createElement("div")
        div.setAttribute("id","main-div")
        let leftdiv=document.createElement("div")
        leftdiv.setAttribute("id","leftdiv")
        let rightdiv=document.createElement("div")
        rightdiv.setAttribute("id","rightdiv")
        let name=document.createElement("h3")
        name.innerText=el.name
        let price=document.createElement("p")
        price.innerText=el.price
        let buttondiv=document.createElement("div")
        buttondiv.setAttribute("id","buttondiv")
        let subbutton=document.createElement("button")
        subbutton.innerText="-"
        subbutton.onclick=()=>{
         subproduct(el)
        }
        let midbutton=document.createElement('button')
      midbutton.setAttribute("id","midbutton")
      midbutton.innerText=el.count
        let addbutton=document.createElement("button")
        addbutton.innerText="+"
        addbutton.onclick=()=>{
         addproduct(el)
        }
        buttondiv.append(subbutton,midbutton,addbutton)
        let subtotal=document.createElement('p')
        subtotal.innerText=Math.ceil(el.subtotal)
        let remove=document.createElement("p")
        remove.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
        remove.setAttribute("id","delete")
        remove.onclick=()=>{
          deletefunc(el)
        }
        leftdiv.append(name)
        rightdiv.append(price,buttondiv,subtotal)
        div.append(leftdiv,rightdiv,remove)
        document.getElementById("description-container").append(div)
   })
 }

 const subtotalprice=async()=>{
    let res=await fetch(`https://bigbasket-kb7a.onrender.com/carts`)
    let data=await res.json()
    console.log(data)
   let totalprice=data.reduce((acc,el)=>{
    return acc+Math.ceil(el.subtotal)
   },0)
   let discountprice=Math.ceil(totalprice*0.10)
   let subtotal=document.getElementById("subtotal-price")
   subtotal.innerText=`Rs ${totalprice}`
   let Totalprice=document.getElementById("total-price")
   Totalprice.innerText=`Rs ${totalprice}`
   let discount=document.getElementById("discounted-price")
   discount.innerText=`* For this order: Accepted food coupon is Rs. ${discountprice}`
 }
 subtotalprice()

 

 const subproduct=async(el)=>{
   let getid=el.id
   let resdata=await fetch(`https://bigbasket-kb7a.onrender.com/carts/${getid}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    let getdata=await resdata.json()
    console.log(getdata.subtotal)
    if(getdata.subtotal>el.price&&getdata.count>=1){
      let send_data={
   
         subtotal:getdata.subtotal-el.price,
         count:getdata.count-1
       }
       let id=el.id
       console.log(send_data)
       let res=await fetch(`https://bigbasket-kb7a.onrender.com/carts/${id}`,{
              method:'PATCH',
              body:JSON.stringify(send_data),
              headers:{
                  'Content-Type':'application/json'
              }
          })
          let data=await res.json()
          console.log(data)
    }
    window.location.reload();
 }
 let arr=[]
 const addproduct=async(el)=>{
   let getid=el.id
   let resdata=await fetch(`https://bigbasket-kb7a.onrender.com/carts/${getid}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    let getdata=await resdata.json()
    console.log(getdata.subtotal)
 let send_data={
   
   subtotal:getdata.subtotal+el.price,
   count:getdata.count+1
 }
 let id=el.id
 console.log(send_data)
 let res=await fetch(`https://bigbasket-kb7a.onrender.com/carts/${id}`,{
        method:'PATCH',
        body:JSON.stringify(send_data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data=await res.json()
    console.log(data)
    
    window.location.reload();
 }
 console.log(arr)

 const shopping=document.getElementById("shopping-button")
 shopping.onclick=()=>{
   shoppingfunc()
 }
 const shoppingfunc=()=>{
   window.location.href="index.html"
 }
 
 const checkoutbuttton=document.getElementById("checkout-button")
 checkoutbuttton.onclick=()=>{
  checkout()
 }
 const checkout=()=>{
  alert("Your order has been placed successfully ")
  window.location.href="index.html"
 }
  
 const deletefunc=async(el)=>{
   let id=el.id
   let res=await fetch(`https://bigbasket-kb7a.onrender.com/carts/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data=await res.json()
    console.log(data)
    window.location.reload();
 }

 const footer_div=document.getElementById("footer_div")
 footer_div.innerHTML=footer()