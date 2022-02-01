const Base = require('./Base');
const Constants = require('../util/Constants');
const Cover = require('./Cover');
const Icon = require('./Icon');

/**
 * The Page class
 * @extends {Base}
 */
class Page extends Base {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client, data) {

        super(client);

        /**
         * The id of the page
         * @type {String} id
         */
        this.id = data?.id;

        /**
         * The object of the page
         * @type {String} object
         */
        this.object = Constants.Objects.UNKNOWN

        this._patch(data);

    }

    /**
     * Patches the page data
     * @param data
     * @private
     * @async
     */
     async _patch(data) {

        if('archived' in data && typeof data?.archived === 'boolean') {

            /**
             * If the page is archived or not
             * @type {?Boolean} archived
             */
            this.archived = data?.archived;

        };

        if('cover' in data && data?.cover !== null) {

            /**
             * The cover of the page
             * @type {?Cover}
             */
            this.cover = new Cover(data?.cover);

        };

        if('created_time' in data && typeof data?.created_time === 'string') {

            /**
             * When the page was created
             * @type {?Date}
             */
            this.createdAt = new Date(data?.created_time);

        };

        if('icon' in data && data?.icon !== null) {

            /**
             * The icon of the page
             * @type {?Icon}
             */
            this.icon = new Icon(data?.icon);

        }

        if('last_edited_time' in data && typeof data?.last_edited_time === 'string') {

            /**
             * When the page was last edited
             * @type {?Date} lastEditedAt
             */
            this.lastEditedAt = new Date(data?.last_edited_time);

        };

        if('object' in data && typeof data?.object === 'string') {

            switch(data?.object) {

                case 'page':

                    this.object = Constants.Objects.PAGE;

                    break;

            }

        }

        if('parent' in data && typeof data?.parent === 'object') {

            /**
             * The if of the parent
             * @type {?String|null}
             */
            this.parentID = null;

            /**
             * The type of the parent
             * @type {?String}
             */
            this.parentType = Constants.ParentTypes.UNKNOWN;

            switch(data?.parent?.type) {

                case 'database_id':

                    this.parentType = Constants.ParentTypes.DATABASE;

                    this.parentID = data?.parent?.database_id;

                    break;

                case 'page_id':

                    this.parentType = Constants.ParentTypes.PAGE;

                    this.parentID = data?.parent?.page_id;

                    break;

                case 'workspace':

                    this.parentType = Constants.ParentTypes.WORKSPACE;

                    break;

                default: break;

            }

        };

        if('url' in data && typeof data?.url === 'string') {

            /**
             * The url of the page
             * @type {?String} url
             */
            this.url = data?.url

        };

    }

}

module.exports = Page;