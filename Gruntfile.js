module.exports = function(grunt) {

  grunt.initConfig({

    // pkg: grunt.file.readJSON('package.json'),

    useminPrepare: {

      html: 'src/main.html',

      options: {

        dest: 'build'
      }
    },

    usemin: {

      html: ['build/*.html']
    },

    copy: {

      html: {

        files: [

          {
            expand: true,
            src:'src/*.{html,json,php}',
            dest: 'build/',
            filter: 'isFile',
            flatten: true
          }
        ]
      },

      img: {

        files: [

          {
            expand: true,
            cwd: 'src/',
            src:'img/**/*.{jpg,png,gif}',
            dest: 'build/'
          }
        ]
      },

      fancybox: {

        files: [

          {
            expand: true,
            src:'bower_components/fancybox/source/**/*.{jpg,png,gif}',
            dest: 'build/css/',
            filter: 'isFile',
            flatten: true
          }
        ]
      },

      jqueryui: {

        files: [

          {
            expand: true,
            src:'src/js/jquery-ui-1.11.4.custom/images/**/*.{jpg,png,gif}',
            dest: 'build/css/images/',
            filter: 'isFile',
            flatten: true
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');


  grunt.registerTask('build_all', [
    'copy',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin'
  ]);

};