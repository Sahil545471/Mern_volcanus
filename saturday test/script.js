
document.querySelector('#move').addEventListener('click',() =>{
    const image = document.querySelector('img')
    image.style.left = "1000px" 
})

document.querySelector('#light').addEventListener('click',() =>{
            document.querySelector("body").style.background = "white"
            document.querySelector("body").style.color = "black"
})


document.querySelector('#dark').addEventListener('click',() =>{
            document.querySelector("body").style.background = "black"
            document.querySelector("body").style.color = "white"
})


document.querySelector('#add').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 + num2
   let add = document.createElement('h2')
    add.textContent = sum
    document.querySelector('body').appendChild(add)
})
document.querySelector('#multiply').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 * num2
   let add = document.createElement('h2')
    add.textContent = sum
    document.querySelector('body').appendChild(add)
})
document.querySelector('#subtract').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 - num2
   let add = document.createElement('h2')
    add.textContent = sum
    add.style.top = "100px"
    document.querySelector('body').appendChild(add)
})
document.querySelector('#division').addEventListener('click',() =>{
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 =  parseInt(document.querySelector('#num2').value)
    console.log(num1,num2)
   let sum = num1 / num2
   let add = document.createElement('h2')
    add.textContent = sum
    add.style.top = "100px"
    document.querySelector('body').appendChild(add)
})