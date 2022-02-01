const Base = require('../structures/Base');
const Fetch = import('node-fetch');
const Errors = require('../util/Errors');

/**
 * The REST manager
 */
class RESTManager extends Base {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client) {

        super(client);

    }

    /**
     * Returns the secret
     * @return {String}
     */
    getAuth() {

        if(this.client?.secret) return `Bearer ${this.client?.secret}`;
        throw new Error(Errors.NO_VALID_SECRET);

    }

    /**
     * @typedef {Object} RequestOptions
     * @property {?{}} headers The headers of the request
     * @property {?{}} body The body of the request
     * @property {?[{}]} query The query of the request
     */

    /**
     * Make a request to a custom URL
     * @param {"delete"|"get"|"patch"|"post"} method The request method
     * @param {String} route The request route url
     * @param {RequestOptions} options The request options
     * @return {Promise<Fetch.Response>>}
     */
     request(method, route, options = {}) {

        return new Promise(async (resolve, reject) => {

            const Request = await (await Fetch).default(`${this.client.options?.apiURL}${this.client.options?.apiVersion}${route}` + ( options?.query ? `?${options.query}` : '' ), {

                body: options?.body ?? null,
                headers: options?.headers ?? {

                    "Authorization": this.getAuth(),
                    "Content-Type": "application/json",
                    "Notion-Version": this.client.options?.version,
                    "page_size": 1

                },
                method: method

            });

            resolve(Request);

        });

    }

}

module.exports = RESTManager;