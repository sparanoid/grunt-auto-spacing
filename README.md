# grunt-auto-spacing

[![Greenkeeper badge](https://badges.greenkeeper.io/sparanoid/grunt-auto-spacing.svg)](https://greenkeeper.io/)
[![Build Status](https://api.travis-ci.org/sparanoid/grunt-auto-spacing.svg?branch=master)](https://travis-ci.org/sparanoid/grunt-auto-spacing)
[![npm Version](https://img.shields.io/npm/v/grunt-auto-spacing.svg)](https://www.npmjs.com/package/grunt-auto-spacing)
[![npm Downloads](https://img.shields.io/npm/dm/grunt-auto-spacing.svg)](https://www.npmjs.com/package/grunt-auto-spacing)

> A grunt task which adds spaces between Chinese characters and English words, powered by [huei90/pangu.node](https://github.com/huei90/pangu.node).

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-auto-spacing --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-auto-spacing');
```

## The "auto_spacing" task

### Overview

In your project's Gruntfile, add a section named `auto_spacing` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  auto_spacing: {
    all: {
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- See `CHANGELOG.md` for release history
