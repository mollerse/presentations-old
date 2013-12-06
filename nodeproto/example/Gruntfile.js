module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 1338,
          base: 'static',
          livereload: true
        }
      }
    },
    less: {
      dev: {
        options: {
          paths: ['./less']
        },
        files: {
          './static/style.css': './less/*.less'
        }
      }
    },
    browserify: {
      options: {
        debug: true
      },
      dev: {
        files: {
          'static/bundle.js': ['js/site.js']
        },
        options: {
          shim: {
            'jquery': {path: 'bower_components/jquery/jquery.js', exports: '$'}
          },
          transform: ['brfs']
        }
      }
    },
    jshint: {
      all: ['js/**/*.js']
    },
    watch: {
      files: ['./static/index.html'],
      options: {
        spawn: false,
        livereload: true
      },
      less: {
        files: ['./less/*.less'],
        tasks: ['less']
      },
      js: {
        files: ['./js/*.js'],
        tasks: ['browserify', 'jshint']
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['browserify', 'less']);
  grunt.registerTask('dev', ['connect', 'watch']);
};