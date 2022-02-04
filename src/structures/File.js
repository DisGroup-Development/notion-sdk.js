const Constants = require('../util/Constants');

/**
 * The File class
 */
class File {

    constructor(data) {

        /**
         * The type of the icon
         * @type {Constants.FileTypes}
         */
        this.type = Constants.FileTypes.UNKNOWN;

        /**
         * The Date when the url expires
         * @type {?Date|null}
         */
        this.expiryAt = null;

        /**
         * The URL of the file
         * @type {?String|null}
         */
        this.url = null;

        this._patch(data);

    }

    /**
     * Patches the file data
     * @param data
     */
    _patch(data) {

        if('type' in data) {

            switch (data?.type) {

                case Constants.FileTypes.EXTERNAL:

                    this.type = Constants.FileTypes.EXTERNAL;

                    if('url' in data?.external && typeof data?.external?.url === 'string') this.url = data?.external?.url;

                    break;

                case Constants.FileTypes.FILE:

                    this.type = Constants.FileTypes.FILE;

                    if('expiry_time' in data?.file && typeof data?.file?.expiry_time === 'string') this.expiryAt = new Date(data?.file?.expiry_time);
                    if('url' in data?.file && typeof data?.file?.url === 'string') this.url = data?.file?.url;

                    break;

            }

        }

    }

}

module.exports = File;