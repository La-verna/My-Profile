// Mengambil semua tautan di navbar
const navLinks = document.querySelectorAll('nav ul li a');

// Mendapatkan URL halaman saat ini
const currentLocation = window.location.pathname;

// Menambahkan kelas 'active' ke tautan yang sesuai
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Menangani pengiriman formulir kontak jika berada di halaman kontak.html
if (currentLocation.includes('kontak.html')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi input
        if (!name || !email || !message) {
            alert("Semua field harus diisi!");
            return;
        }

        alert("Terima kasih telah menghubungi kami!"); // Menampilkan pesan
        this.reset(); // Mengosongkan formulir setelah pengiriman
    });
}

// Menambahkan efek saat menggulir
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});
