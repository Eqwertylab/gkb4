module.exports = function(grunt)
{
  grunt.initConfig({

    exec: {
      clean: {
        command: 'rmdir build /s /q'
      },
      build: {
        command: 'node ./node_modules/basisjs-tools-build/bin/build build -p -b . -f ./src/main.html -o ./build/'
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['exec']);
};