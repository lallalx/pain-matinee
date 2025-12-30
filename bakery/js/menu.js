const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

if (hamburger && nav && overlay) {

  // 開閉
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // 背景クリックで閉じる
  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });

  // メニュークリックで閉じる
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
}
