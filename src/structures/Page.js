const Base = require('./Base');
const Constants = require('../util/Constants');
const Emoji = require('./Emoji');
const File = require('./File');
const PageProperties = require('./PageProperties');

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
         * @type {Constants.Objects} object
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
             * @type {?File}
             */
            this.cover = new File(data?.cover);

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
             * @type {?File|?Emoji|null}
             */
            this.icon = null;

            switch(data?.icon?.type) {

                case Constants.IconTypes.EMOJI:

                    this.icon = new Emoji(data?.icon);

                    break;

                case Constants.IconTypes.EXTERNAL:
                case Constants.IconTypes.FILE:

                    this.icon = new File(data?.icon);

                    break;

            }

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

                case Constants.Objects.PAGE:

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
             * @type {?Constants.ParentTypes}
             */
            this.parentType = Constants.ParentTypes.UNKNOWN;

            switch(data?.parent?.type) {

                case Constants.ParentTypes.DATABASE:

                    this.parentType = Constants.ParentTypes.DATABASE;

                    this.parentID = data?.parent?.database_id;

                    break;

                case Constants.ParentTypes.PAGE:

                    this.parentType = Constants.ParentTypes.PAGE;

                    this.parentID = data?.parent?.page_id;

                    break;

                case Constants.ParentTypes.WORKSPACE:

                    this.parentType = Constants.ParentTypes.WORKSPACE;

                    break;

            }

        };

        if('properties' in data && typeof data?.properties === 'object') {

            this.properties = new PageProperties(data?.properties);

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