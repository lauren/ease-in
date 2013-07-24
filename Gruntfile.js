module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! Ease In JS v<%= pkg.version %> | Copyright 2013 Lauren Sperber https://github.com/lauren/ease-in/blob/master/LICENSE | <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'build/<%= pkg.name %>-<%= pkg.version %>.min.js': ['src/<%= pkg.name %>.js'],
          'docs/build/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
        }
      }
    },
    less: {
      production: {
        options: {
          compress: true
        },
        files: {
          "build/<%= pkg.name %>-<%= pkg.version %>.css": "src/<%= pkg.name %>.less",
          "docs/build/<%= pkg.name %>.css": "src/<%= pkg.name %>.less"
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