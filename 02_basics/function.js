function addtwonumber(num1,num2){
    const result=num1+num2
    return result
}
console.log(addtwonumber(2,7))
const arr=[2,4,6,78,3]
function findmax(){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
        
    }
    return max;
}
console.log(findmax())

function calculatecartprice(...num1){   // ... is used to store all number in an array
    return num1;                        //calucate(val1,val2,...num1)-->this func means val1 store 200,val2 store 300,rest will be stored by ...num1
}
console.log(calculatecartprice(200,300,40,1000))
//function with object
const obj={
    username:"hitesh",
    price:999
}
function objecthandle(anyobject){
    console.log(`username is ${anyobject.username},and price is ${anyobject.price}`)

}
objecthandle(obj)