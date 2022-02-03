const Constants = require('../util/Constants');

/**
 * The RichText class
 */
class RichText {

    constructor(data) {

        /**
         * The type of the icon
         * @type {Constants.RichTextTypes}
         */
        this.type = Constants.RichTextTypes.UNKNOWN;

        this._patch(data);

    }

    /**
     * Patches the page data
     * @param data
     * @private
     */
    _patch(data) {



    }

}

module.exports = RichText;