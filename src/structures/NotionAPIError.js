const Constants = require('../util/Constants');

/**
 * The NotionAPIError class
 */
class NotionAPIError extends Error {

    constructor(data) {

        super();

        /**
         * The type of the error
         * @type {Constants.Objects.ERROR}
         */
        this.type = Constants.Objects.ERROR;

        /**
         * The code of the error
         * @type {?String|null}
         */
        this.code = data?.code ?? null;

        /**
         * The message of the error
         * @type {?String|null}
         */
        this.message = data?.message ?? null;

        /**
         * The status of the error
         * @type {?Number|null}
         */
        this.status = data?.status ?? null;

    }

}

module.exports = NotionAPIError;