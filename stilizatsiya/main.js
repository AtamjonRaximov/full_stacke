document.addEventListener("DOMContentLoaded", () => {
    let tabs = document.querySelectorAll(".tab .link a");

    tabs.forEach(tab => {
        tab.addEventListener("click", (event) => {
            event.preventDefault(); 
            let parentTab = tab.closest(".tab");


            if (parentTab.classList.contains("active")) {
                parentTab.classList.remove("active");
            } else {
                
                document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

                parentTab.classList.add("active");
            }
        });
    });
});
