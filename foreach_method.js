let fruits = ['banana','between','orange','apple','grapes','mango']

let forl = fruits.forEach((fruit)=>console.table("fruits :",fruit))

// console.log(forl);


// block scope elements

function globalfun(){
    var val ="this is  global function"
    console.log(val);

    // nested function
    function nestedfun(val){
        var val2 ="this is nested function"+" "+val
        console.log(val2);
    }
        //   call the nested function
        nestedfun("argument")

}
 globalfun()

// console.table(num)

// second example program

let users = [
    {name:"prasad",age:84,place:"bhvani"},
    {name:"arun",age:84,place:"bhvani"},
    {name:"raju",age:84,place:"bhvani"},
    {name:"padhma",age:84,place:"bhvani"},
    {name:"sound",age:84,place:"bhvani"},
    {name:"jai",age:84,place:"bhvani"},
]


//  let getval= document.getElementById("val")

// users.forEach((value)=>{
    //     console.log(value.name);
    // })

// third example program
let num = [1,23,4,5,6,7,648,5]
var sum =0
num.forEach((values)=>{

sum+=values;

})

console.log("total:",sum);

//    4th example program

let num3 = [1,23,4,5,6,7,648,5]
let doubletval = []

num3.forEach((cur)=>{
doubletval.push(cur*2)
})
console.log(doubletval);

// 5th example program

let num4 = [66,23,4,5,6,7,648,5]

let max =num4[0] //66

num4.forEach((cur)=>{

if(cur>max){  // 66 >66 , 23 >66 ,,,648>66- condition true ->max=648

max =cur; //max = 646 
}
})
console.log(max);


//  6th program
let values = [43,13,43,54,63,65]
let  total_val = 0

values.forEach((cur)=>{
total_val+=cur
})
console.log("total:",total_val);
console.log("average:",(total_val/values.length));


// 7th program
//  find even no using foreach assign it to another array

let shuffle_no = [44,14,42,54,63,65,66,23,11]
let even_no = []
let odd_no =[]
// finding even numbers
shuffle_no.forEach((cur)=>{
if(cur%2==0){
even_no.push(cur)
// console.log(even_no);
}
else{
odd_no.push(cur)
}
})
console.log("total:",shuffle_no);
console.log("even-value",even_no);
console.log("odd-value",odd_no);


// 8th program 

// changing case
let names = ['arun','prasad','sound','padma','sajay']


names.forEach((name,index)=>{
names[index] = name.toUpperCase()

})

console.log(names);

let names_or = ['arun','prasad','sound','padma','sajay']
let concat_or =""
names_or.forEach((name)=>{
concat_or+=name+" "
})
console.log(concat_or);