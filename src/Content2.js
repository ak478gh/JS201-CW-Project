
let arr=["https://www.bigbasket.com/media/uploads/banner_images/YXPL15307-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15303-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15295-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15291-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15264-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL16217-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15410-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15323-1200x300-25thoct.jpg"]

let container= document.getElementById("container")
console.log(container)

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
    let res= await fetch`http://localhost:3000/posts`

    let data = await res.json()
    final=data

    appendData(data)
}
getData()

// Popularity 
let Popularity= document.getElementById("Popularity")
Popularity.onclick=()=>{
    popularity()
}

// low to high button
let Low_to_High= document.getElementById("Low_to_High")
Low_to_High.onclick=()=>{
    sortLowToHigh()
}
// high to low button
let High_to_Low= document.getElementById("High_to_Low")
High_to_Low.onclick=()=>{
    sortHighToLow()
}

let Alphabetical=document.getElementById("Alphabetical")
Alphabetical.onclick=()=>{
    sortAlphabetical()
}

// Popularity functionality
const popularity=async()=>{
    let res= await fetch`http://localhost:3000/posts`

    let data = await res.json()

    appendData(data)
}

// Low_to_High functionality
const sortLowToHigh= async()=>{
    let res= await fetch`http://localhost:3000/posts?_sort=price&_order=asc`

    let data = await res.json()
    appendData(data)
    console.log(data)
}

// high to low functionality
const sortHighToLow=async()=>{
    let res= await fetch`http://localhost:3000/posts?_sort=price&_order=desc`

    let data = await res.json()
    appendData(data)
    console.log(data)
}

// sort by Alphabetical functionality

const sortAlphabetical=async ()=>{
    let res= await fetch`http://localhost:3000/posts?_sort=name&_order=asc`

    let data = await res.json()

    appendData(data)

}

// appending all the data

const appendData=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    data.forEach(function(el,i){
        
        if(el.catagory=="Bakery" || el.catagory=="Bread & Buns" || el.catagory=="Cakes & Pastries" || el.catagory=="Cookies,Rush & Khari"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image

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

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

// shop by categories button

let Bakery_And_Snacks= document.getElementById("Bakery_And_Snacks")
Bakery_And_Snacks.onclick=()=>{
    bakeryAndSnacks(final)
}

let Breads_Buns= document.getElementById("Breads_Buns")
Breads_Buns.onclick=()=>{
    breads_Buns(final)
}

let Cakes_Pastries= document.getElementById("Cakes_Pastries")
Cakes_Pastries.onclick=()=>{
    cakes_Pastries(final)
}

let Cookies_Rusk_Khari= document.getElementById("Cookies_Rusk_Khari")
Cookies_Rusk_Khari.onclick=()=>{
    cookies_Rusk_Khari(final)
}

let Dairy= document.getElementById("Dairy")
Dairy.onclick=()=>{
    dairy(final)
}



const bakeryAndSnacks=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Bakery"

    data.forEach(function(el){
        
        if(el.catagory=="Bakery"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image

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

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const breads_Buns=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Bread & Buns"

    data.forEach(function(el){
        
        if(el.catagory=="Bread & Buns"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image

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

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const cakes_Pastries=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Cakes & Pastries"

    data.forEach(function(el){
        
        if(el.catagory=="Cakes & Pastries"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image

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

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const cookies_Rusk_Khari=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Cookies,Rush & Khari"

    data.forEach(function(el){
        
        if(el.catagory=="Cookies,Rush & Khari"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image

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

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}

const dairy=(data)=>{
    let container=document.getElementById("Append_data")
    container.innerHTML=null

    let category_heading=document.getElementById("category_heading")
    category_heading.innerText="Dairy"

    data.forEach(function(el){
        
        if(el.catagory=="Dairy"){
            let Append_div= document.createElement("Append_div")
            Append_div.className="Append_div"

            let image= document.createElement("img")
            image.src= el.image

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

            Price.append(span2)
            standard_delevery.append(span1)
            Append_div.append(image,Veg_icon,brand,name,Price,standard_delevery,add_btn)
            container.append(Append_div)
        }
        
    })
}



import footer from "../components/footer.js"
 let footercontainer=document.getElementById("footer-container")
 footercontainer.innerHTML=footer()