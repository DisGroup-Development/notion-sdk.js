/**
 * The Base class for all managers, structures and more
 */
class Base {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client) {

        /**
         * The client
         * @type {Client}
         */
        this.client = client;

    }

}

module.exports = Base;