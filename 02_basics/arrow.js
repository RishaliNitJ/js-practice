const chai=()=>{
    let username="rishali"
    console.log(this);
}
chai()
//method1
// const addtwo=(num1,num2)=>{  explicit
//     return num1+num2;
// }
//method2
//const addtwo=(num1,num2)=> num1+num2 //implicit
//method3
//const add=(num1,num2)=>(num1+num2) implicit
const add=(num1,num2)=>({username:"rishali"})


//IIFE
// provides encapsulation, allowing you to create private scopes for variables and functions.
//  This prevents variable conflicts and unintended modifications of data in the global scope.
//  Encapsulation is crucial in larger applications and when working with multiple libraries.
//  JavaScript functions that are executed immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope
(function chai(){
    //named iife
    console.log(`db connected`);

})();
//aaray used
((name)=>{
    //unnamed iife
    console.log(`db connected two,${name}`);
})('rishali');

//note : when we have to write two iife then we use semicolon after first iife execution