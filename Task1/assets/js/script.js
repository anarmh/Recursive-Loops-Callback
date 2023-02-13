"use strict";

let user1={

    name:"Anar",
    surname: "Huseynov",
    age: 36
}
let user2={

    name:"Tunar",
    surname: "Huseynli",
    age: 26
}
let user3={

    name:"Elnar",
    surname: "Huseynli",
    age: 15
}
let user4={

    name:"Masum",
    surname: "Huseynov",
    age: 16
}

let users=[user1,user2,user3,user4];


function getUserofData(users){
    let date=new Date();
    let year=date.getFullYear();

    for (const item of users) {
        let birthDate=year-item.age
        console.log(`Name: ${item.name} Surname: ${item.surname} BirthDate: ${birthDate}`);
    }

}

getUserofData(users.filter(m=>m.age>20));