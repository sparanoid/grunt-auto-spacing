/*
 * grunt-auto-spacing
 * https://github.com/sparanoid/grunt-auto-spacing
 *
 * Copyright (c) 2015 Tunghsiao Liu
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  var cheerio = require('cheerio');
  var path = require('path');
  var url = require('url');
  var pangu = require('pangunode');

  grunt.registerMultiTask('auto_spacing', 'Turn your distribution into something pastable.', function() {

    var options = this.options({
      verbose: false
    });

    this.files.forEach(function(filePair) {

      // check that the source file exists
      if(filePair.src.length === 0) { return; }

      // init cheerio
      var $ = cheerio.load(grunt.file.read(filePair.src), {
        decodeEntities: false
      });

      var html = pangu($.html());
      grunt.file.write(path.resolve(filePair.dest), html);
      grunt.log.writeln(('Created: ').green + path.resolve(filePair.dest) + '\n');
    });
  });
};
