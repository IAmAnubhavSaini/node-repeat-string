'use strict';

var f = require('formatted-string');

function repeat(toRepeat, times) {
    var str = '';
    for (var i = 0; i < times; i++) {
        str += '{x}';
    }
    return f.formatted(str, {x: toRepeat});
}

module.exports = {
    repeat: repeat
};
