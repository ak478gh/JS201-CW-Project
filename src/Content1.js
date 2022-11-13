
// slider pages
let arr=["https://www.bigbasket.com/media/uploads/banner_images/YXPL15505-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP6728-1200X300-19thOCT22.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP6710-1200X300-14thOCT22.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15505-1200x300-25thoct.jpg"]

let container= document.getElementById("container")

function movie(){
    let elem= document.createElement("img")
    elem.style.width="100%"
    elem.style.marginTop="20px"

    container.append(elem)
    let i=1
    elem.src=arr[0]
    // console.log(i)    
    setInterval(function (){
        if(i===arr.length){
        i=0
        }
        elem.src=arr[i]
        i++
    },3000)

    
}
movie()

// fetching all the data from db.json
let final;
const getData= async()=>{
    let res= await fetch(`https://bigbasket-kb7a.onrender.com/products`)

    let data = await res.json()
    final=data
    appendData(data)
}
getData()

let sort = document.getElementById('Popular_sort')
sort.addEventListener('change', sortCategory);

function sortCategory() {
    if(sort.value=='Popularity') {
        popularity();
    } else if(sort.value=='Low_to_High') {
        sortLowToHigh();
    } else if(sort.value=='High_to_Low') {
        sortHighToLow();
    } else if(sort.value=='Alphabetical') {
        sortAlphabetical();
    }
}



// Popularity functionality
const popularity=async()=>{
    let res= await fetch(`https://bigbasket-kb7a.onrender.com/products`)

    let data = await res.json()

    appendData(data)
}

// Low_to_High functionality
const sortLowToHigh= async()=>{
    let res= await fetch(`https://bigbasket-kb7a.onrender.com/products?_sort=price&_order=asc`)

    let data = await res.json()
    appendData(data)
    // console.log(data)
}

// high to low functionality
const sortHighToLow=async()=>{
    let res= await fetch(`https://bigbasket-kb7a.onrender.com/products?_sort=price&_order=desc`)

    let data = await res.json()
    appendData(data)
    // console.log(data)
}

// sort by Alphabetical functionality

const sortAlphabetical=async ()=>{
    let res= await fetch(`https://bigbasket-kb7a.onrender.com/products?_sort=name&_order=asc`)

    let data = await res.json()

    appendData(data)

}

// appending all the data

