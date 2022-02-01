const Base = require('../structures/Base');
const Endpoints = require('../util/Endpoints');
const Page = require('../structures/Page');

/**
 * The page manager
 * @extends {Base}
 */
class PageManager extends Base {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client) {

        super(client);

    }

    /**
     * Gets a page by their id
     * @param {String} pageId The id of the page
     * @return {Promise<Page>}
     */
     get(pageId) {

        return new Promise(async (resolve, reject) => {

            const res = await this.client.rest.request("get", Endpoints.PAGE(pageId));

            const data = await res.json();

            resolve(new Page(this.client, data));

        });

     }

}

module.exports = PageManager;