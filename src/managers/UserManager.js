const Base = require('../structures/Base');
const Endpoints = require('../util/Endpoints');
const Errors = require('../util/Errors');
const User = require('../structures/User');
const UserList = require('../structures/UserList')

/**
 * The user manager
 * @extends {Base}
 */
class UserManager extends Base {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client) {

        super(client);

    }

    /**
     * Gets an user by their id
     * @param {String} userId The id of the user
     * @return {Promise<User>}
     */
    get(userId) {

        return new Promise(async (resolve, reject) => {

            const res = await this.client.rest.request("get", Endpoints.USER(userId));

            const data = await res.json();

            resolve(new User(this.client, data));

        });

    }

    /**
     * @typedef {Object} ListOptions
     * @property {?Number} amount The amount of users you want to get (Default: 100) (Max. 100)
     * @property {?String} start The id of a user to start from
     */

    /**
     * Lists all users
     * @return {Promise<UserList>}
     */
    list(options = {}) {

        if('amount' in options && typeof options?.amount !== 'number') throw new Error(Errors.AMOUNT_NOT_A_NUMBER);
        if('amount' in options && ( options.amount < 1 || options.amount > 100 )) throw new Error(Errors.AMOUNT_MUST_BE(1, 100));
        if('start' in options && typeof options?.start !== 'string') throw new Error(Errors.START_NOT_A_STRING);

        return new Promise(async (resolve, reject) => {

            const res = await this.client.rest.request("get", Endpoints.USERS, { query: 'page_size=' + ( options?.amount ? options.amount : '100' ) + ( options?.start ? `&start_cursor=${options.start}` : '' ) });

            const data = await res.json();

            resolve(new UserList(this.client, data));

        });

    }

    me() {

        return new Promise(async (resolve, reject) => {

            const res = await this.client.rest.request("get", Endpoints.ME);

            const data = await res.json();

            resolve(new User(this.client, data));

        });

    }

}

module.exports = UserManager;