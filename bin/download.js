'use strict';

const download = require('rain-util-download');

module.exports = p => {
    console.log(`version 0.5  - download will be depreated from fs, please use rain-util-download or rain-util/download`);
    return download(p);
};