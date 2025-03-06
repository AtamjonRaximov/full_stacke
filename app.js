//2-misol
// let ism_royxat = ["ahror","atamjon","alisher"]
// let kirit=prompt("ism kirit:")

// if (ism_royxat.includes(kirit)){
//     console.log(`ha bunaqa ${kirit} bor`)
// }
// else{
//     console.log(`yuq unaqa ${kirit} ism yuq`);

// }

//3misol
// let ism_royxat = ["ahror","atamjon","alisher"]

// for(let i =0; i < ism_royxat.length;i++){
//     console.log(ism_royxat[i]+"bek");

// }

//4-misol
// let lsit =[]
// while(true){
//     let region = prompt("viloyatingizni kiriting: agar kirtishni to'xtatmoqchi bo'lsangiz no deb yozing")

//     lsit.push(region.toLowerCase())
//     if(region =="no"){
//         break
//     }
// }

// console.log(lsit);

//5-misol
// let meyor = 20;

// let input = prompt("soni kiritnimg:")

// if (input == meyor){
//     console.log("siz to'g'ri kiritiz");

// }
// else if(meyor < input){
//     console.log(` siz ${input-meyor} ta soni ko'p kiritgansiz`);

// }
// else if(meyor > input){
//     console.log(` siz ${meyor-input} ta soni kamroq son kiritgansiz`);

// }

//homework

// for (let i = 0; i < 9; i++) {
//   console.log(`9 X ${i} = ${9 * i}`);
// }

// let moveies =[
//       {"name": "harry poter" , "likes":299},
//       {"name": "eshmat", "likes":554},
//       {"name":"axmadkino", "likes":334}
// ]

// for (let i =0; i <moveies.length;i++){
//     console.log(`kinoning nomi ${moveies[i].name} likelari ${moveies[i].likes} ta`);

// }

//amaily 1mashq

// let my_array =[[false,true],[1,2],99,"yaxshi",23,22,33,2223,12,";lkk"]

// let couter=0

// for (let i =0 ; i < my_array.length;i++){
//     couter +=1
// }
// console.log(couter-1);

// let array =[[12,42,3,88,"j"],[12,2],"ddll",[33,32],true,23]
// let yangi =[]

// array.forEach((i)=>{
//     let res =Array.isArray(i)
//     if (res){
//         array.forEach((f)=>{
//             yangi.push(f)
//         })

//     }

// })
// console.log(yangi);

// let text = "Samarqand";
// let teskartext=[]

// for (let i = text.length-1; i >= 0; i--) {
//     teskartext += text[i]

// }
// console.log(teskartext);

// function drawTree(height) {
//     for (let i = 1; i <= height; i++) {
//         let spaces = " ".repeat(height - i);
//         let stars = "*".repeat(2 * i - 1);
//         console.log(spaces + stars);
//     }
// }

// // Archa balandligini kiritamiz
// drawTree(7);

// let lists=[]

// function toplamrandom(son){
//     for (let index = 0; index < array.length; index++) {
//         lists[index].push(Math.random(son))

//     }

// }
// console.log(lists);

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// lists.push(getRandomInt(3,6))

// console.log(lists);

// let num = 5;

// function outer() {
//     let num = 10;

//     function inner() {
//         num += 5;
//         console.log('Внутри inner:', num);
//     }

//     inner();
//     console.log('После inner в outer:', num);
// }

// console.log('Перед вызовом outer:', num);
// outer();
// console.log('После вызова outer:', num);

// let newli=document.querySelectorAll("li")

// newli.forEach(item =>{
//     item.textContent +=" darslar"

// })

// let lis =["Atamjon","diyorbekaka","alisher"]

// let ols =document.querySelector("ol")

// lis.forEach((nam) =>{
//     ols.innerHTML +=`<li>${lis}</li>`
// })

// let hisobla1 = document.querySelector(".input1");
// let hisobla2 = document.querySelector(".input2");
// let check = document.querySelector("#check");

// check.addEventListener("click", function () {
//     let n1 = new Date(hisobla1.value);
//     let n2 = new Date(hisobla2.value);

//     if (isNaN(n1) || isNaN(n2)) {
//         console.log("Iltimos, to'g'ri sana kiriting!");
//         return;
//     }

//     let farqKunlarda = Math.abs((n1 - n2) / (1000 * 60 * 60 * 24)); // Kun farqini olish

//     if (n1 > n2) {
//         console.log(`Men o'rtog'imdan ${farqKunlarda} kun katta man.`);
//     } else if (n1 < n2) {
//         console.log(`Men o'rtog'imdan ${farqKunlarda} kun kichik man.`);
//     } else {
//         console.log("Biz teng yoshdamiz!");
//     }
// });

// let hisobla1 = document.querySelector("#n1").value;
// let hisobla2 = document.querySelector("#n2").value;
// let rang = document.querySelector("#color");
// let aylan = document.querySelector("#aylan");
// let tort = document.querySelector("#tort");
// let tortburchak = document.querySelector("#tortburchak");

// tort.addEventListener("click", function () {
//     if (hisobla1 && hisobla2) {
//         tortburchak.style.width = width + "px";
//         tortburchak.style.height = height + "px";
//         tortburchak.style.display = "block";
//     } else {
//         alert("Iltimos, width va height kiriting!");
//     }





 
// });

// function t_yasa() {
//     let n1 = document.getElementById("n1").value;
//     let n2 = document.getElementById("n2").value;
//     let tortburchak = document.getElementById("tortburchak");
//     let rang = document.getElementById("rang").value;

//     if (n1 && n2 && tortburchak) {
//         tortburchak.style.width = n1 + "px";
//         tortburchak.style.height = n2 + "px";
//         tortburchak.style.display = "block";
//         tortburchak.style.background=rang;
   
// }}
// function a_yasa() {
//     let n1 = document.getElementById("n1").value;
//     let n2 = document.getElementById("n2").value;
//     let rang = document.getElementById("rang").value;
//     let aylana = document.getElementById("aylana");
   


//     if (n1 && n2 && rang) {
//         aylana.style.width = n1 + "px";
//         aylana.style.height = n2 + "px";
//         aylana.style.display = "block";

//         if (n1 && n2) {
//             aylana.style.borderRadius = n1+n2+"px"; 
//             aylana.style.background = rang; 
//         }
        
//     } 
// }
