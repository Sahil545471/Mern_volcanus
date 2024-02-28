console.log("hello world")

// const element1 = document.getElementsByTagName("h1")
// const element2 = document.getElementById("h2")
// const element3 = document.getElementsByClassName("h3")

// console.log("this is element 1",element1)
// console.log("this is element 2",element2)
// console.log("this is element 3",element3)

// const element1 = document.querySelector("h1")
// const element2  = document.querySelector("#h2")
// const element3  = document.querySelector(".h3")



// console.log("this is element 1",element1)
// console.log("this is element 2",element2)
// console.log("this is element 3",element3)

// const element = document.querySelector(".container")
// element.innerHTML = "<h1> This is my dynamic containt </h1>" 
// element.innerText = "This is my dynamic text"

// const h1 = document.querySelector("h1")
// // console.log(h1.innerText)
// // document.querySelector(".container").innerHTML = `<h1>${h1.innerText}</h1>`

// const image = document.querySelector("img")
// image.src = "https://cdn.pixabay.com/photo/2024/02/21/08/44/woman-8587090_640.png"



// const h1 = document.querySelector("h1")
// h1.style.backgroundColor = "red"

// document.querySelector("h1").style.backgroundColor = "green"
// document.querySelector("h1").style.backgroundColor = "yellow"



const bglight = () =>{
    const superman = document.querySelector("body")
    superman.style.backgroundColor = "white"
    superman.style.color = "black"
}

const bgdark = () =>{
    const superman = document.querySelector("body")
    superman.style.backgroundColor = "black"
    superman.style.color = "WHITE"
}

const change = () =>{
    const image = document.querySelector("img")
    image.src = "https://cdn.pixabay.com/photo/2024/02/21/08/44/woman-8587090_640.png"
}
const unchange = () =>{
    const image = document.querySelector("img")
    image.src = "https://cdn.pixabay.com/photo/2023/05/05/06/19/street-7971714_1280.jpg"
}

