window.addEventListener('load', () => {
    // Находим блок загрузки (проверь, как он называется у тебя в HTML)
    const preloader = document.querySelector('.loader') || document.getElementById('preloader') || document.querySelector('[class*="load"]');

    if (preloader) {
        preloader.style.display = 'none'; // Просто скрываем его
    }
});
