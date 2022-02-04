const Annotation = require('./Annotation');
const Constants = require('../util/Constants');
const User = require('./User');

/**
 * The Mention class
 */
class Mention {

    constructor(data) {

        /**
         * The type of the rich text
         * @type {Constants.RichTextTypes.MENTION} type
         */
        this.type = Constants.RichTextTypes.MENTION;

        this._patch(data);

    }

    /**
     * Patches the mention data
     * @param data
     */
    _patch(data) {

        if('annotations' in data && typeof data?.annotations === 'object') {

            /**
             * The style of the mention
             * @type {?Annotation} style
             */
            this.style = new Annotation(data?.annotations);

        }

        if('href' in data && typeof data?.href === 'string') {

            /**
             * The URL the mention directs to
             * @type {?String} url
             */
            this.url = data?.href;

        }

        if('mention' in data && typeof data?.mention === 'object') {

            switch(data?.mention?.type) {

                case Constants.MentionTypes.DATE:

                    this.type = Constants.MentionTypes.DATE;

                    if('end' in data?.mention?.date && typeof data?.mention?.date?.end === 'string') {

                        /**
                         * The end date
                         * @type {?String} endDate
                         */
                        this.endDate = data?.mention?.date?.end;

                    }

                    if('start' in data?.mention?.date && typeof data?.mention?.date?.start === 'string') {

                        /**
                         * The start date
                         * @type {?String} startDate
                         */
                        this.startDate = new Date(data?.mention?.date?.start);

                    }

                    if('time_zone' in data?.mention?.date && typeof data?.mention?.date?.time_zone === 'string') {

                        /**
                         * The timezone of the date
                         * @type {?String} timezone
                         */
                        this.timezone = data?.mention?.date?.start;

                    }

                    break;

                case Constants.MentionTypes.DATABASE:

                    this.type = Constants.MentionTypes.DATABASE;

                    if('id' in data?.mention?.database && typeof data?.mention?.page?.id === 'string') {

                        /**
                         * The ID of the mentioned database
                         * @type {?String} databaseID
                         */
                        this.databaseID = data?.mention?.database?.id;

                    }

                    break;

                case Constants.MentionTypes.LINK:

                    this.type = Constants.MentionTypes.LINK;

                    if('url' in data?.mention && typeof data?.mention?.url === 'string') {

                        /**
                         * The URL of the mention
                         * @type {?String}
                         */
                        this.url = data?.mention?.url;

                    }

                    break;

                case Constants.MentionTypes.PAGE:

                    this.type = Constants.MentionTypes.PAGE;

                    if('id' in data?.mention?.page && typeof data?.mention?.page?.id === 'string') {

                        /**
                         * The ID of the mentioned page
                         * @type {?String} pageID
                         */
                        this.pageID = data?.mention?.page?.id;

                    }

                    break;

                case Constants.MentionTypes.USER:

                    this.type = Constants.MentionTypes.USER;

                    if('user' in data?.mention && typeof data?.mention?.user === 'object') {

                        /**
                         * The mentioned user
                         * @type {?User}
                         */
                        this.user = new User(data?.mention?.user);

                    }

                    break;

            }

        };

        if('plain_text' in data && typeof data?.plain_text === 'string') {

            /**
             * The text of the mention
             * @type {?String} text
             */
            this.text = data?.plain_text;

        }

        console.log(this);

    }

}

module.exports = Mention;