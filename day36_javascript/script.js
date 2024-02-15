//  Include method that returns boolien ttype value
// const arr = [10,20,30,40,50];

// console.log(arr.includes(21));

// const phones = ["apple","lenovo","dell inspiration","xiaomi","hp","oppo"]
// const searchElement = "Apple";
// console.log(phones.includes(searchElement.toLowerCase()));


// High Order array Methods

// const arr = [10,20,30,40,50,60]
// const result = arr.map((elements)=>elements+"20")
// console.log(result)

// OR
// const arr = [10,20,30,40,50,60]
// arr.map((elements)=>console.log(elements+"20"))

// filter method

// const arr = [10,20,30,40,50,60];
// const filterData = arr.filter((supermen) => supermen>30)
// console.log(filterData)

const products = [
    {
        id:1,
        title:"iphone",
        Catagory:"mobiles",
        price:69999
    },
    {
        id:2,
        title:"oneplus",
        Catagory:"mobiles",
        price:19999
    },
    {
        id:3,
        title:"hp",
        Catagory:"laptop",
        price:79999
    },
    {
        id:4,
        title:"Lenovo",
        Catagory:"laptop",
        price:59999
    },
    {
        id:5,
        title:"microsoft surface",
        Catagory:"tablets",
        price:89999
    },
    {
        id:6,
        title:"ipad",
        Catagory:"tablets",
        price:99999
    }
]
// const filterSearch = "mobiles"
// const filterdData = products.filter((product) => product.Catagory == filterSearch)
// console.log(filterdData)

// const filterByPrice = products.filter((data) => data.price >= 99999)
// console.log(filterByPrice)

const filterByTitle = products.filter((data)=> data.title.includes("i"))
console.log(filterByTitle)