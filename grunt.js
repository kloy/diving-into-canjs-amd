module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    server: {
      port: 8000,
      base: '.'
    },
    reload: {
      port: 8001,
      proxy: {
        host: 'localhost',
        port: 8000 // should match server.port config
      }
    },
    watch: {
      files: [
        'index.html',
        'js/*.js',
        'views/*.ejs',
        'css/*.css'
      ],
      tasks: 'reload'
    }
  });

  grunt.loadNpmTasks('grunt-reload');

  // Default task.
  grunt.registerTask('default', 'server reload watch');
};