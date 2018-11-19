const mock = {};

const noMock = process.env.NO_MOCK === 'false';

require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
    Object.assign(mock, require('./mock/' + file))
});

module.exports = noMock ? {} : mock;
