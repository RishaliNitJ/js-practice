const marvel_heros= new Array( 'ironman','thor','spidermn')
const bollywood_heros= new Array('krish','shaktiman','hero')
//first method to join two array-->concat
const all_heros= marvel_heros.concat(bollywood_heros)
console.log(all_heros)
//second method is spread
const heros= [...marvel_heros,...bollywood_heros]
console.log(heros)
//flat is used to 
const array= [1,2,[3,4],[5,6,[7]]]
const real_arr= array.flat(3)
console.log(real_arr)
console.log(Array.isArray("rishali")) // is array or not
console.log(Array.from("hitesh"));//convert into array
console.log(Array.from({Name:"rishali"}))//intersting case:we have to specialised that which we have to convert into array key or value
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))