document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
        } else {
            header.style.backgroundColor = '#333';
        }
    });     
});