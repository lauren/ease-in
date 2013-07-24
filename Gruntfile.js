module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      production: {
        options: {
          compress: true
        },
        files: {
          "build/<%= pkg.name %>.css": "src/<%= pkg.name %>.less"
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