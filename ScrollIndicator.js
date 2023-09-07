export default class ScrollIndicator {
    constructor(selector, position, color, window) {
        this.selector = selector;
        this.position = position;
        this.color = color;
        this.window = window;
        this.scrollBar = null;
        this.filling = null;
        // init
        this.init()
    }
    insertParentElement() {
        this.container = document.querySelector(this.selector);
        this.scrollBar = document.createElement('div');
        this.scrollBar.classList.add('scroll-indicator');
        // style scrollbar
        this.scrollBar.style.background = '#eee';
        this.scrollBar.style.width = '100vw';
        this.scrollBar.style.height = '10px';
        this.scrollBar.style.position = 'absolute';
        this.scrollBar.style.bottom = '0';

        // insert scrollbar container
        this.container.insertAdjacentElement(this.position, this.scrollBar);
    }
    insertFillingElement() {
        this.filling = document.createElement('div');
        this.filling.classList.add('scroll-indicator__bar');
        this.filling.style.width = "0%";
        this.filling.style.height = "100%";
        this.filling.style.background = this.color;
        this.scrollBar.insertAdjacentElement('afterbegin', this.filling);
    }
    addScrollListener() {
        this.window.addEventListener('scroll', () => {
            const scrollPercentage = this.getScrollPercentage();
            this.filling.style.width = scrollPercentage + "%";
        })
    }
    getScrollPercentage() {
        const windowHeight = window.innerHeight;
        const pageHeight = document.body.scrollHeight - windowHeight;
        const scrollHeight = window.scrollY + 1;
        return scrollHeight / pageHeight * 100;
    }
    init() {
        this.insertParentElement();
        this.insertFillingElement();
        this.addScrollListener();
    }
}