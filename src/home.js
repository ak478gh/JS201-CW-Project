// importing navbar
import navbar from '../components/export.js'
let navbar_div = document.getElementById('navbar_div')
navbar_div.innerHTML = navbar();

let container_div = document.getElementById('container');
let count = 0;
let presentData;
//getData
const getData = async () => {
  let res = await fetch('http://localhost:3000/products');
  let data = await res.json();

  console.log(data);

  append(data, container_div);
 // count = data.length;
  // getSelectedData();
  
 
};

getData();

//getSelecteddata
// const getSelectedData = async () => {
//   let res = await fetch('http://localhost:3000/selectedProduct');
//   let data = await res.json();
//    data.forEach((ele) => {
//      presentData = ele.id;
//    });
//    console.log(presentData);
//  // console.log(data)
  
 
// };


const append = (data, container) => {
  let container_div = document.getElementById('container');
  container_div.innerHTML = null;

  data.forEach((ele) => {
    let item = document.createElement('div');
    //item.className("item")
      
    let image = document.createElement('img');
    image.src = ele.image;
    image.style.width = '200px';
      image.style.height = '200px';
      image.onclick = () =>
      {
          selectedProduct(ele)
      }
    let name = document.createElement('p');
    name.innerText = ele.name;
    let price = document.createElement('p');
    price.innerText = ele.price;
    price.className = 'product_price';
    let delivery = document.createElement('p');
    delivery.innerText = ele.delivery;
    delivery.className = 'product_delivery';
    let description = document.createElement('p');
    description.innerText = ele.description;
    let removebtn = document.createElement('button');
    removebtn.innerText = 'Remove';
    removebtn.className = 'remove_item';
    removebtn.onclick = () => {
      removeItem(ele);
    };
    let updatebtn = document.createElement('button');
    updatebtn.innerText = 'Update';
    updatebtn.className = 'update_price';
    updatebtn.onclick = () => {
      updateItem(ele);
    };
    item.append(
      image,
      name,
      price,
      delivery,
      description,
      removebtn,
      updatebtn,
    );
    container.append(item);
  });
};

const selectedProduct = async (ele) =>
{
  let resp = await fetch('http://localhost:3000/selectedProduct');
  let datap = await resp.json();
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
  let res = await fetch(`http://localhost:3000/selectedProduct/${presentId}`, {
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