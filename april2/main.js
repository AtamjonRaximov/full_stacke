// fetch("https://api.telegram.org/bot6452901767:AAFBII1hI9N6k7_o1zpvOCGfQbpdetlF9sI/getUpdates")
// .then(savol => savol.json())
// .then(malumot => console.log(malumot))
// .catch(xato => {
//     console.error("Xatolik:", xato);
//     console.log("Xatolik haqida qo'shimcha ma'lumot:", xato.message);
// });




let botToken = "6452901767:AAFBII1hI9N6k7_o1zpvOCGfQbpdetlF9sI";
    let chatId = "1960543012"; 
    let url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    document.getElementById('userForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const ism = document.getElementById('ism').value;
      const familya = document.getElementById('familya').value;
      const yosh = document.getElementById('yosh').value;
      const telefon = document.getElementById('telefon').value;

      const message = `
📝 Yangi foydalanuvchi ma'lumotlari:    
👤 Ism: ${ism}
👨‍👩‍👦 Familya: ${familya}
🎂 Yosh: ${yosh}
📞 Telefon: ${telefon}
      `;
      

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          console.log("Ma'lumot yuborildi ✅");
          document.getElementById('userForm').reset();
        } else {
          console.log("Xatolik yuz berdi ❌");
          
        }
      })
      .catch(error => {
        console.error(error);
        console.log("Xatolik yuz berdi ❌");
        
      });
    });