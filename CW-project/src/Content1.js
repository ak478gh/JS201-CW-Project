let arr=["https://www.bigbasket.com/media/uploads/banner_images/YXPL15505-1200x300-25thoct.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP6728-1200X300-19thOCT22.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP6710-1200X300-14thOCT22.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/YXPL15505-1200x300-25thoct.jpg"]

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