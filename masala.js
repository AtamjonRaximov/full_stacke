let uzb = {
    maydoni : 448900,
    axolisi : 35650000,
    poytaxti : "Toshkent",
    viloyatlari : {
        "Andijon": {
            shaharlari: ["Asaka", "Andijon", "Shahrixon" ],
            maydon : 4027,
            markazi : "Andijon",
            axolisi : 3420000,
        },
        "Farg'ona": {
            shaharlari: ["Qo'qon", "Farg'ona", "Dang'ara"],
            maydon : 6800,
            markazi : "Farg'ona",
            axolisi : 4123000,
        },
        "Namangan" : {
            shaharlari : ["Chust", "Namangan", "Kosonsoy"],
            maydon : 7900,
            markazi : "Namangan",
            axolisi : 3100000,
        },
        "Toshkent": {
            shaharlari : ["Zangiota", "Toshkent", "Qibray"],
            maydon : 15300,
            markazi : "Toshkent",
            axolisi : 6150000,
        },
        "Sirdaryo": {
            shaharlari : ["Yangiyer", "Gulistin", "Sirdaryo"],
            maydon : 4028,
            markazi : "Guliston",
            axolisi : 914000,
        },
        "Jizzax": {
            shaharlari : ["Do'stlik", "Jizzah", "Zomin"],
            maydon : 21200,
            markazi : "Jizzax",
            axolisi : 1500000,
        },
        "Samarqand": {
            shaharlari : ["Ishtixon", "Samarqand", "Jomboy"],
            maydon : 16400,
            markazi : "Samarqand",
            axolisi : 4159000,
        },
        "Qashqadaryo": { 
            shaharlari : ["Shahrisabiz", "Qarshi", "Kitob"], 
            maydon : 28500,
            markazi : "Qarshi",
            axolisi : 3500000,
        },
        "Surxandaryo": {
            shaharlari: ["Denov", "Termiz", "Boysun"],
            maydon : 20000,
            markazi : "Termiz",
            axolisi : 3000000,
        },
        "Buxoro": {
            shaharlari: ["G'ishdivon", "Buxoro", "Vobkent"],
            maydon : 40000,
            markazi : "Buxoro",
            axolisi : 2000000,
        },
        "Navoiy": {
            shaharlari : ["Zarafshon", "Navoiy", "Uchquduq"],
            maydon : 111100,
            markazi : "Navoiy",
            axolisi : 1075000,
        },
        "Xorazim": {
            shaharlari : ["Xiva", "Urganch", "Xazorasp"],
            maydon : 6300,
            markazi : "Urganch",
            axolisi : 2000000,
        },

        "Qoraqolpog'iston" : {
            shaharlari : ["Xo'jali", "Nukus", "Qo'ng'irot"], 
            maydon : 166000,
            markazi : "Nukus",
            axolisi : 2000000,
        }
    },
    telefonKodi : "+998"
}


// 1) Prompt yordamida berilgan so'rovga tegishli malumotlarni chiqarib beramiz
// Nukus deb yozilsa => Qoraqolpog'iston
// Qoraqolpog'iston deb yozilsa => maydoni, aholisi, markazi
// 2) Urganch deb yozilsa axolisi yoki maydoni boyicha nechinchi o'rindaligini
// chiqarishimiz kerak boladi
// 3) telefonKodi yozilsa uzbekistan telefon kodi chiqishi kerak


let userInput = prompt("So‘rov kiriting:").trim();


if (userInput.toLowerCase() === "telefonkodi") {
    alert(`O‘zbekiston telefon kodi: ${uzb.telefonKodi}`);
} 


else if (uzb.viloyatlari[userInput]) {
    let v = uzb.viloyatlari[userInput];
    alert(`Maydoni: ${v.maydon} km²\nAholisi: ${v.axolisi}\nMarkazi: ${v.markazi}`);
} 

else {
    let found = Object.entries(uzb.viloyatlari).find(([vil, data]) => data.shaharlari.includes(userInput));
    alert(found ? found[0] : "Bunday shahar yoki viloyat topilmadi.");
}