/********************es6************************************ */
//let,const,var(hoisting-scope-reassign-redeclare)
//constructor func & class
//default parameters
//arrow fun
//map & set
//array methods find filter map forEach reduce 
//api & async code
//dom
//spread operators
//scope
//var functional scope
//let block scope
//const block scope


//oop
//class based prototypebased

// let Person = function(name,age)
// {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.demo=function(){
//     console.log(this.age);
// }

// let p1 = new Person("aziza",20)
// console.log(p1);
// p1.demo()

// class Person
// {
    
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     demo()
//     {
//         console.log(this.age);
//     }

//     demo2()
//     {
          
//     }
// }





// let p1 = new Person("hager",20)
// console.log(p1);
// p1.demo()

// let p2 = new Person("yomna",22)
// p2.demo()

// function demo(x,y=3)
// {
//   let sum = x+y
//   console.log(sum); 
// }
// demo(2,10)

// let x = (x,y) => {
//     let sum = x+y
//     console.log(sum);
// }
// x(2,3)
//call back fun & this

// let object={

//     name:"fatma",
//     x:function()
//     {
//         //console.log(this.name);
//         let test =()=>
//         {
//             console.log(this.name);
//         }
//         test()
//     }
// }

// object.x()


// call back fun

// var map = new Map()
// map.set("name","talia");
// map.set("age",22)
// console.log(map);
// console.log(map.has("salary"))
// map.get(name)



// for (const key of map.values()) {
//  console.log(key)   
// }

// let object={
//     salary:300,
//     name:"mona"
// }

// let map2 = new Map(Object.entries(object))

// console.log(map2)

// let x = new Map()
// x.set("salary","saj") // set()
// x.get("salary")  //get()

// x.has("salary") // has()
// x.size   

// for (const k of x.values()) {
//     console.log(k)
// }

// let x = ["ahmed","mohamed","ali","ali"]

// x.push("hossam")
// console.log(x);
// let y = new Set(x);
// y.push("ibrahim") //error
// console.log(y);


//var array = [10,30,15,40,50]

// var l =array.length;
//var newArr=[]

// for(var i=0;i<l;i++)
// {
//     console.log(i);
// }
//array.forEach((e)=>{console.log(e);})

// newArr = array.filter((e)=>{return e>15})
// console.log(newArr);

// newArr = array.findIndex((e)=>{return e>15})
// console.log(newArr);

// newArr = array.map((e)=>{return e*10})
// console.log(newArr);

//DOM

//document object model
//elemennts
// var demo =document.getElementById("demo");
// console.log(demo);
// var cs = Array.from(document.getElementsByClassName("c"))
// console.log(cs);
// document.querySelector(".c")

// var inputs = document.getElementsByName("gender")
// console.log(inputs);

// var link = document.getElementById("link").href
// console.log(link);

// var p = document.querySelector("p")
// p.classList.toggle()
// console.log(p);

//elment.style.color="red"
// var demo = document.getElementById("demo").textContent="<b>demo</b>"
// console.log(demo);

//query
// $("p").click(function(){
//     $(this).hide(500,()=>{
//         $("b").hide(500)
//     });
    
// })

// var a =[1,2,3,4,5,]
// console.log(...a);