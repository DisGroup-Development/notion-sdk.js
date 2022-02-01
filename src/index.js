const Client = require('./client/Client');

const DatabaseManager = require('./managers/DatabaseManager');
const PageManager = require('./managers/PageManager');
const UserManager = require('./managers/UserManager');

const Base = require('./structures/Base');
const Cover = require('./structures/Cover');
const Icon = require('./structures/Icon');
const Page = require('./structures/Page');
const User = require('./structures/User');
const UserList = require('./structures/UserList');

const Constants = require('./util/Constants');
const Endpoints = require('./util/Endpoints');
const Errors = require('./util/Errors');
const Utils = require('./util/Utils');

module.exports = {

    Client,

    DatabaseManager,
    PageManager,
    UserManager,

    Base,
    Cover,
    Icon,
    Page,
    User,
    UserList,

    Constants,
    Endpoints,
    Errors,
    Utils

}