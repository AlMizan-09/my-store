function showCategory(category, color) {
    // 1. Background badlo
    document.body.style.backgroundColor = color;

    // 2. Sari purani list chhupao
    document.querySelectorAll('.category-group').forEach(group => {
        group.classList.add('hide');
    });

    // 3. Agar 'all' hai toh default view dikhao, warna sirf select ki gayi category
    if(category !== 'all') {
        document.querySelector('.' + category).classList.remove('hide');
    } else {
        // 'all' ke liye aap purana grid view dikha sakte hain
        alert("Please select a specific category to see the full collection!");
    }
}
