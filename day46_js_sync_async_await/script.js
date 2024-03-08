// console.log("hello console")


// // Synchronus code
// const synchronus = () =>{
//     console.log("superman")
//     console.log("spiderman")
//     console.log("Batman")
// }

// // ansynchronus code
// const asynchronus = () =>{
//     console.log("Indian institue of technology")
//     setTimeout(() => {
//         console.log("Vellore Institue of Technology")
//     },2000)
//     console.log("Volcanus")
// }

// Calling Function synchronus
// synchronus()

// calling function asynchronus
// asynchronus() 

const fetchData = async() => {
    const api = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await api.json()
    console.log(data)
}

// fetchData()

const fetchMealData = async() => {
 const newapi = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=american")
 const data = await newapi.json()
    return data.meals;


//  console.log(data)
}

console.log(fetchMealData())

const showDataToDOM = async()=>{
    const data = await fetchMealData()
    // console.log ("This data is coming from mealDB API", data)

    // document.querySelector(".main").innerHTML = `
    // <div>
    // <h1>${data[0].strMeal}</h1>
    // <img src=${data[0].strMealThumb} alt=${data[0].strMeal} style="width;300ox"/> 
    // </div>
    // `

    document.querySelector('.main').innerHTML = data.map((d)=>`   <div>
    <h1>${d.strMeal}</h1>
    <img src=${d.strMealThumb} alt=${d.strMeal} style="width:300px"/> 
    </div>`)

}

showDataToDOM()

