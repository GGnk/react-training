const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        console.log('"It\'s develop mode', defaultConfig)
        return defaultConfig;
    }
    return defaultConfig;
}
