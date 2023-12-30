import MyLog from './mylog.js';

const logger = new MyLog('Scroller');

const direction = {
    up: 'up',
    down: 'down',
    none: 'none',
}

// Scroller is a class responsible for handling scroll events and actions related to scrolling in general
class Scroller {
    isInitialized;
    isScrolling;
    callbackOnEndArray;
    callbackOnStartArray;
    callbackDuringArray;
    scrollTimeout;
    scrollDirection;
    timeout;

    constructor() {
        this.isScrolling = false;
        this.callbackOnEndArray = [];
        this.callbackOnStartArray = [];
        this.callbackDuringArray = [];
        this.scrollDirection;
        this.scrollLength = window.scrollY || document.documentElement.scrollTop;
        this.timeout = 100;
        this.scrollTimeout = null;

        document.addEventListener("scroll", (event) => {

            const newScrollLength = window.scrollY || document.documentElement.scrollTop;
            const scrollDifference = newScrollLength - this.scrollLength;
            
            if(!this.isInitialized) {
                setTimeout(() => this.isInitialized = true, this.timeout);
                return;
            } 

            if(!this.isScrolling) {
                this.isScrolling = true;
                this.scrollDirection = scrollDifference > 0 ? direction.down : direction.up;
                this.callbackOnStartArray.forEach(callback => callback());
            }
    
            clearTimeout(this.scrollTimeout);
    
            this.scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
                this.scrollDirection = direction.none;
                this.callbackOnEndArray.forEach(callback => callback());
            }, this.timeout);

            this.scrollLength = newScrollLength;
        });

        this.loopCallbackDuring();
    }

    bindCallbackOnScrollStart(callback){
        this.callbackOnStartArray.push(callback);
    }

    bindCallbackOnScrollEnd(callback){
        this.callbackOnEndArray.push(callback);
    }

    bindCallbackOnScrollDuring(callback) {
        this.callbackDuringArray.push(callback);
    }

    loopCallbackDuring() {
        if(this.isScrolling){
            this.callbackDuringArray.forEach(callback => callback());
        }
        setTimeout(() => this.loopCallbackDuring(), this.timeout);
    }

    getIsScrolling(){
        return this.isScrolling;
    }

    getCallbacks(){
        return {
            callbackOnEndArray: this.callbackOnEndArray,
            callbackOnStartArray: this.callbackOnStartArray,
        }
    }

    getScrollLength(){
        return this.scrollLength;
    }

    getScrollDirection(){
        return this.scrollDirection;
    }

    setScrollTimeout(timeout) {
        this.timeout = timeout;
    }

    toggleScroll(){
        document.body.classList.toggle('overflow-y-hidden');
    }
}

export { direction }; 
export default Scroller;