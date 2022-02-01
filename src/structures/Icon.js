const Constants = require('../util/Constants');

/**
 * The Icon class
 */
class Icon {

    constructor(data) {

        /**
         * The type of the icon
         * @type {Constants.IconTypes}
         */
        this.type = Constants.IconTypes.UNKNOWN;

        /**
         * The emoji of the icon
         * @type {String|null}
         */
        this.emoji = null;

        /**
         * The Date when the file as uploaded
         * @type {Date|null}
         */
        this.expiryAt = null;

        /**
         * The URL of the icon
         * @type {String|null}
         */
        this.url = null;

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

                    this.type = Constants.IconTypes.EMOJI;

                    if(data?.emoji && typeof data?.emoji === 'string') this.emoji = data?.emoji;

                    break;

                case 'external':

                    this.type = Constants.IconTypes.EXTERNAL;

                    if(data?.external?.url && typeof data?.external?.url === 'string') this.url = data?.external?.url;

                    break;

                case 'file':

                    this.type = Constants.IconTypes.FILE;

                    if(data?.file?.expiry_time && typeof data?.file?.expiry_time === 'string') this.expiryAt = new Date(data?.file?.expiry_time);
                    if(data?.file?.url && typeof data?.file?.url === 'string') this.url = data?.file?.url;

                    break;

                default: return this.type = Constants.IconTypes.UNKNOWN;

            }

        }

    }

}

module.exports = Icon;