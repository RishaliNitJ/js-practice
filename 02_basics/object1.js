//const mysym= symbol("mykey")
const jsUser={
    name: "rishali",
    "full name" :"rishali kumari",
    //symbol refer in object this way
    //[mysym]: "key1",
    age:21,
    location:"patna",
    email:"khushi@gmail.com",
    isloggedin: true,
    lastloggedin: ["mon","fri"]
}
// console.log(jsUser.email) // mostly we use 
//console.log(jsUser["email"]) //this is for special cases or we can use it in normal basics
//console.log(jsUser["full name"])
//console.log(jsUser[mysym])
jsUser.email="rishaliamazon@gmail"
Object.freeze(jsUser) //after using freeze we cant chnge any value inside the object
jsUser.email="rishalimicro@gmail"
//console.log(jsUser)
jsUser.greeting=function(){
    console.log("hello js User")
}
jsUser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`)

}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
