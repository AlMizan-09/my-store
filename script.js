// Gallery kholne ke liye
function openGallery() {
    document.getElementById("galleryModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Background scroll band karne ke liye
}

// Gallery band karne ke liye
function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
    document.body.style.overflow = "auto"; // Scroll wapas chalu
}

// Modal ke bahar click karne par bhi band ho jaye
window.onclick = function(event) {
    let modal = document.getElementById("galleryModal");
    if (event.target == modal) {
        closeGallery();
    }
}
