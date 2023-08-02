//box
let box = document.querySelectorAll(".box")
console.log(box)
box.forEach((item)=>{
    // console.log(item)

    item.addEventListener("click" , ()=>{
        window.location.href="./html/product.html"
    })
    })
