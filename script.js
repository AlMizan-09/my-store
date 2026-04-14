function openCategory(name, ...images) {
    const gallery = document.getElementById('dynamic-gallery');
    const list = document.getElementById('product-list');
    const title = document.getElementById('gallery-title');
    
    title.innerText = name.toUpperCase() + " COLLECTION";
    list.innerHTML = ''; // Purana saaf karein

    images.forEach((imgSrc, index) => {
        list.innerHTML += `
            <div class="category-item-card">
                <img src="${imgSrc}" alt="Product">
                <h3>${name} Design ${index + 1}</h3>
                <div style="text-align:center; padding-bottom:15px;">
                    <button class="btn-order" onclick="sendToWA('${name}', '${imgSrc}')" style="width:80%;">Order on WhatsApp</button>
                </div>
            </div>
        `;
    });

    gallery.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Scroll disable
}

function closeGallery() {
    document.getElementById('dynamic-gallery').style.display = 'none';
    document.body.style.overflow = 'auto';
}
