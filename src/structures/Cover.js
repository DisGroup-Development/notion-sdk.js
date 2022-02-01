const Constants = require('../util/Constants');

/**
 * The Cover class
 */
class Cover {

    constructor(data) {

        /**
         * The type of the cover
         * @type {Constants.CoverTypes}
         */
        this.type = Constants.IconTypes.UNKNOWN;

        /**
         * The Date when the file as uploaded
         * @type {Date|null}
         */
        this.expiryAt = null;

        /**
         * The URL of the cover
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

                case 'external':

                    this.type = Constants.CoverTypes.EXTERNAL;

                    if(data?.external?.url && typeof data?.external?.url === 'string') this.url = data?.external?.url;

                    break;

                case 'file':

                    this.type = Constants.CoverTypes.FILE;

                    if(data?.file?.expiry_time && typeof data?.file?.expiry_time === 'string') this.expiryAt = new Date(data?.file?.expiry_time);
                    if(data?.file?.url && typeof data?.file?.url === 'string') this.url = data?.file?.url;

                    break;

                default: return this.type = Constants.CoverTypes.UNKNOWN;

            }

        }

    }

}

module.exports = Cover;