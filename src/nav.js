
import { animateElement, animation } from "./animation.js";
import { direction } from "./scroll.js";
import MyLog from "./mylog.js";

const logger = new MyLog('Navigation');

const fadeNavigationBackdrop = (navigationBackdrop, scroller) => {
    const scrollTop = scroller.getScrollLength();
    if(scrollTop > 1) {
        if(!navigationBackdrop.classList.contains("faded-in")) {
            animateElement(navigationBackdrop, animation.keyframe.fadeInByXPercent(0.95), animation.options.durationXMsAndPermanent(350));
            navigationBackdrop.classList.add("faded-in");
        } 
    } else {
        if(navigationBackdrop.classList.contains("faded-in")) {
            animateElement(navigationBackdrop, animation.keyframe.fadeOutByXPercent(0.95), animation.options.durationXMsAndPermanent(350));
            navigationBackdrop.classList.remove("faded-in"); 
        }
    } 
}

const fadeNavigation = (navigationBar, navigationBackdrop, scroller) => {
    const scrollTop = scroller.getScrollLength();
    const scrollDirection = scroller.getScrollDirection();
    const navigationBarHeight = navigationBar.offsetHeight;
    if(scrollDirection == direction.down) {
        if(scrollTop > 350) {
            if(!navigationBar.classList.contains('drawn-up')){
                animateElement(navigationBar, animation.keyframe.drawUpByXPixels(navigationBarHeight), animation.options.durationXMsAndPermanent(250));
                animateElement(navigationBackdrop, animation.keyframe.drawUpByXPixels(navigationBarHeight), animation.options.durationXMsAndPermanent(250));
                navigationBar.classList.add('drawn-up');
            }
        }
    } else if (scrollDirection == direction.up || scrollDirection == direction.none) {
        if(navigationBar.classList.contains('drawn-up')){
            animateElement(navigationBar, animation.keyframe.drawDownByXPixels(navigationBarHeight), animation.options.durationXMsAndPermanent(250));
            animateElement(navigationBackdrop, animation.keyframe.drawDownByXPixels(navigationBarHeight), animation.options.durationXMsAndPermanent(250));
            navigationBar.classList.remove('drawn-up');
        }
    }
}


const fadeNavigationBackdropCallback = (navigationBackdrop, scroller) => {
    return () => {
        fadeNavigationBackdrop(navigationBackdrop, scroller);
    }
}

const fadeNavigationCallback = (navigationBar, navigationBackdrop, scroller) => {
    return () => {
        fadeNavigation(navigationBar, navigationBackdrop, scroller); 
    }
}

export { fadeNavigationBackdropCallback, fadeNavigationBackdrop, fadeNavigation, fadeNavigationCallback};