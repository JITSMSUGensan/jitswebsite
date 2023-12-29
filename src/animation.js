const translateFromLeftToRight = [
    {transform: 'translateX(0%)'},
    {transform: 'translateX(100%)'}
];

const translateFromRightToLeft = [
    {transform: 'translateX(100%)'},
    {transform: 'translateX(0%)'}
];

const fastAndPermanent = {duration: 100, fill: 'forwards', easing: 'ease-in-out'};
const skipAndPermanent = {duration: 0, fill: 'forwards', easing: 'ease-in-out'};

const animation = {
    keyframe: {
        translateFromLeftToRight: translateFromLeftToRight,
        translateFromRightToLeft: translateFromRightToLeft,
    },
    options: {
        fastAndPermanent: fastAndPermanent,
        skipAndPermanent: skipAndPermanent,
    },
};

const animateElement = (element, keyframe, options) => {
    element.animate(keyframe, options);
}

export { animation, animateElement };