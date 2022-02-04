const Constants = require('../util/Constants');

/**
 * The User class
 */
class User {

    constructor(data) {

        /**
         * The id of the user
         * @type {String} id
         */
        this.id = data?.id;

        /**
         * The object of the user
         * @type {Constants.Objects} object
         */
        this.object = Constants.Objects.UNKNOWN;

        this._patch(data);

    }

    /**
     * Patches the user data
     * @param data
     * @async
     */
    async _patch(data) {

        if('avatar_url' in data && typeof data?.avatar_url === 'string') {

            /**
             * The avatar url of the user
             * @type {?String} avatarURL
             */
            this.avatarURL = data?.avatar_url;

        }

        if('bot' in data && typeof data?.bot === 'object') {

            if('owner' in data?.bot && typeof data?.bot?.owner === 'object') {

                if('type' in data?.bot?.owner && typeof data?.bot?.owner?.type === 'string') {

                    /**
                     * The type of owner
                     * @type {?String}
                     */
                    this.ownerType = Constants.OwnerTypes.UNKNOWN;

                    switch(data?.bot?.owner?.type) {

                        case 'user':

                            this.ownerType = Constants.OwnerTypes.USER;

                            break;

                        case 'workspace':

                            this.ownerType = Constants.OwnerTypes.WORKSPACE;

                            break;

                    }

                }

                if('user' in data?.bot?.owner && typeof data?.bot?.owner?.user === 'object') {

                    /**
                     * The owner
                     * @type {User}
                     */
                    this.user = new User(data?.bot?.owner?.user);

                }

            }

        }

        if('name' in data && typeof data?.name === 'string') {

            /**
             * The name of the user
             * @type {?String}
             */
            this.name = data?.name;

        }

        if('object' in data && typeof data?.object === 'string') {

            switch(data?.object) {

                case Constants.Objects.USER:

                    this.object = Constants.Objects.USER;

                    break;

            }

        }

        if('person' in data && typeof data?.person === 'object') {

            if('email' in data?.person && typeof data?.person?.email === 'string') {

                /**
                 * The email of the user
                 * @type {?String}
                 */
                this.email = data?.person?.email;

            }

        }

        if('type' in data && typeof data?.type === 'string') {

            /**
             * The type of the user
             * @type {?String} type
             */
            this.type = Constants.UserTypes.UNKNOWN;

            switch(data?.type) {

                case Constants.UserTypes.BOT:

                    this.type = Constants.UserTypes.BOT;

                    break;

                case Constants.UserTypes.PERSON:

                    this.type = Constants.UserTypes.PERSON;

                    break;

            }

        };


    }

}

module.exports = User;