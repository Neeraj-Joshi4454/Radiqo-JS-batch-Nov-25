// let const var

// var : Global scope variable

// let & const : Local scope variable

// let firstName = "React";

// firstName = "Angular";

// console.log("value of firstName is : ", firstName);

// const PI = 3.14;

// console.log("Value of PI is : ", PI);

// arrow function

// function showName(name){
//     console.log("Your name is : ", name);
// }

// syntax :

// const functionName = (para1, para2, ...) => {
//     statements
// }

// const showName = (name) => {
//     console.log("Your name is : ", name)
// }

// showName("Jhon");

// map

// const users = [
//     {
//         id : 1,
//         name : "jhon Doe",
//         city : "Pune"
//     },
//     {
//         id : 2,
//         name : "Rohini",
//         city : "Pune"
//     },
//     {
//         id : 3,
//         name : "Geetakshi",
//         city : "Mumbai"
//     }
// ]

// users.map((user,i) => {
//     console.log("user is : ", user.name);
//     console.log("position of user is : ", i);
// })

// filter

// const users = [
//     {
//         id : 1,
//         name : "jhon Doe",
//         city : "Pune"
//     },
//     {
//         id : 2,
//         name : "Rohini",
//         city : "Pune"
//     },
//     {
//         id : 3,
//         name : "Geetakshi",
//         city : "Mumbai"
//     }
// ]

// const response = users.filter((data , i) => {
//     return data.city === "Pune";
// })

// response.map((data) => {
//     document.getElementById('user').innerHTML+=`<h1>${data.name}</h1>`
// })

// const array1 = ["one", "Two"];

// const array2 = ["Three", "Four"];

// const array3 = [...array1,...array2, "Five", "Six"];

// console.log(array3)

// const obj1 = {
//     id : 1,
//     name : "Jhon"
// }

// const obj2 = {
//     city: "Pune"
// }

// const obj3 = {
//     ...obj1,
//     ...obj2,
//     phone: '7972212488'
// }

// console.log(obj3)

// let array1 = ["ONE", "TWO", "THREE", "FOUR"];

// const filteredItems = array1.filter((element) => {
//     return element !== 'THREE'
// })

// console.log("Filtered Items : ", filteredItems)

// array1.forEach((element) => {
//     console.log("Element", element)
// })


// template litterals

// const courseDetails = {
//   course: "React Frontend Dev",
//   duration: "3 Months",
// };

// console.log(
//   "My course name is : course  and duraiton for this course is : duration"
// );

// console.log(
//   `My course name is : ${courseDetails.course}  and duraiton for this course is : ${courseDetails.duration}`
// );



// const details = [
//     {id: 1, product : "Laptop", price:80000},
//     {id: 2, product : "phone", price:150000},
//     {id: 3, product : "earphone", price:4000},
// ]


// details.map((product) => {
//     console.log(`Product name : ${product.product} , price : ${product.price}`)
// })



// const productName = "Lapotp";

// console.log(productName)