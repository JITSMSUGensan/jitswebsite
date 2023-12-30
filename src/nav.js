
import { animateElement, animation } from "./animation.js";
import MyLog from "./mylog.js";

const logger = new MyLog('Navigation');

const fadefadeNavigationBackdrop = (navigationBackdrop, scroller) => {
    const scrollTop = scroller.getScrollLength();
    if(scrollTop > 1) {
        if(!navigationBackdrop.classList.contains("faded-in")) {
            animateElement(navigationBackdrop, animation.keyframe.fadeInX(0.95), animation.options.durationXMsAndPermanent(350));
            navigationBackdrop.classList.add("faded-in");
        } 
    } else {
        if(navigationBackdrop.classList.contains("faded-in")) {
            animateElement(navigationBackdrop, animation.keyframe.fadeOutX(0.95), animation.options.durationXMsAndPermanent(350));
            navigationBackdrop.classList.remove("faded-in"); 
        }
    } 
}

const fadeNavigationBackdropCallback = (navigationBackdrop, scroller) => {
    return () => {
        fadefadeNavigationBackdrop(navigationBackdrop, scroller);
    }
}

export { fadeNavigationBackdropCallback, fadefadeNavigationBackdrop };