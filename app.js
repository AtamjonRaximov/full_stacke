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

let num = 5;

function outer() {
    let num = 10;

    function inner() {
        num += 5;
        console.log('Внутри inner:', num);
    }

    inner();
    console.log('После inner в outer:', num);
}

console.log('Перед вызовом outer:', num);
outer();
console.log('После вызова outer:', num);
