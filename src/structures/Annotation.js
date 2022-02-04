
/**
 * The Annotation class
 */
class Annotation {

    constructor(data) {

        /**
         * If the text is bold
         * @type {Boolean} bold
         */
        this.bold = data?.bold ?? false;

        /**
         * If the text is code
         * @type {Boolean} code
         */
        this.code = data?.code ?? false;

        /**
         * The color of the text
         * @type {String} color
         */
        this.color = data?.color ?? 'default';

        /**
         * If the text is italic
         * @type {Boolean} italic
         */
        this.italic = data?.italic ?? false;

        /**
         * If the text is strikethrough
         * @type {Boolean} strikethrough
         */
        this.strikethrough = data?.strikethrough ?? false;

        /**
         * If the text is underline
         * @type {Boolean} underline
         */
        this.underline = data?.underline ?? false;
    }

}

module.exports = Annotation;