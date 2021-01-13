const Imagemin = require('imagemin-webpack-plugin').default;
const ImageminWebp = require('imagemin-webp-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new Imagemin({
                pngquant: '95-100'
            })
            /*
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