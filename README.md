# Scroll Indicator

Here is how you can use the scroll indicator class in your website.
Simply add or import the minified ScrollIndicator class, then initiate it with the corresponding arguments (selector, position, backgroundColor, window).

```js 
// import the minified class
export default class ScrollIndicator { constructor(t, i, l, s) { this.selector = t, this.position = i, this.color = l, this.window = s, this.scrollBar = null, this.filling = null, this.init() } insertParentElement() { this.container = document.querySelector(this.selector), this.scrollBar = document.createElement("div"), this.scrollBar.classList.add("scroll-indicator"), this.scrollBar.style.background = "#eee", this.scrollBar.style.width = "100vw", this.scrollBar.style.height = "10px", this.scrollBar.style.position = "absolute", this.scrollBar.style.bottom = "0", this.container.insertAdjacentElement(this.position, this.scrollBar) } insertFillingElement() { this.filling = document.createElement("div"), this.filling.classList.add("scroll-indicator__bar"), this.filling.style.width = "0%", this.filling.style.height = "100%", this.filling.style.background = this.color, this.scrollBar.insertAdjacentElement("afterbegin", this.filling) } addScrollListener() { this.window.addEventListener("scroll", (() => { const t = this.getScrollPercentage(); this.filling.style.width = t + "%" })) } getScrollPercentage() { const t = window.innerHeight, i = document.body.scrollHeight - t; return (window.scrollY + 1) / i * 100 } init() { this.insertParentElement(), this.insertFillingElement(), this.addScrollListener() } }

// initiate the scroll indicator
const scrollIndicator = new ScrollIndicator('nav.nav', 'beforeend', '#71b9f0', window)
```