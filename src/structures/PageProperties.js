const Constants = require('../util/Constants');
const RichText = require('./RichText');

/**
 * The PageProperties class
 */
class PageProperties {

    constructor(data) {

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

            if('title' in data?.title && typeof data?.title !== 'null') {

                /**
                  * The array of all page title segments
                  * @type {Array<RichText>} titles
                  */
                this.titles = data?.title?.title;


            }

        };

    }

}

module.exports = PageProperties;