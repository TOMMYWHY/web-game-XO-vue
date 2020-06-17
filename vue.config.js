module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/web-game-XO-vue/dist/'
        : '/'
}