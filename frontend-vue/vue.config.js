const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        // can be string or regex
        'my-dep',
        /other-dep/
      ],
    devServer: {
        port: 9080
    },
    lintOnSave:false
})