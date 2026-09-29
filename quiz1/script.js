// Menambahkan interaksi pada piringan hitam (vinyl)
document.addEventListener('DOMContentLoaded', () => {
    const vinyl = document.querySelector('.vinyl-record');
    const startBtn = document.getElementById('startBtn');

    // Efek ketika piringan hitam diklik (putaran jadi lebih cepat sementara)
    if (vinyl) {
        vinyl.addEventListener('click', () => {
            vinyl.style.animationDuration = '2s';
            setTimeout(() => {
                vinyl.style.animationDuration = '20s';
            }, 1000);
        });
    }

    // Pesan sambutan kecil di console browser saat halaman dimuat
    console.log("Welcome to Gadhiza's personal website!");
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efek Scroll Fade-In untuk elemen (Berlaku untuk Profile & Hometown)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Menargetkan elemen deskripsi atau galeri untuk animasi muncul perlahan
    const animatedElements = document.querySelectorAll('.description-box, .desc-content, .polaroid');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

});

