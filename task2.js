function User(name){
    this.name= name;
}
User.prototype.sayHello = () =>{
    console.log(`Hello , ${this.name}`)
}
const user1 = new User('Alice')
user1.sayHello();

// Hello, undefined


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
// 0101

console.log(foo)
var foo =  "Hello"
console.log(foo)

// ReferenceError

// function sum( extra,...numbers){
//     return numbers.reduce((acc, num) => ace+ num,0)+extra
// }


// const [user, setUser] =useState({name: "nahid", ago: 25})
// function update(){
//     setUser({ago:19})
// }

console.log(1+"2"+3)

function multi(x,y=2){
    return x*y;
}
console.log(multi(5))
console.log(multi(5, undefined))
console.log(multi(5, null))

const a =[1,2,3]
const b = a
b.push(4)
console.log(a)
// [ 1, 2, 3, 4 ]

let x =  1;
let y  = 2;
x = x + y++
console.log(x,y)
// 3 3