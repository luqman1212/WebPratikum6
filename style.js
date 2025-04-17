document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        const excerpt = button.previousElementSibling;
        const fullContent = excerpt.querySelector('.full-content');
        const originalExcerpt = excerpt.textContent.split('...')[0] + '...'; // Simpan teks excerpt awal

        button.addEventListener('click', () => {
            if (fullContent.style.display === 'none' || fullContent.style.display === '') {
                fullContent.style.display = 'inline';
                excerpt.firstChild.nodeValue = ''; // Hapus teks excerpt
                button.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                excerpt.firstChild.nodeValue = originalExcerpt; // Kembalikan teks excerpt awal
                button.textContent = 'Read More';
            }
        });
    });
});