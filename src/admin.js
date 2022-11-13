const addbtn=document.getElementById("addproductbtn")
addbtn.onclick=()=>{
  addproductfun()
}

const addproductfun=async()=>{
    let name=document.getElementById("product-name").value
    let price=document.getElementById("product-price").value
    let categories=document.getElementById("product-categories").value
    let image=document.getElementById("product-image").value
    let delivery=document.getElementById("delivery-date").value
    
    let send_data={
        name:name,
        price:price,
        delivery:delivery,
        imgage:image,
        categories:categories,
       
    }
    console.log(send_data)
    
    
    let resdata=await fetch(`https://bigbasket-kb7a.onrender.com/admin-product
    `,{
     method:'POST',
     body:JSON.stringify(send_data),
     headers:{
        'Content-Type':'application/json'
     }
    });
    window.location.reload();

}

 const checkoutdata=async()=>{
    let res=await fetch(`https://bigbasket-kb7a.onrender.com/admin-product`)
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
         let type=document.createElement("p")
         type.innerText=el.categories
         
         let status=document.createElement("p")
         status.innerText="Published"
         let updateprice=document.createElement("button")
         updateprice.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`+"price"
         updateprice.onclick=()=>{
           updatepricefun(el)
         }
         updateprice.setAttribute("id","updateprice")
        let confirm=document.createElement("button")
        confirm.innerText="Confirm"
        confirm.setAttribute("id","confirm")
        confirm.onclick=()=>{
            confirmfun(el)
        }
        
         let remove=document.createElement("p")
         remove.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
         remove.setAttribute("id","delete")
         remove.onclick=()=>{
           deletefunc(el)
         }
         leftdiv.append(name)
         rightdiv.append(price,type,status,updateprice,remove,confirm)
         div.append(leftdiv,rightdiv)
         document.getElementById("addproduct-container").append(div)
    })
  }

  const deletefunc = async (el)=> {
   let deleteid=el.id
    let resdelete=await fetch(`https://bigbasket-kb7a.onrender.com/admin-product/${deleteid}
    `,{
     method:'DELETE',
     headers:{
        'Content-Type':'application/json'
     }
    })
    window.location.reload();
  } 

  const confirmfun=async(el)=>{
    let res=await fetch(`https://bigbasket-kb7a.onrender.com/products`)
    let data=await res.json()
    let id=data.length
    console.log(id)
    let send_data={
        id:id,
        name:el.name,
        price:el.price,
        delivery:el.delivery,
        imgage:el.image,
        categories:el.categories,
       
    }
    // console.log(send_data)
    
    
    let resdata=await fetch(`https://bigbasket-kb7a.onrender.com/products
    `,{
     method:'POST',
     body:JSON.stringify(send_data),
     headers:{
        'Content-Type':'application/json'
     }
    })
    let deleteid=el.id
    let resdelete=await fetch(`https://bigbasket-kb7a.onrender.com/admin-product/${deleteid}
    `,{
     method:'DELETE',
     headers:{
        'Content-Type':'application/json'
     }
    })
    window.location.reload();
  }
  const updatepricefun=async(el)=>{
    let id=el.id
    let updetedprice=prompt("Please enter new price here")
    let send_data={
        price:updetedprice
    }
    let res=await fetch(`https://bigbasket-kb7a.onrender.com/admin-product/${id}`,{
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