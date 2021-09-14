// For toggling mobile menu
function toggleMobileMenu() {
    var item = document.getElementById("mobile-items-container-navbar");
    const addCSS = s => document.head.appendChild(document.createElement("style")).innerHTML=s;

    if (item.style.display === "none") {
        item.style.display = "flex";

        // Add overflow-y as hidden so user can't scroll while the mobile menu is open
        addCSS("body{overflow-y: hidden;}")
    } else {
        item.style.display = "none";
        
        // Add overflow-y as scroll so the user can scroll once the menu has been closed 
        addCSS("body{overflow-y: scroll;}")
    }
}