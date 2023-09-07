import ScrollIndicator from "./ScrollIndicator-min.js";

// solution 1
function injectScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const filling = document.createElement('div');
    filling.classList.add("scroll-indicator__bar");
    filling.style.width = "0px"
    filling.style.height = "100%";
    filling.style.background = "#71b9f0"
    
    scrollIndicator.insertAdjacentElement('afterbegin', filling);
    console.log(scrollIndicator);
    
    window.addEventListener('scroll', () => {
        // complete height, current bottom of viewport
        const windowHeight = window.innerHeight; // needs to be substracted from pageHeight
        const pageHeight = document.body.scrollHeight - windowHeight;
        const scrollHeight = window.scrollY + 1;
    
        const scrollPercentage = scrollHeight / pageHeight * 100;
    
        filling.style.width = scrollPercentage.toFixed(3) + "%";
    })
}

// call function
// injectScrollIndicator()

// solution 2 - class
const scrollIndicator = new ScrollIndicator('nav.nav', 'beforeend', '#71b9f0', window)