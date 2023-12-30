import { animateElement, animation } from "./animation.js";

const dropNavigationDropdown = (navigationDropdownBar) => {
    document.body.classList.add('overflow-hidden');
    navigationDropdownBar.classList.remove('hidden');
}

const liftNavigationDropdown = (navigationDropdownBar) => {
    document.body.classList.remove('overflow-hidden');
    navigationDropdownBar.classList.add('hidden');
}

const initializeNavigationDropdown = (navigationDropdownObject) => {
    const animationSpeed = 200;
    const navigationDropdownBar = navigationDropdownObject.navigationDropdownBar;
    const navigationDropdownButton = navigationDropdownObject.navigationDropdownButton;
    const navigationDropdownBurger = navigationDropdownObject.navigationDropdownBurger;
    const navigationDropdownXMark = navigationDropdownObject.navigationDropdownXMark;

    navigationDropdownButton.addEventListener('click', () => {
        if(navigationDropdownButton.classList.contains('dropdown-dropped')) {
            animateElement(navigationDropdownBurger, animation.keyframe.fadeInRotateByCounterClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
            animateElement(navigationDropdownXMark, animation.keyframe.fadeOutRotateByCounterClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
            liftNavigationDropdown(navigationDropdownBar);
            navigationDropdownButton.classList.remove('dropdown-dropped');
        } else {
            animateElement(navigationDropdownBurger, animation.keyframe.fadeOutRotateByClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
            animateElement(navigationDropdownXMark, animation.keyframe.fadeInRotateByClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
            dropNavigationDropdown(navigationDropdownBar);
            navigationDropdownButton.classList.add('dropdown-dropped');
        }
        /*
        navigationDropdownBar.addEventListener('touchend', ()=>{
            if(navigationDropdownButton.classList.contains('dropdown-dropped')) {
                animateElement(navigationDropdownBurger, animation.keyframe.fadeInRotateByCounterClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
                animateElement(navigationDropdownXMark, animation.keyframe.fadeOutRotateByCounterClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
                liftNavigationDropdown(navigationDropdownBar);
                navigationDropdownButton.classList.remove('dropdown-dropped');
            }
        });
        */
        navigationDropdownBar.addEventListener('click', ()=>{
            if(navigationDropdownButton.classList.contains('dropdown-dropped')) {
                animateElement(navigationDropdownBurger, animation.keyframe.fadeInRotateByCounterClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
                animateElement(navigationDropdownXMark, animation.keyframe.fadeOutRotateByCounterClockwise, animation.options.durationXMsAndPermanent(animationSpeed));
                liftNavigationDropdown(navigationDropdownBar);
                navigationDropdownButton.classList.remove('dropdown-dropped');
            }
        });
    });
}

export default initializeNavigationDropdown;