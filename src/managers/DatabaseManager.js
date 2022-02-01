const Base = require('../structures/Base');
//const Database = require('../structures/Database');
const Endpoints = require('../util/Endpoints');

/**
 * The database manager
 * @extends {Base}
 */
class DatabaseManager extends Base {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client) {

        super(client);

    }

    /**
     * Gets a database by their id
     * @param {String} databaseId The id of the database
     * @return {Promise<Database>}
     */
    get(databaseId) {

        return new Promise(async (resolve, reject) => {

            const res = await this.client.rest.request("get", Endpoints.DATABASE(databaseId));

            const data = await res.json();

            resolve(data);

        });

    }

}

module.exports = DatabaseManager;