/*
 * grunt-litmus
 * https://github.com/jpeter/grunt-litmus
 *
 * Copyright (c) 2014 Jeremy Peter
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var Litmus = require('./lib/litmus'),
      _ = require('lodash'),
      async = require('async'),
      cheerio = require('cheerio');
  

  grunt.registerMultiTask('litmus', 'Send test to Litmus', function() {
    
    var options = this.options(),
        done = this.async(),
        date = grunt.template.today('yyyy-mm-dd'),
        files = this.filesSrc,
        titleDups = {};

    // Iterate over all specified file groups.
    async.eachSeries(files, function(file, next) {
      
     var  html    = grunt.file.read(file),
          litmus = new Litmus(options),
          subject = options.subject,
          $       = cheerio.load(html),
          $title  = $('title').text().trim();
    
      if( (subject === undefined) || (subject.trim().length === 0) ){
        subject = $title;
      }

      // If no subject or title then set to date
      if(subject.trim().length === 0){
        subject = date;
      }

      // Add +1 if duplicate titles exists
      if(files.length > 1){

        if(titleDups[subject] === undefined){
          titleDups[subject] = [];
        }else{
          titleDups[subject].push(html);
        }
        
        if(titleDups[subject].length){
          subject = subject + ' - ' + parseInt(titleDups[subject].length + 1, 10);
        }

      }

      litmus.run(html, subject.trim(), next);

    }, function() {
      done();
    });
  
  });

};