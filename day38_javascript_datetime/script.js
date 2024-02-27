const date = new Date();
// console.log(date)

const currentDate = date.getDate();
const currentDay = date.getDay();
const Year = date.getFullYear();
const Month = date.getMonth() +1;
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(`Todays date is = ${hour}:${minute}:${second}`)