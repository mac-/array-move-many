# array-move-many

Returns a new array in which one or more consectutive items within a source array are moved to a new index

[![Build Status](https://secure.travis-ci.org/mac-/array-move-many.png)](http://travis-ci.org/mac-/array-move-many)
[![NPM version](https://badge.fury.io/js/array-move-many.png)](http://badge.fury.io/js/array-move-many)
[![Dependency Status](https://david-dm.org/mac-/array-move-many.png)](https://david-dm.org/mac-/array-move-many)

[![NPM](https://nodei.co/npm/array-move-many.png?downloads=true&stars=true)](https://nodei.co/npm/array-move-many/)

## Contributing

This module makes use of a `Makefile` for building/testing purposes. After obtaining a copy of the repo, run the following commands to make sure everything is in working condition before you start your work:

	make install
	make test

Before committing a change to your fork/branch, run the following commands to make sure nothing is broken:

	make test
	make test-cov

Don't forget to bump the version in the `package.json` using the [semver](http://semver.org/spec/v2.0.0.html) spec as a guide for which part to bump. Submit a pull request when your work is complete.

***Notes:***
* Please do your best to ensure the code coverage does not drop. If new unit tests are required to maintain the same level of coverage, please include those in your pull request.
* Please follow the same coding/formatting practices that have been established in the module.

## Installation

	npm install array-move-many

## Usage

```js
var move = require('array-move-many');

var result = move(['a', 'b', 'c', 'd'], 0, 2, 1);
// result = ['c', 'a', 'b', 'd']

```

# License

The MIT License (MIT)
