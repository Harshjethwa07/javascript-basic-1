// let age = Number(prompt("enter your age"));
// console.log(age); 




//swap two variables via 3 method 

// //first method
// let a = 10;
// let b = 20;
// let c;

// c = a;// a=10,c= 10;
// a = b;//a=20,b=20;
// b = c;//b=10,c=20

// console.log(a);
// console.log(b);



//second method 



// let a = 10;
// let b = 20;

// a = a+b; //a=30
// b = a-b;//b= 10
// a = a-b;//a=20

// console.log(a,b);

//third method




//using the feature of JavaScript  destructuring assignment. 

let a = 10;
let b = 20;
[a,b] = [b,a]
console.log(a,b);
