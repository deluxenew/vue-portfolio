const path = require('path');

module.exports = {
    devServer: {
        proxy: 'https://autoxml.4px.tech/',
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach((type) => addStyleResource(config.module.rule('scss')
            .oneOf(type)));
        svgRule.uses.clear();
        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'))
            .set('@f', path.resolve(__dirname, 'src/components/form'))
            .set('@c', path.resolve(__dirname, 'src/components/content'))
            .set('@m', path.resolve(__dirname, 'src/components/modal'));
    },
};

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/scss/*.scss'),
            ],
        });
}
