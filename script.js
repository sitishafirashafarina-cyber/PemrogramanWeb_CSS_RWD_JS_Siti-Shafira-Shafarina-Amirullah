// Toggle konten pencemaran
function toggleContent(element) {
    const content = element.nextElementSibling;
    
    if (content.classList.contains('hidden')) {
        // Jika tersembunyi, tanya untuk menampilkan
        const show = confirm("Apakah Anda ingin menampilkan penjelasan ini?");
        if (show) {
            content.classList.remove('hidden');
        }
    } else {
        // Jika terlihat, tanya untuk menyembunyikan
        const hide = confirm("Apakah Anda ingin menyembunyikan penjelasan ini?");
        if (hide) {
            content.classList.add('hidden');
        }
    }
}

// Toggle mode tampilan
let isMessyMode = false;

function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.mode-button');
    
    if (isMessyMode) {
        body.classList.remove('messy-mode');
        button.textContent = 'Ubah ke Mode Berantakan';
        isMessyMode = false;
    } else {
        body.classList.add('messy-mode');
        button.textContent = 'Ubah ke Mode Rapi';
        isMessyMode = true;
    }
}