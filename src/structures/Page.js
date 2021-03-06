const BasePage = require('./BasePage');
const Constants = require('../util/Constants');
const Endpoints = require('../util/Endpoints');
const Errors = require('../util/Errors');
const PageProperties = require('./PageProperties');

/**
 * The Page class
 * @extends {BasePage}
 */
class Page extends BasePage {

    /**
     * The Client
     * @param {Client} client The Client
     */
    constructor(client, data) {

        super(client, data);

        this._patch(data);

    }

    /**
     * Patches the page data
     * @param data
     * @async
     */
     async _patch(data) {

        await super._patch(data);

        if('properties' in data && typeof data?.properties === 'object') {

            this.properties = new PageProperties(data?.properties);

        };

    }

    /**
     * Marks the page as archived
     * @param {Boolean} boolean
     * @return {Promise<Page>}
     */
    async setArchived(boolean = true) {

        if(typeof boolean !== 'boolean') throw new Error(Errors.ARCHIVED_NOT_A_BOOLEAN);

        return new Promise(async (resolve, reject) => {

            this.client.rest.request("patch", Endpoints.PAGE(this.id), {

                body: {

                    "archived": boolean

                }

            }).then(async (RawData) => {

                await RawData.json();

                resolve(new Page(this.client, RawData));

            });

        });

    }

    /**
     * @typedef {Object} CoverData
     * @property {?String} url The url of the image
     */

    /**
     * Sets the cover for the page
     * @param {CoverData} data
     * @return {Promise<Page>}
     */
    async setCover(data) {

        if(!('url' in data && typeof data?.url === 'string')) throw new Error(Errors.NO_COVER_EDIT_DATA);

        if(data?.emoji && data?.url) throw new Error(Errors.COVER_URL);

        let dataType = Constants.FileTypes.EXTERNAL;

        return new Promise(async (resolve, reject) => {

            this.client.rest.request("patch", Endpoints.PAGE(this.id), {

                body: {

                    "cover": {

                        "external": {
                            "url": data?.url
                        },
                        "type": dataType,

                    }

                }

            }).then(async (RawData) => {

                const data = await RawData.json();

                resolve(new Page(this.client, data));

            });

        });

    }

    /**
     * @typedef {Object} IconData
     * @property {?String} emoji The emoji
     * @property {?String} url The url of the image
     */

    /**
     * Sets the icon for the page
     * @param {IconData} data
     * @return {Promise<Page>}
     */
    async setIcon(data) {

        if(!('emoji' in data && typeof data?.emoji === 'string') && !('url' in data && typeof data?.url === 'string')) throw new Error(Errors.NO_ICON_EDIT_DATA);

        if(data?.emoji && data?.url) throw new Error(Errors.ICON_EMOJI_OR_URL);

        let dataType;

        data?.emoji ? dataType = Constants.IconTypes.EMOJI : dataType = Constants.IconTypes.EXTERNAL;

        return new Promise(async (resolve, reject) => {

            this.client.rest.request("patch", Endpoints.PAGE(this.id), {

                body: {

                    "icon": {

                        "emoji": data?.emoji,
                        "external": {
                            "url": data?.url
                        },
                        "type": dataType,

                    }

                }

            }).then(async (RawData) => {

                const data = await RawData.json();

                resolve(new Page(this.client, data));

            });

        });

    }

}

module.exports = Page;