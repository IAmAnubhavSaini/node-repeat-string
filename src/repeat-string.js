"use strict";
var formatted = require('formatted-string').formatted;
function repeat(toRepeat, times) {
    return formatted(Array(times).fill('{toRepeat}').join(''), { toRepeat: toRepeat });
}
module.exports = { repeat: repeat };
