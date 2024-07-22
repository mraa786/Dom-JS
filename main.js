// console.log('Hello World')
// alert('All Team');
// console.error('this is error')
// console.warn('This is a Warning')


// var   WE CAN CHANGE VALUE,DECLEAR,REASIGN AGIN AGAIN AND AGAIN
// var age=89;
//  age=890
// console.log(age);


//LET WE CAN NOT REDECLARE BUT REASIGN VALUE
// let a=90;
// a=909
// console.log(a)

// CONST CAN NOT CHANGE VALUE OR ALSO CAN NOT REDECLARE
//  const aple=90;
//  console.log(aple)

// DATA TYPES  string, number, boolean, null,undefined, symbol

// const name ='asad';
// const age= 30;
// const rating= 4.5;
// const iscool =true;
// const x= null;
// const y= undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log( typeof rating )
// console.log(typeof iscool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// Concatenation
// const name ='asad';
// const age =30;
// console.log('My name is '+name+ ' and I am age '+ age+'')


// TEMPLATE STRING
// let text = `My name is ${name} and I am age ${age}`;
// console.log(text)
// console.log(`My name is ${name} and I am age ${age}`)
// console.log(name.length)
// console.log(name.toUpperCase());
// console.log(name.substring(0, 5));
// console.log(name.split(','));


//COMMENTS
// SINGAL LINE COMMENTS IS (//)
/* MULTI LINE COMMENT*/

//ARRAY
// const fruits = ['apples', 'oranges','pears',10,true]
// console.log(fruits[3])


// OBJECT
// const person ={
//     firstName: 'john',
//     lastName:'Doe',
//     age:30,
//     hobbies: ['music','movies','sports'],
//     address:{
//         stress:'60 main st',
//         sity:'Boston',
//         state:'MA'

//     }
// }

// console.log(person)
// console.log(typeof person)


// const todos = {
//      {
//         id: 1,
//         text:  'Take out trash',
//         iscompleted: true

//     },
//     {  
//         id: 1,
//         text:  'Take out trash',
//         iscompleted: true

//     },
//     {  
//         id: 1,
//         text:  'Take out trash',
//         iscompleted: true

//     }
// }


// For
// for(let i=0; i<= 10; i++){
//     console.log(`for loop number: ${i} `)
// }

// let i=0;
// while(i < 10){
//     console.log(`while loop number: ${i}`);
//     i++;
// }

// FOREACH, MAP, FILTER

// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(f);

// IF, else if, else STATEMENT
// const x= 20;

// if(x == 10){
//     console.log('x is 10');
// }
//  else if(x > 10){
//     console.log('x is greater than 10');
//  }
// else{
//     console.log('x is not 10');
// }


// const x = 0;
// const color = x>10 ?'red' : 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not blue and red');
//         break;
// }
 
// FUNCTION
//  function addNum( a ,b ){
//     return a+b;

//  }

//  console.log(addNum(89,45))


const addNum = ( a ,b )=>{
    console.log(a+b)

 }
addNum(89,45);