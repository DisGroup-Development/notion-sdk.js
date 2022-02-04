module.exports = {

    AMOUNT_MUST_BE: (minAmount, maxAmount) => `The amount must be between ${minAmount} and ${maxAmount}`,
    AMOUNT_NOT_A_NUMBER: "The amount must be a number",

    ARCHIVED_NOT_A_BOOLEAN: "The archived value must be a boolean",

    COVER_URL: "You must specify an url",

    ICON_EMOJI_OR_URL: "You must specify an emoji OR url",

    NO_COVER_EDIT_DATA: "You must specify an url (string)",

    NO_ICON_EDIT_DATA: "You must either specify an emoji (string) or an url (string)",

    NO_VALID_PAGE_ID: "The page id must be a string",
    NO_VALID_PAGE_TITLE: "The page title must be a string",

    NO_VALID_SECRET: "The secret is not valid!",

    START_NOT_A_STRING: "The start must be a string (<User>.id)"

}