// const element = document.querySelector(".container")

//  child nodes

// console.log(element.childNodes)

// console.log(element.children[0])

// First element child
// console.log(element.firstElementChild)

// Last Element child 
// console.log(element.lastElementChild.innerHTML) 

// const child2 = document.querySelector('.child2')
// console.log(child2.innerHTML)
// console.log(child2.previousElementSibling.innerHTML)
// console.log(child2.nextElementSibling.innerHTML)

// div.setAttribute('id','batman')
// div.setAttribute('class','superman')



// console.log("this is my div =",div)

// console.log("div text =",div.innerText)


const dynamicElements = []

const btn = document.createElement('button')
btn.setAttribute("id","button")
btn.innerText = "turn on"
document.querySelector('body').appendChild(btn)


const removeButton = document.createElement("button")
removeButton.setAttribute("id","rbtn")
removeButton. innerText = 'remove dynamic code'
document.querySelector('body').appendChild(removeButton)


let i = 0
let div = ''
document.querySelector('#button').addEventListener('click',buttonon = () =>{
   i++;
    div = document.createElement("h1")
    div.innerText = "Congratulations your code has been compiled succesfully"
    document.querySelector('body').appendChild(div)
    div.style.backgroundColor = 'purple'
    div.style.color = 'red'
    dynamicElements.push(div)},
    
    removeButton.addEventListener('click',() => {
        for(let i=0;i<dynamicElements.length;i++){
            const remove = dynamicElements[i]
            if(remove.parentNode)
            div.parentNode.removeChild(remove)}
        }
    )    
    
    )
    



