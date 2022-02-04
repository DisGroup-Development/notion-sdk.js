const BasePage = require('./BasePage');
const Constants = require('../util/Constants');
const Endpoints = require('../util/Endpoints');
const Equation = require("./Equation");
const Errors = require('../util/Errors');
const Mention = require("./Mention");
const RichText = require("./RichText");

/**
 * The Database class
 * @extends {BasePage}
 */
class Database extends BasePage {

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

        if('title' in data && typeof data?.title === 'object') {

            if('title' in data?.title && typeof data?.title !== 'null') {

                /**
                 * The array of all page title segments
                 * @type {Array<Equation|Mention|RichText>} titles
                 */
                this.titles = [];

                if(data?.title?.title?.length > 0) {

                    /**
                     * The title of the page
                     * @type {String}
                     */
                    this.title = "";

                    data?.title?.title?.forEach((RawData) => {

                        if('plain_text' in RawData && typeof RawData?.plain_text === 'string') {

                            this.title = `${this.title + RawData.plain_text}`;

                        }

                        if('type' in RawData && typeof RawData?.type === 'string') {

                            switch(RawData?.type) {

                                case Constants.RichTextTypes.EQUATION:

                                    this.titles.push(new Equation(RawData));

                                    break;

                                case Constants.RichTextTypes.MENTION:

                                    this.titles.push(new Mention(RawData));


                                    break;

                                case Constants.RichTextTypes.TEXT:

                                    this.titles.push(new RichText(RawData));

                                    break;

                                case Constants.RichTextTypes.UNKNOWN:

                                    this.titles.push(RawData);

                                    break;

                            }

                        };

                    });

                }

            }

        };

    }

    /**
     * Marks the database as archived
     * @param {Boolean} boolean
     * @return {Promise<Page>}
     */
    async setArchived(boolean = true) {

        if(typeof boolean !== 'boolean') throw new Error(Errors.ARCHIVED_NOT_A_BOOLEAN);

        return new Promise(async (resolve, reject) => {

            this.client.rest.request("patch", Endpoints.DATABASE(this.id), {

                body: {

                    "archived": boolean

                }

            }).then(async (RawData) => {

                await RawData.json();

                resolve(new Database(this.client, RawData));

            });

        });

    }

    /**
     * @typedef {Object} CoverData
     * @property {?String} url The url of the image
     */

    /**
     * Sets the database for the page
     * @param {CoverData} data
     * @return {Promise<Page>}
     */
    async setCover(data) {

        if(!('url' in data && typeof data?.url === 'string')) throw new Error(Errors.NO_COVER_EDIT_DATA);

        if(data?.emoji && data?.url) throw new Error(Errors.COVER_URL);

        let dataType = Constants.FileTypes.EXTERNAL;

        return new Promise(async (resolve, reject) => {

            this.client.rest.request("patch", Endpoints.DATABASE(this.id), {

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

                resolve(new Database(this.client, data));

            });

        });

    }

    /**
     * @typedef {Object} IconData
     * @property {?String} emoji The emoji
     * @property {?String} url The url of the image
     */

    /**
     * Sets the icon for the database
     * @param {IconData} data
     * @return {Promise<Database>}
     */
    async setIcon(data) {

        if(!('emoji' in data && typeof data?.emoji === 'string') && !('url' in data && typeof data?.url === 'string')) throw new Error(Errors.NO_ICON_EDIT_DATA);

        if(data?.emoji && data?.url) throw new Error(Errors.ICON_EMOJI_OR_URL);

        let dataType;

        data?.emoji ? dataType = Constants.IconTypes.EMOJI : dataType = Constants.IconTypes.EXTERNAL;

        return new Promise(async (resolve, reject) => {

            this.client.rest.request("patch", Endpoints.DATABASE(this.id), {

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

                resolve(new Database(this.client, data));

            });

        });

    }

}

module.exports = Database;