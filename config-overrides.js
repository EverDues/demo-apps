// eslint-disable-next-line
const webpack = require('webpack')

// web3auth shit
module.exports = function override(config) {
    const fallback = config.resolve.fallback || {}
    Object.assign(fallback, {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify'),
        url: require.resolve('url'),
        // TODO: figure out sdk usage
        path: false,
        fs: false,
    })
    config.resolve.fallback = fallback
    config.ignoreWarnings = [/Failed to parse source map/]
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ])
    return config
}
