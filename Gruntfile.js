module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! Ease In JS v0.0.1 | Copyright 2013 Lauren Sperber https://github.com/lauren/ease-in/blob/master/LICENSE | <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['src/ease-in.js'],
        dest: 'build/ease-in.min.js'
      }
    },
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          "build/ease-in.css": "src/ease-in.less",
          "build/ease-in-docs.css": "src/ease-in-docs.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "build/ease-in.css": "src/ease-in.less",
          "build/ease-in-docs.css": "src/ease-in-docs.less"
        }
      }
    },
    watch: {
      js: {
        files: ['src/*.js'],
        tasks: ['jshint', 'uglify'],
      },
      less: {
        files: ['src/*.less'],
        tasks: ['less'],
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/*.js'],
      options: {
        laxbreak: true,
        force: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

};