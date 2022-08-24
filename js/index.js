// // function clickMe() {
// //     alert("Ouch");
// // }
// function clickMe() {
//     alert ("ouch")
// }
// let btn = document.querySelector('.btn')
// btn.addEventListener("click", clickMe)
    

// // function loveMessage(), => {
// //     console.log("You are Lovely")
// // })

// setTimeout(() => {
//     btn.removeEventListener("click", clickMe)


// }, 5000)

// pt 2

const itemList = document.querySelector('#item-list');


// const item = document.createElement("div")
// item.setAttribute("class", "col");
// item.innerHTML= "image";
store.forEach((item)=> {
    const imageContainer = document.createElement("div")
    imageContainer.setAttribute("class", "col-5");

    const img = document.createElement("img") // 
    img.setAttribute("src", `${item.image}`);
    imageContainer.appendChild(img)

    const h3 = document.createElement("h3")
    h3.innerHTML = item.itemName;

    const p = document.createElement("p")
    p.innerHTML = item.description;

    // const qty = document.createElement()
    imageContainer.appendChild(h3)
    imageContainer.appendChild(p)

    const input = document.createElement("input")
    input.setAttribute("value", "")
    // input.setAttribute("id", index);
    input.setAttribute("placeholder", "QTY")
    input.setAttribute("type", "number")
    input.setAttribute("class", "bg bg-success")

    const addToCart = document.createElement("button")
    addToCart.setAttribute('text', "Add To Cart")
    addToCart.setAttribute("class", "bg bg-danger")
    addToCart.textContent = "Add To Cart"


    // input.innerHTML = item.price;

    imageContainer.appendChild(input)
    imageContainer.appendChild(addToCart)



    itemList.appendChild(imageContainer)
})
