//importing navbar
import navbar from '../components/export.js';
let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = navbar();

// footer
import footer from '../components/footer.js';
let footer_div = document.getElementById('footer2');
footer_div.innerHTML = footer();

let container_div_middle = document.getElementById('middle-section');
let container_div_right = document.getElementById('product-data');
//let product_description_div = document.getElementById('product_description');
let product_name_div = document.getElementById('product_name_heading');
let div250g = document.getElementById('250gpack');
let div500g = document.getElementById('500gpack');
let div1000g = document.getElementById('1000gpack');
let addtobasketbtn = document.getElementById('addtobasketitem');

const buttonfunc = (addtobasketbtn.onclick = async () => {
  await addtocart();
});

div250g.onclick = () => {
  // event.preventDefault();
  let price = 250;
  div250g.style.backgroundColor = '#e6f3d3';
  updatePrice(price);
};
div500g.onclick = () => {
  //event.preventDefault();
  let price = 500;
  updatePrice(price);
};
div1000g.onclick = () => {
  // event.preventDefault();
  let price = 1000;
  updatePrice(price);
};
//let count = 0;
//let packsize = 100
const getData = async () => {
  let res = await fetch('https://bigbasket-kb7a.onrender.com/selectedProduct');
  let data = await res.json();

  console.log(data);
 // getCartData();
  appendMiddle(data, container_div_middle);
  appendRignt(data, container_div_right);

  appendName(data, product_name_div);
};
getData();

// const getCartData = async () => {
//   let res = await fetch('https://bigbasket-kb7a.onrender.com/carts');
//   let data = await res.json();
//   let basketcount = document.getElementById('basketcount');
//   if (data.length < 0 || data.length == undefined || data.length == null) {
//     basketcount.innerText = 0;
//   } else {
//     basketcount.innerText = data.length;
//     console.log('CartData:', data);
//   }
// };

const appendMiddle = (data, container) => {
  let container_div = document.getElementById('middle-section');
  container_div.innerHTML = null;
  console.log('Image Appended');
  data.forEach((ele) => {
    let item = document.createElement('div');
    //item.className("item")
    let image = document.createElement('img');
    image.src = ele.image;
    image.setAttribute('id', 'productimg');
    image.style.objectFit = 'cover';

    
    item.append(image);
    container.append(item);
  });
};

//append Right
const appendRignt = (data, container) => {
  let container_div = document.getElementById('product-data');
  container_div.innerHTML = null;
  console.log('Right appended');
  data.forEach((ele) => {
    let itemabove = document.createElement('div');
   

    let name = document.createElement('p');
    name.innerText = ele.name + ',' + ' ' + ele.packsize + 'g';
    let price = document.createElement('p');
    price.innerText = 'Price:' + ' ' + '₹' + ' ' + ele.price;
    price.className = 'product_price';
    let delivery = document.createElement('p');
    delivery.innerText = ele.delivery;
    delivery.className = 'product_delivery';
    let description = document.createElement('p');
    description.innerText = ele.description;
    
    itemabove.append(name, price);
    // itembelow.append(addtobasketbtn, savebtn);
    container.append(itemabove);
  });
};
//appendnameasbelowheading

const appendName = (data, container) => {
  let container_div = document.getElementById('product_name_heading');
  container_div.innerHTML = null;
  console.log('Name appended');
  data.forEach((ele) => {
    let item = document.createElement('div');
   

    let name = document.createElement('p');
    name.innerText = ele.name;
    name.id = 'cssproductname';
   
    item.append(name);
    container.append(item);
  });
};



//ChangePriceto250g
const updatePrice = async (updatepack) => {
  let resp = await fetch('https://bigbasket-kb7a.onrender.com/selectedProduct');
  let datap = await resp.json();
  let presentId;
  let presentprice;
  let presentpacksize;
  console.log(datap);
  datap.forEach((elem) => {
    presentId = elem.id;
    presentprice = elem.price;
    presentpacksize = elem.packsize;
  });
  //  let newprice=presentprice*(updatepack/100)
    //console.log(presentId);
  // console.log(newprice)
  // let selectedData = getSelectedData();

  // console.log("Product",selectedData)
  // console.log(ele)
  // console.log(ele.id)
  console.log(updatepack);
  console.log(presentprice);
  console.log(presentpacksize);
  let newpack = updatepack;
  let newprice = (presentprice / presentpacksize) * newpack;
  console.log(newprice);

  let send_data = {
    price: newprice,
    packsize: newpack,
  };

  let res = await fetch(`https://bigbasket-kb7a.onrender.com/selectedProduct/${presentId}`, {
    method: 'PATCH',
    body: JSON.stringify(send_data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Product Page');
 
  let data = await res.json();
  console.log(data);
  window.location.reload();
};

//addtocart

const addtocart = async () => {
  let resp = await fetch('https://bigbasket-kb7a.onrender.com/selectedProduct');
  let datap = await resp.json();
  let nid, name, price, packsize, description, delivery, image, count, subtotal;

  datap.forEach((elem) => {
    nid = elem.nid;
    name = elem.name;
    price = elem.price;
    packsize = elem.packsize;
    description = elem.description;
    delivery = elem.delivery;
    image = elem.image;
    subtotal = elem.price;
    count = 1;
  });

  let send_data = {
    id: nid,
    name,
    price,
    packsize,
    description,
    delivery,
    image,
    subtotal,
    count,
  };

  let res = await fetch('https://bigbasket-kb7a.onrender.com/carts', {
    method: 'POST',
    body: JSON.stringify(send_data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Cart Page');
  window.location.href = 'checkout.html';
  let data = await res.json();
  console.log(data);
 // getCartData();
 window.location.reload();
};


