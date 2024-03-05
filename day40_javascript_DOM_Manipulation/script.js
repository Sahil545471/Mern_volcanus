const container = document.querySelector(".container")
console.log(container)

// const items = container.querySelector('.items:nth-child(3)')
// // console.log(items.innerText)

// // items.style.backgroundColor = "red";
// // // items.innerHTML = "<span>sahil</span>"
// // // items.innerText = "<span>sahil</span>"
// console.log(items.innerHTML)
// console.log(items.innerText)
// console.log(items.textContent)

// console.log(items.length)


const changeStyle = () => {
    const items = document.querySelectorAll('.items')
    for(let i=0 ; i<items.length;i++)
    {
        items[i].style.backgroundColor = "red"
        items[i].style.color = "black"
        items[i].style.padding = "10px"
        items[i].style.border = "2px solid blue"
    }
}

document.querySelector('#btn').addEventListener("click", changeStyle)

// changeStyle()

// console.log(document.querySelector("#input"))


const getInputValue = () =>{
    const input = document.querySelector("#input");
    console.log(input.value)
}