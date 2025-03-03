function User(name){
    this.name= name;
}
User.prototype.sayHello = () =>{
    console.log(`Hello , ${this.name}`)
}
const user1 = new User('Alice')
user1.sayHello();


function counter(){
    let count = 0
    return()=>console.log(count ++)

}
const count1 = counter()
count1()
count1()

const count2 = counter()
count2()
count2()