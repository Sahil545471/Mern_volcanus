//  normal function

// function print()
// {
//     console.log("this is function")
// }

//  Function with return type 
// function sbi(){
//     return 7.8 
// }
// console.log(sbi())

// function sum(a,b)
// {
//      console.log("Myself")
//       return a+b;
// }
// const result = sum(10,20)
// console.log(result)

// Arrow function
// function print(){
//     console.log("This is normal function")
// }
// Normal arrow function declaration
// const print2 = () => console.log("this is arrow function")
// print2()

// arrow function with return value

// const rateofintrest = () => 7.9
// console.log(rateofintrest())

// Arrow function with argument and return type
// const sum = (a,b) =>{
//     return a+b
// }
// console.log(sum(10,30))

// Object 
const laptop1 = {
    model_name:"hp pro book 830 G8",
    Brand_name:"HP",
    ram:"10GB",
    HHD:"500gb",
    SSD:"300gb",
    Processor:"Intel i-9 9th Gen",
    Price:75000
}
console.log("laptop1 object",laptop1)
const {ram,SSD} = laptop1
console.log(ram,SSD)
// const laptop2 = {...laptop1,Price:1000,model_name:"sony"}
// console.log("laptop2 object",laptop2)


