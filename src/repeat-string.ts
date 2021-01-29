const f = require('formatted-string');

function repeat(toRepeat, times) {
    let str = '';
    for (let i = 0; i < times; i++) {
        str += '{x}';
    }
    return f.formatted(str, {x: toRepeat});
}

export = {repeat}
