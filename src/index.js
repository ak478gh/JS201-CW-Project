// importing footer
import footer from "../components/footer.js"

// importing navbar
import navbar from "../components/export.js"

let navbar_div = document.getElementById('navbar_div')
navbar_div.innerHTML = navbar();

let slideshowarr=["https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-081122.png",
"https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-221107.png"
]

const slideshow=()=>{
    let img=document.createElement("img")
    let i=1
    img.src=slideshowarr[0]
    setInterval(()=>{
    if(i==slideshowarr.length){
        i=0
        
    }
   
    img.src=slideshowarr[i]
    i++
    },3000)
    document.getElementById("slideshow").append(img)
}
slideshow()



const landingpageproduct=[
    {image:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",brand:"Fresho",
    productname:"Capsicum - Green (Loose)",
    price:41,},
    {image:"https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",brand:"Fresho",
    productname:"Carrot - Orange (Loose)",
    price:36,},
    {image:"https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",brand:"Fresho",
    productname:"Coriander Leaves",
    price:41,},
    {image:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",brand:"Fresho",
    productname:"Capsicum - Green (Loose)",
    price:41,},
    {image:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",brand:"Fresho",
    productname:"Capsicum - Green (Loose)",
    price:41,},
]

const fruitsarr=[{image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_organic-fnv_Storefront_m_251022_01.jpg",
},
{image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_fresh-fruits-fnv_Storefront_m_251022_02.jpg",
},
{image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_organic-fnv_Storefront_m_251022_01.jpg",
},
{image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_organic-fnv_Storefront_m_251022_01.jpg",
},
{image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_exotic-fnv_Storefront_m_251022_05.jpg",
},
{image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_organic-fnv_Storefront_m_251022_01.jpg",
},
]

const append=(data)=>{
   data.forEach((el)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image
   
    div.append(img)
    document.getElementById("fruits-container").append(div)
   })
}
append(fruitsarr)

const staplearr=[
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_atta-flour-staplesStorefront_m_480_251022_01.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_rice-staplesStorefront_m_480_251022_02.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_dals-pulses-staplesStorefront_m_480_251022_03.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_cooking-oil-staplesStorefront_m_480_251022_04.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_dry-fruits-staplesStorefront_m_480_251022_05.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/fdc267dd-d968-4b49-933f-9f007b7aab7d/hp_salt-sugar-staplesStorefront_m_480_251022_06.jpg"},
]
const stapleappend=(data)=>{
    data.forEach((el)=>{
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image
    
     div.append(img)
     document.getElementById("staple-container").append(div)
    })
 }
 stapleappend(staplearr)

 const beveragearr=[
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_coost-beveragesStorefront_m_251022_275x184_02.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_coffee-beveragesStorefront_m_251022_275x184_03.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_health-beveragesStorefront_m_251022_275x184_04.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_energy-beveragesStorefront_m_251022_275x184_05.jpg"},
 ]
 const beverageappend=(data)=>{
    data.forEach((el)=>{
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image
    
     div.append(img)
     document.getElementById("beverage-container-right").append(div)
    })
 }
 beverageappend(beveragearr)

 const snacksarr=[
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_namkeens-snacksStorefront_m_480_251022_01.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_ready-cook-snacksStorefront_m_480_251022_04.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_chocolates-snacksStorefront_m_480_251022_06-13.jpg"},
 ]
 const snacksappend=(data)=>{
    data.forEach((el)=>{
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image
    
     div.append(img)
     document.getElementById("snacks-container").append(div)
    })
 }
 snacksappend(snacksarr)

 const cleaningarr=[
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_cleaners-disnfectants_m_480_251022_01.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_detetgents-cleaningStorefront_m_480_251022_02.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_kitchen-wipes-m_480_251022_03.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_fresheners-repplent-_m_480_251022_04.jpg"},
 ]

 const cleaningappend=(data)=>{
    data.forEach((el)=>{
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image
    
     div.append(img)
     document.getElementById("cleaning-container").append(div)
    })
 }
 cleaningappend(cleaningarr)

 const beautyarr=[
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_02.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_03.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_04.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/6fe7b988-d217-4451-a8ff-6ddd2762f3d5/hp_beauty-Storefront_m_251022_275x184_05.jpg"},
 ]
 const beautyappend=(data)=>{
    data.forEach((el)=>{
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image
    
     div.append(img)
     document.getElementById("beauty-container-right").append(div)
    })
 }
 beautyappend(beautyarr)

 const homearr=[
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_under-149-GMStorefront(Till10th)_m_251022_01.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_150-299-GMStorefront(Till10th)_m_251022_02.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_pressure-cookers-GMStorefront(Till10th)_m_251022_03.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_dinnerware-GMStorefront(Till10th)_m_251022_04.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_kitchen-tools-GMStorefront(Till10th)_m_251022_05.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/dd3c4480-6322-4f07-a1b2-daab29bae452/hp_storage-containers-GMStorefront(Till10th)_m_251022_06.jpg"},
 ]
 const homeappend=(data)=>{
    data.forEach((el)=>{
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image
    
     div.append(img)
     document.getElementById("home-container").append(div)
    })
 }
 homeappend(homearr)

 const brandarr=[
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_amul-brandStorefront_m_480_251022_01.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_dettol-brandStorefront_m_480_251022_02.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_cocacola-brandStorefront_m_480_251022_03.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_loreal-brandStorefront_m_480_251022_04.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_indai-gate-brandStorefront_m_480_251022_05.jpg"},
    {image:"https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/1bfc68c3-152f-4ed4-bce4-40644929dff2/hp_durex-brandStorefront_m_480_251022_06.jpg"},
 ]

 const brandappend=(data)=>{
    data.forEach((el)=>{
     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=el.image
    
     div.append(img)
     document.getElementById("brand-container").append(div)
    })
 }
 brandappend(brandarr)

 let footercontainer=document.getElementById("footer-container")
 footercontainer.innerHTML=footer()

 

var smartbasket=$('#smartbasket .owl-carousel')
smartbasket.owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }
   }
})
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});




const product=document.querySelectorAll("#add-button")
product.forEach((el)=>{
el.onclick=()=>{
   addproductfun(el)
}
})



// responsive Navbar

window.onresize = reportWindowSize;

// let navbar_div = document.getElementById('navbar_div')

    function reportWindowSize() {

        if(window.innerWidth>800) {
         navbar_div.innerHTML = navbar();
            console.log('less than 800')
            let res_navbar = document.getElementById('res_navbar');
        } else {
         console.log('greater than 800')
         navbar_div.innerHTML = small_screen_navbar();
        }
    }
    window.onresize = reportWindowSize;

    console.log(window.innerWidth)