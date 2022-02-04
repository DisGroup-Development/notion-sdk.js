const Base = require('../structures/Base');
const Database = require('../structures/Database');
const Endpoints = require('../util/Endpoints');
const Errors = require("../util/Errors");
const Page = require("../structures/Page");

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
     * Deletes (archives) a database by their id
     * @param {String} pageId The id of the database
     */
    delete(databaseId) {

        if(!(pageId && typeof pageId === 'string')) throw new Error(Errors.NO_VALID_PAGE_ID);

        return new Promise(async (resolve, reject) => {

            const res = await this.client.rest.request("get", Endpoints.DATABASE(databaseId));

            const data = await res.json();

            resolve(await new Database(this.client, data).setArchived(true));

        });

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

            resolve(new Database(this.client, data));

        });

    }

}

module.exports = DatabaseManager;