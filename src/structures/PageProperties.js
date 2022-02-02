const Constants = require('../util/Constants');
const Style = require('./Style');

/**
 * The PageProperties class
 */
class PageProperties {

    constructor(data) {

        console.log(data.title?.title[0]);

        this._patch(data);

    }

    /**
     * Patches the page data
     * @param data
     * @private
     * @async
     */
    async _patch(data) {

        if('title' in data && typeof data?.title === 'object') {

            /**
             * The title of the page
             * @type {{ style: ?Style|null, text: ?String|null, type: ?Constants.PageProperties }}
             */
            this.title = {
                style: null,
                text: null,
                type: Constants.PageProperties.UNKNOWN
            };

            if('title' in data?.title && data?.title?.title?.length > 0) {

                this.title.style = new Style(data?.title?.title[0].annotations);
                this.title.text = data?.title?.title[0]?.text.content ?? null;

            }

            if('type' in data?.title && typeof data?.title?.type === 'string') {

                switch(data?.title?.type) {

                    case Constants.PageProperties.TITLE:

                        this.title.type = Constants.PageProperties.TITLE;

                        break;

                }

            };

        };

    }

}

module.exports = PageProperties;