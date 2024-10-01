const texto = document.querySelector(".parallax-text");
const leaf = document.querySelector(".leaf");
const hill1 = document.querySelector(".hill1");
const hill4 = document.querySelector(".hill4");
const hill5 = document.querySelector(".hill5");

function getMovement() {
    const width = window.innerWidth;

    if (width <= 480) {
        return {
            texto: 1.2,
            leafX: 0.75,
            leafY: -0.50,
            hill5: 1,
            hill4: -1,
            hill1: 0.25,
        };
    } else if (width <= 768) {
        return {
            texto: 2,
            leafX: 1,
            leafY: -1,
            hill5: 1.25,
            hill4: -1.25,
            hill1: 0.5,
        };
    } else {
        return {
            texto: 2.5,
            leafX: 1.5,
            leafY: -1.5,
            hill5: 1.5,
            hill4: -1.5,
            hill1: 0.5,
        };
    }
}

function applyParallax() {
    const value = window.scrollY;
    const factors = getMovement();

    texto.style.marginTop = `${value * factors.texto}px`;
    leaf.style.transform = `translate(${value * factors.leafX}px, ${value * factors.leafY}px)`;
    hill5.style.transform = `translateX(${value * factors.hill5}px)`;
    hill4.style.transform = `translateX(${value * factors.hill4}px)`;
    hill1.style.transform = `translateY(${value * factors.hill1}px)`;
}

window.addEventListener("scroll", applyParallax);

