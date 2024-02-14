// let arr = [10,20,30,40,50];
// console.log("orignal array",arr)
//  it will update roignal array
// arr.splice(3,2)
// console.log(arr)


//  Slice return a brand new array, We have to pass the start end index of elements, it will include the last index
// let sliceAdrray = arr.slice(1,2)
// console.log("slicedArray " , sliceAdrray)
// console.log("orignal array",arr)

// let arr1 = ["laptop","smartwatch","smartphone","ipad"]
// let arr2 = ["apple","banana","cherry"]

// let result = arr1.concat(arr2);
// console.log(result);
// console.log(arr1.concat(arr2))

const arr = ["apple","laptop","smartwatch","banana","smartphone","apple","banana","cherry","ipad","apple"];

// It shows the first index 
// console.log("index of seaching element = "+arr.indexOf("banana"))

// It show the last index of searching element 
const searchingElement = "Apple"
console.log("index of seaching element = "+arr.lastIndexOf(searchingElement.toLowerCase()))

