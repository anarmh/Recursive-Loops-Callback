"use strict";

// function  getCount(num){
//     console.log(num);
//     if((num-1)>0);
//     getCount(num-1);
// }

// getCount(5);

// function getSumOfNumbers(num){

//     if(num==1){
//         return num;
//     }
//     else{
//         return num+ getSumOfNumbers(num-1);
//     }
// }

// console.log(getSumOfNumbers(6));

// function getFactorial(num){
//     if(num==1){
//         return num;
//     }
//     else{
//         return num*getFactorial(num-1)
//     }

// }
// console.log(getFactorial(3));

// let numbers=[1,2,3,4,5,6,7,8];

// numbers.forEach((element,index,arr) => {
//     // console.log('Index: ${index}, Element: ${element}');
//     numbers[index]=element*2;
// });
// console.log(numbers)

// for (const item of object) {
//     console.log(item);
// }

// let user1={

//     name:"Anar",
//     surname:"Huseynov",
//     age:"36"
// }
// let user2={

//     name:"Elnar",
//     surname:"Huseynov",
//     age:"10"
// }
// let user3={

//     name:"Tunar",
//     surname:"Huseynov",
//     age:"20"
// }

// let users=[user1,user2,user3];

// for (const item of users) {
//    if(item.age>20)
//    console.log('${item.name} ${item.surname}')

// }

// for (const item in users) {

// for (const key in item) {
//    console.log(key+"/"+ item[key]);
// }

// }

// users.forEach((element,index) => {

//     for (const item of element) {
//         console.log(key+ "/"+ element[key]+"/"+index)
//     }
// });

// for (const key in user) {
//    console.log(key+"/"+ user[key]);
// }

// let arr1=[1,2,3,4,5]
// console.log(arr1);
// let arr2=arr1;
// arr2[0]=10;
// console.log(arr1);

// let nums=[1,2,3,4,5,6];

// let result=nums.map(m=>{
//     return m*2;
// })
// console.log(nums);
// console.log(result);

// function getNumbers(n,m,...arr){
//     for (const item of arr) {
//         console.log(item+"/"+n);
//     }
// }
// getNumbers(1,2,3,4,5)

// let nums=[1,2,3,4,4,5];

// let copyArr={...nums};
// console.log(copyArr);

// let stu={
//     name:"Anar",
//     surname:"Huseynov"
// };

// let copyobj={...stu}
// console.log(copyobj);

// let user1 = {
//   name: "Anar",
//   surname: "Huseynov",
//   age: "36",
// };
// let user2 = {
//   name: "Elnar",
//   surname: "Huseynov",
//   age: "10",
// };
// let user3 = {
//   name: "Tunar",
//   surname: "Huseynov",
//   age: "20",
// };

// let users = [user1, user2, user3];

// const showAverageByAge = (arr) => {
//   let sumOfAge = 0;
//   for (const item of arr) {
//     sumOfAge += item.age;
//   }
//   return sumOfAge / arr.length;
// }

// console.log(showAverageByAge(users));

// function sumOffOdd(arr){
//     let sum=0;
//     for (const item of arr) {
//         if(item%2==0)
//         summ+=item;
//     }
//     return sum;
// }
// function sumOffEven(arr){
//     let sum=0;
//     for (const item of arr) {
//         if(item%2!=0)
//         summ+=item;
//     }
//     return sum;
// }
// function sumGreaterthanfour(arr){
//     let sum=0;
//     for (const item of arr) {
//         if(item>4)
//         summ+=item;
//     }
//     return sum;
// }

// let result=sumOffEven(nums);
// console.log(result);

// let nums=[1,2,3,4,5,6];

// const checkOdd = num=> num % 2 == 1;

// const checkEven=num=>num%2==0;

// const checkThanFour=num=>num>4;

// function sumOfNumbersByCondition(arr, calback) {
//   let sum = 0;
//   for (const item of arr) {
//     if (calback(item)) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(sumOfNumbersByCondition(nums,checkOdd));
// console.log(sumOfNumbersByCondition(nums,checkEven));
// console.log(sumOfNumbersByCondition(nums,checkThanFour));

// function sumOfNumbersByCondition(arr, calback1,calback2) {
//     let sum1 = 0;
//     let sum2=0;
//     for (const item of arr) {
//       if (calback1(item)) {
//         sum1 += item;
//       }
//     }

//     for (const item of arr) {
//         if (calback2(item)) {
//           sum2 += item;
//         }
//       }
//     return sum1+sum2;
//   }

//   console.log(sumOfNumbersByCondition(nums,checkOdd,checkEven));

let user1 = {
  name: "Anar",
  surname: "Huseynov",
  age: "36",
  email:"anar@gamil.com"
};
let user2 = {
  name: "Elnar",
  surname: "Huseynov",
  age: "10",
  email:"elnar@gamil.com"
};
let user3 = {
  name: "Tunar",
  surname: "Huseynov",
  age: "20",
  email:"tunar@gamil.com"
};
let users=[user1,user2,user3];

// function checkAge(age){
//     return age>18;
// }

function checkName(obj){
    return obj.name=="Tunar";
}


function getDataByFilters(users,calback){

    for (const item of users) {
        if(calback(item)){
            console.log(`${item.name} ${item.surname} ${item.age}`)
        }
        
    }
}


function checkEmail(obj){
    for (let i = 0; i < obj.email,length; i++) {
        if(obj.email[i]=="t"){
            return true;
        }
    }
    return false;
}

// getDataByFilters(users,checkEmail);
// getDataByFilters(users,m=>m.age>20);
// getDataByFilters(users,m=>m.name=="Anar");

let result=users.filter(m=>m.name=="Anar");
console.log(result);