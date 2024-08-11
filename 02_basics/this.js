const user={
    username:"rishali",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to my channel`);
        //"this" is used to use current context
        console.log(this) //y jo h current context ki baat krta h
    }
}

user.welcomemessage()
user.username="khushi"
user.welcomemessage() //now it will print khushi,welcome...
console.log(this) //it will print empty {},bcz we under node environment and ther is no context under global

function chai(){
    let username="rishali"
    console.log(this.username); //here "this" will not work,it is only worknig for object
}
chai()
