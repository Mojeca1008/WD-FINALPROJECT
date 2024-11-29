document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.3s';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });
});   
   
function showForm(productName) {
    const formSection = document.getElementById('order-form');
    const productInput = document.getElementById('product');
    formSection.classList.remove('hidden');
    productInput.value = productName;
}