// const arr=[1,4,3,5,6,7,3,10,20,12,3,4,5,6,7];

// let max=0;
// arr.forEach(element=>{
//     // max=max<element?element:max;
//     max=Math.max(max,element);
// });
// console.log(max)

// same problem can be solved by reduce method

const arr=[1,4,3,5,6,7,3,10,20,12,3,4,5,6,7];

const max=arr.reduce((acc,curr)=>Math.max(acc,curr));
console.log(max);

const arr2=[1,2,3,5,4,6,78,12]
console.log(Math.max(...arr2));

console.log(Math.max(...arr,...arr2))