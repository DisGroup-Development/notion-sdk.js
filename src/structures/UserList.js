const Base = require('./Base');
const User = require('./User');

/**
 * The UserList class
 * @extends {Base}
 */
class UserList extends Base {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client, data) {

        super(client);

        /**
         * The map of all users
         * @type {Map<String, User>} users
         */
        this.users = new Map();

        this._patch(data);

    }

    /**
     * Patches the user data
     * @param data
     * @private
     * @async
     */
    async _patch(data) {

        if('results' in data && typeof data?.results === 'object') {

            data?.results.forEach(Result => {

                this.users.set(Result?.id, new User(this.client, Result));

            });

        }

    }

}

module.exports = UserList;