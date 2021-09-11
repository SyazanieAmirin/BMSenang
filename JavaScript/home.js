function toggleMobileMenu() {
    var item = document.getElementById("sidebar-items-container");

    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}