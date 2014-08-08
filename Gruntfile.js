/*
 * grunt-litmus
 * https://github.com/jpeter/grunt-litmus
 *
 * Copyright (c) 2014 Jeremy Peter
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    litmus: {
      test: {
        src: ['./example/email.html'],
        options: {
          username: 'username',
          password: 'password',
          url: 'https://yourcompany.litmus.com',
          clients: [
            'android22',
            'android4',
            'androidgmailapp',
            'androidgmailnew',
            'androidoutlookcom',
            'aolonline',
            'appmail5',
            'appmail6',
            'blackberry8900',
            'blackberryhtml',
            'chromeaolonline',
            'chromegmailnew',
            'chromeoutlookcom',
            'chromeyahoo',
            'ffaolonline',
            'ffgmailnew',
            'ffoutlookcom',
            'ffyahoo',
            'gmailnew',
            'ipad',
            'ipadmini',
            'iphone4',
            'iphone5',
            'iphone5s',
            'iphonegmailnew',
            'iphoneoutlookcom',
            'notes6',
            'notes7',
            'notes8',
            'notes85',
            'ol2000',
            'ol2002',
            'ol2003',
            'ol2007',
            'ol2010',
            'ol2011',
            'ol2013',
            'outlookcom',
            'symbians60',
            'thunderbird3',
            'thunderbirdlatest',
            'windowsphone8',
            'yahoo'
          ],
          // subject: 'Custom subject line',
          // delay: 1000
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['nodeunit']);
  grunt.registerTask('runLitmus', ['clean', 'litmus', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
