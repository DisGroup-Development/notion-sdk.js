const Constants = require('../util/Constants');
const Equation = require('./Equation');
const Mention = require('./Mention');
const RichText = require('./RichText');

/**
 * The PageProperties class
 */
class PageProperties {

    constructor(data) {

        this._patch(data);

    }

    /**
     * Patches the page property data
     * @param data
     * @async
     */
    async _patch(data) {

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

}

module.exports = PageProperties;