const appendData=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    data.forEach(function(el){
        
        if(el.catagory=="Fruits" || el.catagory=="vegetable"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image
            image.onclick = () =>{
                selectedProduct(el)
            }

            let Veg_icon= document.createElement("img")
            Veg_icon.className="Veg_icon"
            Veg_icon.src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"

            let brand= document.createElement("p")
            brand.innerText= "fresho"

            let name= document.createElement("p")
            name.innerText= el.name

            let Price= document.createElement("p")
            Price.innerText= "Price RS:"
            let span2= document.createElement("span")
            span2.innerText= el.price

            let standard_delevery= document.createElement("p")
            standard_delevery.innerText= "Standard "
            let span1=document.createElement("span")
            span1.innerText= el.delivery

            let add_btn= document.createElement("button")
            add_btn.innerText= "Add"
            add_btn.id= "add_button"
            add_btn.onclick=()=>{
                addtocart(el)
            }

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

// shop by categories button

let Cuts_and_sprouts= document.getElementById("Cuts_and_sprouts")
Cuts_and_sprouts.onclick=()=>{
    cutsandSprouts(final)
}

let Exotic_fruits= document.getElementById("Exotic_fruits")
Exotic_fruits.onclick=()=>{
    exoticFruits(final)
}

let Flower_bouquets= document.getElementById("Flower_bouquets")
Flower_bouquets.onclick=()=>{
    flowerBouquets(final)
}

let fresh_Vegetable= document.getElementById("fresh_Vegetable")
fresh_Vegetable.onclick=()=>{
    freshVegetable(final)
}

let Herbs_Seasoning= document.getElementById("Herbs_Seasoning")
Herbs_Seasoning.onclick=()=>{
    herbsSeasoning(final)
}

// append all the categories data

const cutsandSprouts=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Cuts & Sprouts"

    data.forEach(function(el){
        
        if(el.catagory=="Cuts & Sprouts"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image
            image.onclick = () =>
            {
                selectedProduct(el)
            }

            let Veg_icon= document.createElement("img")
            Veg_icon.className="Veg_icon"
            Veg_icon.src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"

            let brand= document.createElement("p")
            brand.innerText= "fresho"

            let name= document.createElement("p")
            name.innerText= el.name

            let Price= document.createElement("p")
            Price.innerText= "Price RS:"
            let span2= document.createElement("span")
            span2.innerText= el.price

            let standard_delevery= document.createElement("p")
            standard_delevery.innerText= "Standard "
            let span1=document.createElement("span")
            span1.innerText= el.delivery

            let add_btn= document.createElement("button")
            add_btn.innerText= "Add"
            add_btn.id= "add_button"
            add_btn.onclick=()=>{
                addtocart(el)
            }

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const exoticFruits=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Exotic Fruits"

    data.forEach(function(el){
        
        if(el.catagory=="Exotic Fruits"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image
            image.onclick = () =>{
                selectedProduct(el)
            }

            let Veg_icon= document.createElement("img")
            Veg_icon.className="Veg_icon"
            Veg_icon.src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"

            let brand= document.createElement("p")
            brand.innerText= "fresho"

            let name= document.createElement("p")
            name.innerText= el.name

            let Price= document.createElement("p")
            Price.innerText= "Price RS:"
            let span2= document.createElement("span")
            span2.innerText= el.price

            let standard_delevery= document.createElement("p")
            standard_delevery.innerText= "Standard "
            let span1=document.createElement("span")
            span1.innerText= el.delivery

            let add_btn= document.createElement("button")
            add_btn.innerText= "Add"
            add_btn.id= "add_button"
            add_btn.onclick=()=>{
                addtocart(el)
            }

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const flowerBouquets=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Flower Bouquets"

    data.forEach(function(el){
        
        if(el.catagory=="Flower Bouquets"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image
            image.onclick = () =>{
                selectedProduct(el)
            }

            let Veg_icon= document.createElement("img")
            Veg_icon.className="Veg_icon"
            Veg_icon.src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"

            let brand= document.createElement("p")
            brand.innerText= "fresho"

            let name= document.createElement("p")
            name.innerText= el.name

            let Price= document.createElement("p")
            Price.innerText= "Price RS:"
            let span2= document.createElement("span")
            span2.innerText= el.price

            let standard_delevery= document.createElement("p")
            standard_delevery.innerText= "Standard "
            let span1=document.createElement("span")
            span1.innerText= el.delivery

            let add_btn= document.createElement("button")
            add_btn.innerText= "Add"
            add_btn.id= "add_button"
            add_btn.onclick=()=>{
                addtocart(el)
            }

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const freshVegetable=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Fresh Vegetables"

    data.forEach(function(el){
        
        if(el.catagory=="Fresh Vegetables"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image
            image.onclick = () =>{
                selectedProduct(el)
            }

            let Veg_icon= document.createElement("img")
            Veg_icon.className="Veg_icon"
            Veg_icon.src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"

            let brand= document.createElement("p")
            brand.innerText= "fresho"

            let name= document.createElement("p")
            name.innerText= el.name

            let Price= document.createElement("p")
            Price.innerText= "Price RS:"
            let span2= document.createElement("span")
            span2.innerText= el.price

            let standard_delevery= document.createElement("p")
            standard_delevery.innerText= "Standard "
            let span1=document.createElement("span")
            span1.innerText= el.delivery

            let add_btn= document.createElement("button")
            add_btn.innerText= "Add"
            add_btn.id= "add_button"
            add_btn.onclick=()=>{
                addtocart(el)
            }

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const herbsSeasoning=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Herbs & Seasonings"

    data.forEach(function(el){
        
        if(el.catagory=="Herbs & Seasonings"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image
            image.onclick = () =>{
                selectedProduct(el)
            }


            let Veg_icon= document.createElement("img")
            Veg_icon.className="Veg_icon"
            Veg_icon.src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"

            let brand= document.createElement("p")
            brand.innerText= "fresho"

            let name= document.createElement("p")
            name.innerText= el.name

            let Price= document.createElement("p")
            Price.innerText= "Price RS:"
            let span2= document.createElement("span")
            span2.innerText= el.price

            let standard_delevery= document.createElement("p")
            standard_delevery.innerText= "Standard "
            let span1=document.createElement("span")
            span1.innerText= el.delivery

            let add_btn= document.createElement("button")
            add_btn.innerText= "Add"
            add_btn.id= "add_button"
            add_btn.onclick=()=>{
                addtocart(el)
            }

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}


// selectedProduct

const selectedProduct = async (ele) =>
{
  let resp = await fetch('https://bigbasket-kb7a.onrender.com/selectedProduct');
  let datap = await resp.json();
  let presentId;
  datap.forEach((elem) => {
    presentId = elem.id;
  });
  // console.log(presentData);
  
 // let selectedData = getSelectedData();

 // console.log("Product",selectedData)
  // console.log(ele)
  // console.log(ele.id)
  let id = ele.id;
  let name = ele.name;
  let price = ele.price;
  let packsize = ele.packsize;
  let description = ele.description;
  let delivery = ele.delivery;
  let image = ele.image;
  let catagory = ele.catagory;
  console.log(ele.id+"----------"+id)
  let send_data = {
    id:id,
    name,
    price,
    packsize,
    description,
    delivery,
    image,
    catagory,
    nid:ele.id
    };
console.log("--------------------------"+id)
  let res = await fetch(`https://bigbasket-kb7a.onrender.com/selectedProduct/${presentId}`, {
    method: 'PATCH',
    body: JSON.stringify(send_data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
    console.log("Product Page")
  window.location.href = 'product_page.html';
  let data = await res.json();
    console.log(data);
    
  
};

// console.log(final)

// add to cart functionality

const addtocart = async (elem) => {
    let id, name, price, packsize, description, delivery, image,subtotal,count;
    
      id = elem.id;
      name = elem.name;
      price = elem.price;
      packsize = elem.packsize;
      description = elem.description;
      delivery = elem.delivery;
      image = elem.image;
      subtotal= elem.price
      count=1
  
    let send_data = {
      id,
      name,
      price,
      packsize,
      description,
      delivery,
      image,
      subtotal,
      count
    };
  
    let res = await fetch('https://bigbasket-kb7a.onrender.com/carts', {
      method: 'POST',
      body: JSON.stringify(send_data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  };

  //   less than rs 20
let less_than20= document.getElementById("less_than20")
less_than20.onclick=()=>{
    less20(final)
}

const less20=(res)=>{
    let sorted=[]
    for(let i=0;i<res.length;i++){
        if(20>=res[i].price){
            sorted.push(res[i])
        }
    }

    appendData(sorted)
    console.log(sorted)
}

//   less than rs 50
let less_than50= document.getElementById("less_than50")
less_than50.onclick=()=>{
    less50(final)
}

const less50=(res)=>{
    let sorted=[]
    for(let i=0;i<res.length;i++){
        if(20<res[i].price && 50>=res[i].price){
            sorted.push(res[i])
        }
    }

    appendData(sorted)
    console.log(sorted)
}

//   less than rs 100
let less_than100= document.getElementById("less_than100")
less_than100.onclick=()=>{
    less100(final)
}

const less100=(res)=>{
    let sorted=[]
    for(let i=0;i<res.length;i++){
        if(50<res[i].price && 100>=res[i].price){
            sorted.push(res[i])
        }
    }

    appendData(sorted)
    console.log(sorted)
}

//   less than rs 200
let less_than200= document.getElementById("less_than200")
less_than200.onclick=()=>{
    less200(final)
}

const less200=(res)=>{
    let sorted=[]
    for(let i=0;i<res.length;i++){
        if(100<res[i].price && 200>=res[i].price){
            sorted.push(res[i])
        }
    }

    appendData(sorted)
    console.log(sorted)
}

//   less than rs 501
let less_than501= document.getElementById("less_than501")
less_than501.onclick=()=>{
    less501(final)
}

const less501=(res)=>{
    let sorted=[]
    for(let i=0;i<res.length;i++){
        if(200<res[i].price){
            sorted.push(res[i])
        }
    }

    appendData(sorted)
    console.log(sorted)
}


// importing the navbar
import navbar from '../components/export.js'

let navbar_div = document.getElementById('navbar_div')
navbar_div.innerHTML = navbar();

//  importing Footer
import footer from "../components/footer.js"
 let footercontainer=document.getElementById("footer-container")
 footercontainer.innerHTML=footer()
