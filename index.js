//Use of Map() method/////
//Q.1.Find the square root of each element in an array?
// let arr=[4,9,16,25,64]
// let arr1=arr.map((currEle,index,array)=>{
//     return Math.sqrt(currEle)
// });
// console.log(arr1)
// Q.2.Multiply each element by 2 and return only those element which are greater then 10?
// let arr=[2,3,4,6,8]
// let arr1=arr.map((value,index,array)=>{
//     return value*2;
// }).filter((value)=>{
//     return value>10;
// })
// console.log(arr1)
// Use of Reduce() method/////
// let arr=[2,11,7,4,13]
// let sum=arr.map((value)=>{
//     return value*2;
// }).filter((value)=>{
//     return value>10;
// }).reduce((accumulator,value)=>{
//     return accumulator+=value;
// })
// console.log(sum)
//How to convert 2d or 3d array in 1d array?////
// let arr=[
//     ['Raja','kumar'],
//     ['Tony','stark'],
//     ['iron','man']
// ];
// let arr1=arr.reduce((accumulator,value)=>{
//      return accumulator.concat(value);
// })
// console.log(arr1)
console.log(new Date().toLocaleString());
console.log(new Date().toString());