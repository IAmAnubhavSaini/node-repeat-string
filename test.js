import test from 'ava';
import r from './';

test('r("a", 5)); should be "aaaaa".)', async t => {
    t.is(r.repeat('a', 5), 'aaaaa');
});

test('r("a", 4)); should not be "aaaaa".)', async t => {
    t.not(r.repeat('a', 4), 'aaaaa');
});

test('r("{", 4)); should be "{{{{".)', async t => {
    t.is(r.repeat('{', 4), '{{{{');
});

test('r("}", 4)); should be "}}}}".)', async t => {
    t.is(r.repeat('}', 4), '}}}}');
});

test('r("whats up my friend? ", 4)); should be "whats up my friend? whats up my friend? whats up my friend? whats up my friend? ".)', async t => {
    t.is(r.repeat('whats up my friend? ', 4), 'whats up my friend? whats up my friend? whats up my friend? whats up my friend? ');
});
