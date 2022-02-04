const Base = require('../structures/Base');
const Endpoints = require('../util/Endpoints');
const Errors = require('../util/Errors');
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
     * Deletes (archives) a page by their id
     * @param {String} pageId The id of the page
     */
    delete(pageId) {

        if(!(pageId && typeof pageId === 'string')) throw new Error(Errors.NO_VALID_PAGE_ID);

        return new Promise(async (resolve, reject) => {

            const res = await this.client.rest.request("get", Endpoints.PAGE(pageId));

            const data = await res.json();

            resolve(await new Page(this.client, data).setArchived(true));

        });

    }

    /**
     * Gets a page by their id
     * @param {String} pageId The id of the page
     * @return {Promise<Page>}
     */
     get(pageId) {

         if(!(pageId && typeof pageId === 'string')) throw new Error(Errors.NO_VALID_PAGE_ID);

         return new Promise(async (resolve, reject) => {

             const res = await this.client.rest.request("get", Endpoints.PAGE(pageId));

             const data = await res.json();

             resolve(new Page(this.client, data));

         });

     }

}

module.exports = PageManager;