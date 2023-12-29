import { animation } from './animation.js';
import mylog from './mylog.js';

const logger = new mylog('Toggle');

// Toggle class handles the effects and callbacks for a toggle component
class Toggle {
    toggleBar; // the clickable toggle itself
    toggleButton; // the little thing that moves in the toggle
    toggleCallback; // a function that is called when toggle is clicked, passes the toggleState
    toggleState; // on or off

    constructor(toggleObject) {
        try {
            this.toggleBar = toggleObject.toggleBar;
            this.toggleButton = toggleObject.toggleButton;
            this.toggleCallback = toggleObject.toggleCallback ? toggleObject.toggleCallback : (state) => { logger.log(`Default Response - Switched to ${state}`) };
            this.toggleState = toggleObject.toggleState ? this.toggleInitialize(toggleObject.toggleState) : this.toggleInitialize(false);
            this.toggleBar.addEventListener('click', this.toggle.bind(this));
        } catch (error) {
            logger.error('Something wrong happened during construction');
            logger.error(error.message ? error.message : error);
        }
    }

    // right is assumed on
    toggleInitialize(newToggleState) {
        try {
            if(typeof newToggleState === 'boolean'){
                if(newToggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromLeftToRight, animation.options.skipAndPermanent);
                } else if(!newToggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromRightToLeft, animation.options.skipAndPermanent);
                } else {
                    throw new Error('toggleSkipAnimation: newToggleState is not a boolean');
                }
                this.toggleState = newToggleState;
                return newToggleState;
            } else {
                if(this.toggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromRightToLeft, animation.options.skipAndPermanent);
                } else if(!this.toggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromLeftToRight, animation.options.skipAndPermanent);
                } else {
                    throw new Error('toggleSkipAnimation: this.toggleState is not a boolean');
                }
                this.toggleState = !this.toggleState;
                return this.toggleState;
            }
        } catch (error) {
            logger.error('Something wrong happened during toggleSkipAnimation');
            logger.error(error.message ? error.message : error);
        }
    }

    toggle(newToggleState) {
        try {
            if(newToggleState && typeof newToggleState === 'boolean'){
                if(newToggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromLeftToRight, animation.options.fastAndPermanent);
                } else if(!newToggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromRightToLeft, animation.options.fastAndPermanent);
                } else {
                    throw new Error('toggle: newToggleState is not a boolean');
                }
                this.toggleCallback(newToggleState);
                this.toggleState = newToggleState;
                return newToggleState;
            } else {
                if(this.toggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromRightToLeft, animation.options.fastAndPermanent);
                } else if(!this.toggleState) {
                    this.toggleButton.animate(animation.keyframe.translateFromLeftToRight, animation.options.fastAndPermanent);
                } else {
                    throw new Error('toggle: this.toggleState is not a boolean');
                }
                this.toggleCallback(!this.toggleState);
                this.toggleState = !this.toggleState;
                return this.toggleState;
            }
        } catch (error) {
            logger.error('Something wrong happened during toggle');
            logger.error(error.message ? error.message : error);
        }
    }
}

export default Toggle;