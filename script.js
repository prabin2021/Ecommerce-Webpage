let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} has been added to your cart.`);
    console.log(cart);
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
