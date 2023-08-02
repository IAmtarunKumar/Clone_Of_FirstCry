// const { url } = require("inspector")
let url = "http://localhost:3000";

//append data

async function getData() {
  try {
    let res = await fetch(`${url}/product/get`);

    let data = await res.json();
    // console.log(data)
    showData(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

// let appendDiv = document.querySelector(".append")

async function showData(data) {
  // console.log(data)
  let appendDiv = document.querySelector(".append");
  data.forEach((item) => {
    let div = document.createElement("div");

    div.innerHTML = `

<img src=${item.img} alt="">
<p class="title">${item.title}</p>

<hr>
<div class="priceSection">
<div> ₹ ${item.price}</div>
<div><strike>  ${item.price}</strike></div>
</div>

<hr>
<p class="clubPrice"> <img width="20%" src="https://cdn.fcglcdn.com/brainbees/images/pdpcl_club_logo.jpg" alt=""> Price : <span>${item.price}</span></p>

<div class="buttonSection">
<button class="btn cart" >Add to Cart</button>
<button class="btn shortlist" >Shortlist</button>
</div>
`;

    appendDiv.append(div);
  });
}

//button

let Subcategorybtn = document.querySelector(".Subcategorybtn");

let subcategory = document.querySelector(".Subcategory");

Subcategorybtn.addEventListener("click", () => {
  discount.style.display = "none";
  price.style.display = "none";
  age.style.display = "none";
  gender.style.display = "none";
  color.style.display = "none";
  material.style.display = "none";

  if (subcategory.style.display === "none") {
    subcategory.style.display = "block";
  } else {
    subcategory.style.display = "none";
  }

  ////

  ////
});

// color  22
let colorbtn = document.querySelector(".colorbtn");
// console.log(colorbtn)
let color = document.querySelector(".color");

colorbtn.addEventListener("click", () => {
  subcategory.style.display = "none";
  discount.style.display = "none";
  price.style.display = "none";
  age.style.display = "none";
  gender.style.display = "none";

  material.style.display = "none";

  if (color.style.display === "none") {
    color.style.display = "block";
  } else {
    color.style.display = "none";
  }
});

/// discount 333

let discountbtn = document.querySelector(".discountbtn");
// console.log(colorbtn)
let discount = document.querySelector(".discount");

discountbtn.addEventListener("click", () => {
  subcategory.style.display = "none";

  price.style.display = "none";
  age.style.display = "none";
  gender.style.display = "none";
  color.style.display = "none";
  material.style.display = "none";

  if (discount.style.display === "none") {
    discount.style.display = "block";
  } else {
    discount.style.display = "none";
  }
});

// price 444

let pricebtn = document.querySelector(".pricebtn");
// console.log(colorbtn)
let price = document.querySelector(".price");

pricebtn.addEventListener("click", () => {
  subcategory.style.display = "none";
  discount.style.display = "none";

  age.style.display = "none";
  gender.style.display = "none";
  color.style.display = "none";
  material.style.display = "none";

  if (price.style.display === "none") {
    price.style.display = "block";
  } else {
    price.style.display = "none";
  }
});

//age 555

let agebtn = document.querySelector(".agebtn");
// console.log(colorbtn)
let age = document.querySelector(".age");

agebtn.addEventListener("click", () => {
  subcategory.style.display = "none";
  discount.style.display = "none";
  price.style.display = "none";

  gender.style.display = "none";
  color.style.display = "none";
  material.style.display = "none";

  if (age.style.display === "none") {
    age.style.display = "block";
  } else {
    age.style.display = "none";
  }
});

// gender 66

let genderbtn = document.querySelector(".genderbtn");
// console.log(colorbtn)
let gender = document.querySelector(".gender");

genderbtn.addEventListener("click", () => {
  subcategory.style.display = "none";
  discount.style.display = "none";
  price.style.display = "none";
  age.style.display = "none";

  color.style.display = "none";
  material.style.display = "none";

  if (gender.style.display === "none") {
    gender.style.display = "block";
  } else {
    gender.style.display = "none";
  }
});

//material  77

let materialbtn = document.querySelector(".materialbtn");
// console.log(colorbtn)
let material = document.querySelector(".material");

materialbtn.addEventListener("click", () => {
  if (material.style.display === "none") {
    material.style.display = "block";
    subcategory.style.display = "none";
    discount.style.display = "none";
    price.style.display = "none";
    age.style.display = "none";
    gender.style.display = "none";
    color.style.display = "none";
  } else {
    material.style.display = "none";
  }
});

//checklist

// let allInput = document.querySelectorAll(".displayDiv input")

// console.log(allInput)

// for(let item of allInput){

// item.addEventListener("change" , ()=>{

// if(item.checked){
//   console.log(item.value)

// }else{
//   console.log("not checked")
// }

// })
// }

// check check list

// subcategory start

let selectItem = "";
let box1 = document.querySelectorAll(".box1");
box1.forEach((item) => {
  item.addEventListener("change", async () => {
    let appendDiv = document.querySelector(".append");
    console.log(appendDiv);

    appendDiv.innerHTML = "";

    if (item.checked) {
      // console.log(item.value)
      selectItem += item.value + "+";
      console.log(selectItem);

      //fetch data
      try {
        // console.log(selectItem)
        let res = await fetch(`${url}/product/subcategory/${selectItem}`);
        if (res.ok) {
          let data = await res.json();
          // console.log(data)

          showData(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not checked");
      console.log(item.value);
      // console.log(selectItem)
      let arr = selectItem.split("+");
  
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item.value) {
          newArr.push(arr[i]);
        }
      }
      // console.log(newArr)
      selectItem = newArr.join("+");

      if (selectItem === "") {
        console.log("empt");

        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/get`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/subcategory/${selectItem}`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
});

// subcategory end

//discount start


// color start 
let discountItem = "";
let box2 = document.querySelectorAll(".box2");
// console.log(colorbox)
box2.forEach((item) => {
  item.addEventListener("change", async () => {
    let appendDiv = document.querySelector(".append");
    console.log(appendDiv);

    appendDiv.innerHTML = "";

    if (item.checked) {
      // console.log(item.value)
      discountItem += item.value + "+";
      console.log(discountItem);

      //fetch data
      try {
        // console.log(selectItem)
        let res = await fetch(`${url}/product/discount/${discountItem}`);
        if (res.ok) {
          let data = await res.json();
          // console.log(data)

          showData(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not checked");
      console.log(item.value);
      // console.log(selectItem)
      let arr = discountItem.split("+");
  
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item.value) {
          newArr.push(arr[i]);
        }
      }
      // console.log(newArr)
      discountItem = newArr.join("+");

      if (discountItem === "") {
        console.log("empt");

        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/get`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/discount/${discountItem}`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
});



//discount end



// price Start 

let priceItem = "";
let priceBox = document.querySelectorAll(".priceBox");
// console.log(colorbox)
priceBox.forEach((item) => {
  item.addEventListener("change", async () => {
    let appendDiv = document.querySelector(".append");
    console.log(appendDiv);

    appendDiv.innerHTML = "";

    if (item.checked) {
      // console.log(item.value)
      priceItem += item.value + "+";
      console.log(priceItem);

      //fetch data
      try {
        // console.log(selectItem)
        let res = await fetch(`${url}/product/price/${priceItem}`);
        if (res.ok) {
          let data = await res.json();
          // console.log(data)

          showData(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not checked");
      console.log(item.value);
      // console.log(selectItem)
      let arr = priceItem.split("+");
  
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item.value) {
          newArr.push(arr[i]);
        }
      }
      // console.log(newArr)
      priceItem = newArr.join("+");

      if (priceItem === "") {
        console.log("empt");

        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/get`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/price/${priceItem}`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
});


// price end 


// age start 

let ageItem = "";
let ageBox = document.querySelectorAll(".ageBox");
// console.log(colorbox)
ageBox.forEach((item) => {
  item.addEventListener("change", async () => {
    let appendDiv = document.querySelector(".append");
    console.log(appendDiv);

    appendDiv.innerHTML = "";

    if (item.checked) {
      // console.log(item.value)
      ageItem += item.value + "+";
      // console.log(ageItem);

      //fetch data
      try {
        // console.log(selectItem)
        let res = await fetch(`${url}/product/age/${ageItem}`);
        if (res.ok) {
          let data = await res.json();
          // console.log(data)

          showData(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not checked");
      // console.log(item.value);
      // console.log(selectItem)
      let arr = ageItem.split("+");
  
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item.value) {
          newArr.push(arr[i]);
        }
      }
      // console.log(newArr)
      ageItem = newArr.join("+");

      if (ageItem === "") {
        console.log("empt");

        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/get`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/age/${ageItem}`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
});


//age end

// gender start 

let genderItem = "";
let genderBox = document.querySelectorAll(".genderBox");
// console.log(colorbox)
genderBox.forEach((item) => {
  item.addEventListener("change", async () => {
    let appendDiv = document.querySelector(".append");
    console.log(appendDiv);

    appendDiv.innerHTML = "";

    if (item.checked) {
      // console.log(item.value)
      genderItem += item.value + "+";
      console.log(genderItem);

      //fetch data
      try {
        // console.log(selectItem)
        let res = await fetch(`${url}/product/gender/${genderItem}`);
        if (res.ok) {
          let data = await res.json();
          // console.log(data)

          showData(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not checked");
      console.log(item.value);
      // console.log(selectItem)
      let arr = genderItem.split("+");
  
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item.value) {
          newArr.push(arr[i]);
        }
      }
      // console.log(newArr)
      genderItem = newArr.join("+");

      if (genderItem === "") {
        console.log("empt");

        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/get`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/gender/${genderItem}`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
});


// gender end 



// color start 
let colorItem = "";
let colorbox = document.querySelectorAll(".colorbox");
console.log(colorbox)
colorbox.forEach((item) => {
  item.addEventListener("change", async () => {
    let appendDiv = document.querySelector(".append");
    console.log(appendDiv);

    appendDiv.innerHTML = "";

    if (item.checked) {
      // console.log(item.value)
      colorItem += item.value + "+";
      console.log(colorItem);

      //fetch data
      try {
        // console.log(selectItem)
        let res = await fetch(`${url}/product/color/${colorItem}`);
        if (res.ok) {
          let data = await res.json();
          // console.log(data)

          showData(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not checked");
      console.log(item.value);
      // console.log(selectItem)
      let arr = colorItem.split("+");
  
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item.value) {
          newArr.push(arr[i]);
        }
      }
      // console.log(newArr)
      colorItem = newArr.join("+");

      if (colorItem === "") {
        console.log("empt");

        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/get`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/color/${colorItem}`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
});


// color end 


// material start 

let matItem = "";
let matBox = document.querySelectorAll(".matBox");
// console.log(colorbox)
matBox.forEach((item) => {
  item.addEventListener("change", async () => {
    let appendDiv = document.querySelector(".append");
    console.log(appendDiv);

    appendDiv.innerHTML = "";

    if (item.checked) {
      // console.log(item.value)
      matItem += item.value + "+";
      console.log(matItem);

      //fetch data
      try {
        // console.log(selectItem)
        let res = await fetch(`${url}/product/material/${matItem}`);
        if (res.ok) {
          let data = await res.json();
          // console.log(data)

          showData(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not checked");
      console.log(item.value);
      // console.log(selectItem)
      let arr = matItem.split("+");
  
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item.value) {
          newArr.push(arr[i]);
        }
      }
      // console.log(newArr)
      matItem = newArr.join("+");

      if (matItem === "") {
        console.log("empt");

        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/get`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          // console.log(selectItem)/
          let res = await fetch(`${url}/product/material/${matItem}`);
          if (res.ok) {
            let data = await res.json();

            console.log(data);

            showData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
});



// material end 


