const DatabaseManager = require('../managers/DatabaseManager');
const Errors = require('../util/Errors');
const PageManger = require('../managers/PageManager');
const RESTManager = require('../rest/RESTManager');
const UserManager = require('../managers/UserManager');
const Util = require('../util/Utils');

/**
 * @typedef {Object} ClientOptions
 * @property {?String} apiURL The base URL of the Notion API (Default: https://api.notion.com/)
 * @property {?String} apiVersion The version of the Notion API (Default: v1)
 * @property {String} secret The secret for the Notion API
 * @property {?String} version The Notion API version (Default: 2021-08-16)
 */

/**
 * The client for interacting with the Notion API
 */
class Client {

    /**
     * The client options
     * @param {ClientOptions} options
     */
    constructor(options) {

        if(!options?.secret || typeof options?.secret !== 'string') throw new Error(Errors.NO_VALID_SECRET);

        Object.defineProperty(this, 'secret', { writable: true });

        /**
         * The secret for the Notion API
         * !!! This should be kept private at all times. !!!
         * @type {String}
         */
        this.secret = options?.secret;

        /**
         * The options of the Client
         * @type {ClientOptions}
         */
        this.options = {};

        if("apiURL" in options) {

            this.options.apiURL = options?.apiURL;

        } else {

            this.options.apiURL = `https://api.notion.com/`;

        }

        if("apiVersion" in options) {

            this.options.apiVersion = options?.apiVersion;

        } else {

            this.options.apiVersion = `v1`;

        }

        if("version" in options) {

            this.options.version = options?.version;

        } else {

            this.options.version = `2021-08-16`;

        }

        /**
         * The database manager
         * @type {DatabaseManager}
         */
        this.databases = new DatabaseManager(this);

        /**
         * The page manager
         * @type {PageManager}
         */
        this.pages = new PageManger(this);

        /**
         * The REST manager
         * @type {RESTManager}
         * @private
         */
        this.rest = new RESTManager(this);

        /**
         * The user manager
         * @type {UserManager}
         */
        this.users = new UserManager(this);

        /**
         * The utils
         * @type {Utils}
         */
        this.utils = new Util();

    }

}

module.exports = Client;