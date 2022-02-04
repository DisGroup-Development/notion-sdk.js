const Annotation = require('./Annotation');
const Constants = require('../util/Constants');

/**
 * The Equation class
 */
class Equation {

    constructor(data) {

        /**
         * The type of the rich text
         * @type {Constants.RichTextTypes.EQUATION} type
         */
        this.type = Constants.RichTextTypes.EQUATION;

        this._patch(data);

    }

    /**
     * Patches the equation data
     * @param data
     */
    _patch(data) {

        if('annotations' in data && typeof data?.annotations === 'object') {

            /**
             * The style of the equation
             * @type {?Annotation} style
             */
            this.style = new Annotation(data?.annotations);

        }

        if('href' in data && typeof data?.href === 'string') {

            /**
             * The URL the text directs to
             * @type {?String} url
             */
            this.url = data?.href;

        }

        if('plain_text' in data && typeof data?.plain_text === 'string') {

            /**
             * The text
             * @type {?String} text
             */
            this.text = data?.plain_text;

        }

    }

}

module.exports = Equation;