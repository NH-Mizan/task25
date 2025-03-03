console.log("start")
setTimeout(()=>{
console.log("Time Out")
},0)
Promise.resolve().then((()=> console.log("promise")))
console.log("End")
