// const dotenv = require('dotenv');

module.exports = {
    // configureWebpack: {
    //     // Load the environment variables from the .env file
    //     plugins: [
    //         new dotenv({
    //             path: '.env'
    //         })
    //     ]
    // }
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/main.scss";`,
            },
        },
    },

    pluginOptions: {
      vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
    }
};
