//  Promis has 3 stage......
// 1. Pending state 
// 2. Fullfil stage -> resolve -> .then()
// 3. Reject stage  -> reject  -> .catch()

let gourav = 100
let ashish = 1000
const p = new Promise((resolve.reject)=>{
    let rupess = gourav - ashish;
    if(ashish > rupess){
        // resolve("Thik hai bhai mai dedunga")
        resolve({rupess,data:"Bhai mai dedunga jitne bolega",})}
        else{
            reject("this is my backup plan")
        }
    })

p.then((msg) => console.log(msg))