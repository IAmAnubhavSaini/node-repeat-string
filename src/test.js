var repeat = require('./repeat-string').repeat;
console.log(repeat('a', 5) === 'aaaaa' ? '.' : 'FAILED r("a", 5)); should be "aaaaa".)');
console.log(repeat('{', 4) === '{{{{' ? '.' : 'FAILED r("{", 4)); should be "{{{{".)');
console.log(repeat('}', 4) === '}}}}' ? '.' : 'FAILED r("}", 4)); should be "}}}}".)');
console.log(repeat('whats up my friend? ', 4) === 'whats up my friend? whats up my friend? whats up my friend? whats up my friend? ' ? '.' : 'FAILED r("whats up my friend? ", 4)); should be "whats up my friend? whats up my friend? whats up my friend? whats up my friend? ".)');
