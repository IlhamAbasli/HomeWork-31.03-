//#region JS

// "use strict";

// let users = [
//   {
//     name: "Tunzale",
//     address: "Azadliq",
//     age: 25,
//   },

//   {
//     name: "Semed",
//     address: "Ehmedli",
//     age: 27,
//   },

//   {
//     name: "Meryem",
//     address: "Dernegul",
//     age: 23,
//   },

//   {
//     name: "Haci",
//     address: "Bileceri",
//     age: 29,
//   },

//   {
//     name: "Nurlan",
//     address: "Nerimanov",
//     age: 21,
//   },
// ];

// function searchUsersByName(str){
//     setTimeout(() => {
//         let result = users.filter(m => m.name.includes(str));
//         console.log(result);
//     }, 1000);
// }

// searchUsersByName("u");

// let ul = document.querySelector("ul");

// function getUsers(datas){
//     let str = "";
//     datas.forEach(data => {
//         str += `<li class="list-group-item"><b>${data.name} — ${data.address} — ${data.age}</b></li>`
//      });
//      ul.innerHTML = str;
// }

// function createUser(user){
//     return new Promise((resolved,rejected)=>{
//         setTimeout(() => {
//             users.push(user);

//             let error = true;

//             if(!error){
//                 resolved(users);
//             }else{
//                 rejected("Something is wrong");
//             }
//         }, 1000);
//     })
// }

// createUser({name: "Oruc",address: "Yasamal",age: 26}).then(response=>{
//     getUsers(response);
// }).catch(err=> {
//     console.log(err);
// })

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let ul = document.querySelector("ul");

// async function getAllPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const datas = await response.json();
//   let str = "";
//   datas.forEach((data) => {
//     str += `<li class="list-group-item"><b>${data.id} — ${data.title} — ${data.body}</b></li>`;
//   });
//   ul.innerHTML = str;
// }

// getAllPosts();

//#endregion

//#region Jquery

$(function () {
  $("button").click(function () {
    $.get("https://jsonplaceholder.typicode.com/posts", function (datas) {
          let str = "";
          datas.forEach(data => {
              str += `<li class="list-group-item"><b>${data.id} — ${data.title} — ${data.body}</b></li>`
           });
           $("ul").html(str);
    });
  });
});

//#endregion
