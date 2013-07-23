module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          "build/ease-in-docs.css": "src/ease-in-docs.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "build/ease-in-docs.css": "src/ease-in-docs.less"
        }
      }
    },
    watch: {
      less: {
        files: ['src/*.less'],
        tasks: ['less'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

};