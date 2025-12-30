const fadeins = document.querySelectorAll('.fadein');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    /* =========================
    フェードイン
    ========================= */
    fadeins.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight * 0.85) {
            el.classList.add('show');
        }
    });

    /* =========================
    ヘッダー演出
    ========================= */
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (window.scrollY > 120) {
        header.classList.add('is-small');
    } else {
        header.classList.remove('is-small');
    }
});
