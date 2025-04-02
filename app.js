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

// 1-masla

// a =document.querySelectorAll("#parent > div")
// let n ={}

// a.forEach(elem => {
//     n[elem.textContent] = elem.dataset.num

// });

// console.log(n);

//2-masala

// document.getElementById("toggleBtn").addEventListener("click", function () {
//   let div = document.getElementById("one");
//   div.style.display = div.style.display === "none" ? "block" : "none";
// });

// let art=document.querySelector("article")

// Array.from(art.children).forEach((elem)=>{
//     console.log(elem.classList.add("akajon"));

// })

// let t=document.querySelector("#tex")
// let p=document.querySelector("#pas")
// let n=document.querySelector("#num")
// let d=document.querySelector("#dat")
// let c=document.querySelector("#chec")
// let w=document.querySelector("#wek")
// let e=document.querySelector("#ema")
// let r=document.querySelector("#rad")
// let ra=document.querySelector("#ran")
// let re=document.querySelector("#res")
// let te=document.querySelector("#te")
// let ti=document.querySelector("#tim")
// let s=document.querySelector("#se")

// function t1(){
//     console.log("1)",t.type);

// }
// function p2(){
//     console.log("2)",p.type);

// }
// function n3(){
//     console.log("3)",n.type);

// }
// function d4(){
//     console.log("4)",d.type);

// }
// function chec5(){
//     console.log("5)",c.type);

// }
// function week6(){
//     console.log("6)",w.type);

// }
// function emai7(){
//     console.log("7)",e.type);

// }
// function rad8(){
//     console.log("8)",r.type);

// }
// function ran9(){
//     console.log("9)",ra.type);

// }
// function res10(){
//     console.log("10)",re.type);

// }
// function tel11(){
//     console.log("11)",te.type);

// }
// function tim12(){
//     console.log("12)",ti.type);

// }
// function se13(){
//     console.log("13)",s.type);

// }

// let yoz = document.getElementById("buttonga_yoz");
// let chiqar_input = document.getElementById("chiqar_input");

// function input_bos() {

//   let qiymat = document.getElementById("inputt").value;

//   if (qiymat) {
//     if (qiymat) {
//         let sum = parseInt(chiqar_input.value) || 0;
//         if (qiymat == "hello") {
//           yoz.innerText = qiymat;
//           chiqar_input.value = sum + 10000;
//         }
//         else if (qiymat == "taxi") {
//           yoz.innerText = qiymat;
//           chiqar_input.value = sum + 15000;
//         }
//         else if (qiymat == "bus") {
//           yoz.innerText = qiymat;
//           chiqar_input.value = sum + 2000;
//         }

//       }
// }}
// function input_tozala(params) {
//     chiqar_input.value = ""
//     location.reload()

// }

// function input_yubor(params) {

//     location.reload()

// }

// 1-masala
// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") document.activeElement.blur();
//     if (e.key === "Enter" && [document.querySelectorAll("input")].every(i => i.value.trim())) {
//         e.preventDefault();
//        let sent= document.getElementById("headerid").submit();
//     }
// });

// 2-masala
// document.addEventListener("keydown", function (event) {
//   if (event.key.toLowerCase() === "a")
//     document.getElementById("imga").style.display = "block";
//   if (event.key.toLowerCase() === "s")
//     document.getElementById("imgs").style.display = "block";
//   if (event.key.toLowerCase() === "d")
//     document.getElementById("imgd").style.display = "block";
//   if (event.key.toLowerCase() === "w")
//     document.getElementById("imgw").style.display = "block";
// });

// 3-masala
// document.addEventListener("keydown", function(event) {
//     let car = document.getElementById("car");
//     let carLeft = car.offsetLeft;

//     if (event.key === "a") {
//         carLeft -= 50;
//     }
//     if (event.key === "d") {
//         carLeft += 50;
//     }
//     if (event.key.toLowerCase() === "w") {
//         let main = document.getElementById("maina");
//         // main.style.animation = "moveMain 1s linear infinite";
//     }

//     car.style.left = carLeft + "px";
// });

// 4-masala
// let range = document.getElementById("range");

// document.addEventListener("wheel", function(event) {
//     let size = parseInt(range.value);

//     if (event.deltaY < 0) {
//         size += 5;
//     } else {
//         size -= 5;
//     }

//     if (size < 10) size = 10;
//     if (size > 200) size = 200;

//     range.value = size;
//     dot.style.width = size + "px";
//     dot.style.height = size + "px";
// });

// 5-masala
// let timer = document.getElementById("timer");
// let startPauseBtn = document.getElementById("startPause");

// let time = 0;
// let running = false;
// let interval;

// function updateTimer() {
//   time += 0.01;
//   timer.textContent = time.toFixed(2);
// }

// function toggleTimer() {
//   if (running) {
//     clearInterval(interval);
//     startPauseBtn.textContent = "Start";
//   } else {
//     interval = setInterval(updateTimer, 10);
//     startPauseBtn.textContent = "Pause";
//   }
//   running = !running;
// }

// function resetTimer() {
//   clearInterval(interval);
//   time = 0;
//   timer.textContent = "0";
//   startPauseBtn.textContent = "Start";
//   running = false;
// }

// startPauseBtn.addEventListener("click", toggleTimer);

// document.addEventListener("keydown", function (event) {
//   if (event.code === "Space") {
//     toggleTimer();
//     event.preventDefault();
//   }
//   if (event.ctrlKey) {
//     resetTimer();
//   }
// });



// 6-masala
document.addEventListener("keydown", function(event) {
    let keyMap = {
        "A": "C",
        "W": "C#",
        "S": "D",
        "E": "D#",
        "D": "E",
        "F": "F",
        "T": "F#",
        "G": "G",
        "Y": "G#",
        "H": "A",
        "U": "A#",
        "J": "B"
    };

    let note = keyMap[event.key.toUpperCase()];
    if (note) {
        let audio = document.getElementById(note);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            audio.play().catch(error => console.log("Audio o‘ynashga ruxsat yo‘q:", error));
        }
    }
});
