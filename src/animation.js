/* Animation Keyframes - series of transitions */
const translateFromLeftToRight = [
    {transform: 'translateX(0%)'},
    {transform: 'translateX(100%)'}
];
const translateFromRightToLeft = [
    {transform: 'translateX(100%)'},
    {transform: 'translateX(0%)'}
];
const fadeInRotateByClockwise = [
    {opacity: 0, transform: 'rotate(0deg)'},
    {opacity: 1, transform: 'rotate(360deg)'},
];
const fadeInRotateByCounterClockwise = [
    {opacity: 0, transform: 'rotate(0deg)'},
    {opacity: 1, transform: 'rotate(-360deg)'},
];
const fadeOutRotateByClockwise = [
    {opacity: 1, transform: 'rotate(0deg)'},
    {opacity: 0, transform: 'rotate(360deg)'},
];
const fadeOutRotateByCounterClockwise = [
    {opacity: 1, transform: 'rotate(0deg)'},
    {opacity: 0, transform: 'rotate(-360deg)'},
];
const drawDownByXPixels = (x) => {
    return [
        {transform: `translateY(-${x}px)`},
        {transform: 'translateY(0px)'},
    ];
};
const drawUpByXPixels = (x) => {
    return [
        {transform: 'translateY(0px)'},
        {transform: `translateY(-${x}px)`},
    ];
};
const fadeInByXPercent = (x) => {
    return [
        {opacity: 0},
        {opacity: x},
    ];
};
const fadeOutByXPercent = (x) => {
    return [
        {opacity: x},
        {opacity: 0},
    ];
};
const fadeInTranslateYPixelsFromAbove = (x) => {
    return [
        {opacity: 0, transform: `translateY(-${x}px)`},
        {opacity: 1, transform: 'translateY(0px)'},
    ];
};
const fadeOutTranslateYPixelsToAbove = (x) => {
    return [
        {opacity: 1, transform: 'translateY(0px)'},
        {opacity: 0, transform: `translateY(-${x}px)`},
    ];
};
const fromAndTo = (from, to) => {
    return [
        from,
        to,
    ];
}

/* Animation Options - depict how a keyframe is animated */
const slowAndPermanent = {duration: 500, fill: 'forwards', easing: 'ease-in-out'};
const fastAndPermanent = {duration: 100, fill: 'forwards', easing: 'ease-in-out'};
const skipAndPermanent = {duration: 0, fill: 'forwards', easing: 'ease-in-out'};
const durationXMsAndPermanent = (x) => {return {duration: x, fill: 'forwards', easing: 'ease-in-out'}};

const animation = {
    keyframe: {
        translateFromLeftToRight: translateFromLeftToRight,
        translateFromRightToLeft: translateFromRightToLeft,
        fadeInRotateByClockwise: fadeInRotateByClockwise,
        fadeInRotateByCounterClockwise: fadeInRotateByCounterClockwise,
        fadeOutRotateByClockwise: fadeOutRotateByClockwise,
        fadeOutRotateByCounterClockwise: fadeOutRotateByCounterClockwise,
        drawDownByXPixels: drawDownByXPixels,
        drawUpByXPixels: drawUpByXPixels,
        fadeInByXPercent: fadeInByXPercent,
        fadeOutByXPercent: fadeOutByXPercent,
        fadeInTranslateYPixelsFromAbove: fadeInTranslateYPixelsFromAbove,
        fadeOutTranslateYPixelsToAbove: fadeOutTranslateYPixelsToAbove,
        fromAndTo: fromAndTo,
    },
    options: {
        slowAndPermanent: slowAndPermanent,
        fastAndPermanent: fastAndPermanent,
        skipAndPermanent: skipAndPermanent,
        durationXMsAndPermanent: durationXMsAndPermanent,
    },
};

/* Abstraction of the element.animate() */
const animateElement = (element, keyframe, options) => {
    element.animate(keyframe, options);
}

export { animation, animateElement };