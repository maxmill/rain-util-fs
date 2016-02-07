const test = require('tape-catch');
const path = require('path');
const $fs = require('../bin');
const coTape = require('co-tape');


test('upsert recusively', coTape(function* (t) {
    yield $fs.rimraf(path.resolve('./data'));
    console.log('creating directory: ' + (yield $fs.upsert(['./data/1/2/3', './data/3/2/1'])));

    var passed = (yield $fs.exists('./data/1'));
    t[passed === true ? 'pass' : 'fail']('upsert recusively');

    t.end();
}));


test('fetch file', coTape(function* (t) {
    var fetched = yield $fs.fetch(path.resolve('./LICENSE'));
    var passed = (fetched.length && fetched.length > 0);

    t[passed === true ? 'pass' : 'fail']('upsert recusively');

    t.end();
}));

test('fetch path', coTape(function* (t) {
    var fetched = yield $fs.fetch(path.resolve('./'));
    var passed = (fetched.length && fetched.length > 0);

    t[passed === true ? 'pass' : 'fail']('upsert recusively');

    t.end();
}));


test('JSON IO', coTape(function* (t) {
    // write object to file
    yield $fs.json.write('./data/jsonObject.json', {testObject: 'me'});

    if (yield $fs.exists('./data/jsonObject.json')) {
        t.pass('JSON IO writes json files successfully');

        // read file to object
        var jsonObject = yield $fs.json.read('./data/jsonObject.json');

        (jsonObject.testObject === 'me')
            ? t.pass('JSON IO reads json succesfully')
            : t.fail('JSON IO failed to read');
    } else {
        t.fail('JSON IO failed to write json');
    }
    t.end();
}));

test('file download', coTape(function* (t) {
    var file = {
        url: 'https://joyeur.files.wordpress.com/2011/07/nodejs.png',
        src: (path.resolve('./data') + '/img.png')
    };

    var filePath = (yield $fs.download(file));
    console.log(filePath);

    var passed = (yield $fs.exists(file.src));
    t[passed === true ? 'pass' : 'fail']('file download');

    t.end();
}));


