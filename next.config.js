const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets', 'css')],
        prependData: `@import "variables.scss";`
    }
}