# rain-util-fs #

[![Build Status](https://travis-ci.org/maxmill/rain-util-fs.svg?style=flat-square)](https://travis-ci.org/maxmill/rain-util-fs)
[![npm](https://img.shields.io/npm/v/rain-util-fs.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/dt/rain-util-fs.svg)]()


Generator based, co/koa compatible utilities  for managing filesystem

```
npm i rain-util-fs
var $util = require('rain-util-fs');
```

extends co-fs - all core node fs methods available as generators
```
$util.fs.download   - (file or file array) downloads url(s) to file(s)
$util.fs.upsert     - (dir or dir array) creates dir if non-existent (uses mkdirp)
$util.fs.fetch     - (file or dir) read file or directory contents
$util.fs.rimraf     - (path) yieldable rm -rf
$util.fs.objectify          - (path) converts directory and contents into node module
$util.fs.json.(read|write)  - (file, obj, options)
```


### credits ###


- https://github.com/jprichardson/node-jsonfile
- https://github.com/substack/node-mkdirp
- https://github.com/isaacs/rimraf