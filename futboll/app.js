function getFifaCode() {
  const userInput = document.getElementById("countryInput").value.trim();

  if (!userInput) {
    document.getElementById("result").textContent =
      "Iltimos, davlat nomini kiriting!";
    document.getElementById("flag").innerHTML = "";
    return;
  }

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const country = data.find(
        (c) => c.name?.common.toLowerCase() === userInput.toLowerCase()
      );

      if (country) {
        const fifaCode = country.fifa || "FIFA kodi mavjud emas"; // FIFA kodi olish
        // Natija va bayroqni ko'rsatish
        document.getElementById(
          "result"
        ).textContent = `${country.name.common} -> FIFA Kodi: ${fifaCode}`;
        const flagUrl = country.flags?.svg || "";
        if (flagUrl) {
          document.getElementById(
            "flag"
          ).innerHTML = `<img src="${flagUrl}" alt="Flag of ${country.name.common}" />`;
        } else {
          document.getElementById("flag").innerHTML = "Bayroq mavjud emas.";
        }
      } else {
        document.getElementById("result").textContent =
          "Bunday davlat topilmadi.";
        document.getElementById("flag").innerHTML = "";
      }
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
      document.getElementById("result").textContent =
        "Xatolik yuz berdi, iltimos qayta urunib ko‘ring.";
      document.getElementById("flag").innerHTML = "";
    });
}
