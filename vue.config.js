const Imagemin = require('imagemin-webpack-plugin').default;

/*
new Imagemin({
    pngquant: '95-100'
})
const ImageminWebp = require('imagemin-webp-webpack-plugin');
new ImageminWebp({
    config: [
        {
            test: /\.(jpe?g|png)/,
            options: {
                quality: 50
            }
        }
    ],
    overrideExtension: true,
    strict: true
})
*/

module.exports = {
    configureWebpack: {
        plugins: [
            new Imagemin({
                pngquant: '95-100'
            })
        ]
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/global.scss";
                `
            }
        }
    }
};