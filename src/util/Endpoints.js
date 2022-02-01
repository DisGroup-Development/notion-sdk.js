module.exports = {

    DATABASE: (databaseId) => `/databases/${databaseId}`,
    ME: `/users/me`,
    PAGE: (pageId) => `/pages/${pageId}`,
    USER: (userId) => `/users/${userId}`,
    USERS: `/users`

}