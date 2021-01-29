const {formatted} = require('formatted-string');

function repeat(toRepeat: string, times: number) {
    return formatted(Array(times).fill('{toRepeat}').join(''), {toRepeat});
}

export = {repeat}
