let container_div_middle = document.getElementById('middle-section');
let container_div_right = document.getElementById('right-section');
let product_description_div = document.getElementById('product_description');
let product_name_div = document.getElementById('product_name_heading');
let count = 0;
const getData = async () => {
  let res = await fetch('http://localhost:3000/selectedProduct');
  let data = await res.json();

  console.log(data);

    appendMiddle(data, container_div_middle);
    appendRignt(data, container_div_right);
    appendDescription(data, product_description_div);
    appendName(data,product_name_div)
  count = data.length;
};
getData();
const appendMiddle=(data, container) =>
{
    let container_div = document.getElementById('middle-section');
    container_div.innerHTML = null;
    console.log("Image Appended")
    data.forEach((ele) =>
    {
        
        let item = document.createElement("div")
        //item.className("item")
        let image = document.createElement("img")
        image.src = ele.image;
        image.style.width = "100%"
        image.style.height = "auto";
        
        // let name = document.createElement('p');
        // name.innerText=ele.name
        // let price = document.createElement('p');
        // price.innerText = ele.price;
        // price.className = 'product_price';
        // let delivery = document.createElement('p');
        // delivery.innerText = ele.delivery;
        // delivery.className = 'product_delivery';
        // let description = document.createElement('p');
        // description.innerText = ele.description;
        // let removebtn=document.createElement("button")
        // removebtn.innerText = 'Remove';
        // removebtn.className = "remove_item"
        // removebtn.onclick = () =>
        // {
        //     removeItem(ele);
        //     }
        //  let updatebtn = document.createElement('button');
        // updatebtn.innerText = 'Update';
        // updatebtn.className = 'update_price';
        //   updatebtn.onclick = () => {
        //     updateItem(ele);
        //   };
        item.append(image)
        container.append(item)
    })
}

//append Right
const appendRignt = (data, container) => {
  let container_div = document.getElementById('right-section');
  container_div.innerHTML = null;
  console.log('Right appended');
  data.forEach((ele) => {
    let itemabove = document.createElement('div');
    //item.className("item")
    // let image = document.createElement('img');
    // image.src = ele.image;
    // image.style.width = '100%';
    // image.style.height = 'auto';

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
    let itembelow = document.createElement('div');
    let addtobasketbtn = document.createElement('button');
    addtobasketbtn.innerText = 'ADD TO BASKET';
    addtobasketbtn.className = 'addtobasketitem';
    // addtobasketbtn.onclick = () => {
    //   removeItem(ele);
    // };
    let savebtn = document.createElement('button');
    savebtn.innerText = 'SAVE';
    savebtn.className = 'update_price';
    //   savebtn.onclick = () => {
    //     updateItem(ele);
    //   };
    itemabove.append(name, price);
    itembelow.append(addtobasketbtn, savebtn);
    container.append(itemabove, itembelow);
  });
};
//appendname

const appendName = (data, container) => {
  let container_div = document.getElementById('product_name_heading');
  container_div.innerHTML = null;
  console.log('Name appended');
  data.forEach((ele) => {
    let item = document.createElement('div');
    //item.className("item")
    // let image = document.createElement('img');
    // image.src = ele.image;
    // image.style.width = '100%';
    // image.style.height = 'auto';

    let name = document.createElement('p');
    name.innerText = ele.name;
    // let price = document.createElement('p');
    // price.innerText = ele.price;
    // price.className = 'product_price';
    // let delivery = document.createElement('p');
    // delivery.innerText = ele.delivery;
    // delivery.className = 'product_delivery';
    // let description = document.createElement('p');
    // description.innerText = ele.description;
    // let removebtn=document.createElement("button")
    // removebtn.innerText = 'Remove';
    // removebtn.className = "remove_item"
    // removebtn.onclick = () =>
    // {
    //     removeItem(ele);
    //     }
    //  let updatebtn = document.createElement('button');
    // updatebtn.innerText = 'Update';
    // updatebtn.className = 'update_price';
    //   updatebtn.onclick = () => {
    //     updateItem(ele);
    //   };
    item.append(name);
    container.append(item);
  });
};

//appendDescription
const appendDescription = (data, container) => {
  let container_div = document.getElementById('product_description');
  container_div.innerHTML = null;
  console.log('Description appended');
  data.forEach((ele) => {
    let item = document.createElement('div');
    //item.className("item")
    // let image = document.createElement('img');
    // image.src = ele.image;
    // image.style.width = '100%';
    // image.style.height = 'auto';

    // let name = document.createElement('p');
    // name.innerText=ele.name
    // let price = document.createElement('p');
    // price.innerText = ele.price;
    // price.className = 'product_price';
    // let delivery = document.createElement('p');
    // delivery.innerText = ele.delivery;
    // delivery.className = 'product_delivery';
    let description = document.createElement('p');
    description.innerText = ele.description;
    // let removebtn=document.createElement("button")
    // removebtn.innerText = 'Remove';
    // removebtn.className = "remove_item"
    // removebtn.onclick = () =>
    // {
    //     removeItem(ele);
    //     }
    //  let updatebtn = document.createElement('button');
    // updatebtn.innerText = 'Update';
    // updatebtn.className = 'update_price';
    //   updatebtn.onclick = () => {
    //     updateItem(ele);
    //   };
    item.append(description);
    container.append(item);
  });
};