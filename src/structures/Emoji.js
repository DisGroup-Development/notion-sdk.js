const Constants = require('../util/Constants');

/**
 * The Emoji class
 */
class Emoji {

    constructor(data) {

        /**
         * The type of the icon
         * @type {Constants.EmojiTypes}
         */
        this.type = Constants.EmojiTypes.UNKNOWN;

        /**
         * The emoji
         * @type {?String|null}
         */
        this.emoji = null;

        this._patch(data);

    }

    /**
     * Patches the page data
     * @param data
     * @private
     */
    _patch(data) {

        if('type' in data) {

            switch (data?.type) {

                case 'emoji':

                    this.type = Constants.EmojiTypes.EMOJI;

                    if('emoji' in data && typeof data?.emoji === 'string') this.emoji = data?.emoji;

                    break;

            }

        }

    }

}

module.exports = Emoji;