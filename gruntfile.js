module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    clean: [ 'build/' ],

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: [ 'node_modules/**' ]
      },//option

      source: {
        files: {
          src: [ 'src/js/**/*.js' ]
        }//files
      },//source
      test: {
        files: {
          src: [ 'test/specs/**/*.js' ]
        }//files
      }//test
    },//jshint

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [ 'index.html' ],
            dest: 'build/'
          }//files
        ]//files
      },//html

      vendorjs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: [ 'jquery.js' ],
            dest: 'build/js/'
          }//files
        ]
      },//vendorjs
    },//copy

    concat: {
      js: {
        src: [ 'src/js/**/*.js' ],
        dest: 'build/js/app.js'
      }//js
    },//concat

    connect: {
      testing: {
        options: {
          port: 8888,
          base: '.'
        }//options
      }//testing
    },//connect

    mocha: {
      all: {
        options: {
          urls: [
            'http://localhost:8888/test/zoo.html'
          ]
        }//options
      }//all
    },//mocha

    watch: {
      html: {
          files: ['src/index.html'],
          tasks: ['copy:html']
      },
      js: {
          files: ['src/js/**/*.js'],
          tasks: ['test', 'concat']
      },
      test: {
          files: ['test/specs/**/*.js', 'test/*.html'],
          tasks: ['test']
      }
  }


  });//grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask( 'test', [ 'jshint', 'connect', 'mocha' ] );
  grunt.registerTask( 'default', [ 'clean', 'test', 'copy', 'concat' ] );

};//module.exports
