/* Animation Keyframes - series of transitions */
const translateFromLeftToRight = [
    {transform: 'translateX(0%)'},
    {transform: 'translateX(100%)'}
];
const translateFromRightToLeft = [
    {transform: 'translateX(100%)'},
    {transform: 'translateX(0%)'}
];
const fadeIn85 = [
    {opacity: 0},
    {opacity: 0.85}
]
const fadeOut85 = [
    {opacity: 0.85},
    {opacity: 0}
]
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
        fadeIn85: fadeIn85,
        fadeOut85: fadeOut85,
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