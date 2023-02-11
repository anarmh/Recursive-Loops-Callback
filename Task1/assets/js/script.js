"use strict";

let user1 ={
    name:"Anar",
    surname:"Huseynov",
    age:36
};
let user2 ={
    name:"Tunar",
    surname:"Huseynli",
    age:25
};
let user3 ={
    name:"Elnar",
    surname:"Huseynli",
    age:15
};

let users=[user1,user2,user3];


function getUsersAgeByDate(users,calback){

    const today = new Date();
   
    
    
    for (const item of users) {
        if(calback(item)){
            
            return Math.abs(today.getFullYear - item.age);
        }
        
    }
}


console.log(getUsersAgeByDate(users,m=>m.age>20));
