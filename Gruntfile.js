module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      client: {
        src: 'game/*',
        dest: 'public/scripts/',
        filter: 'isFile',
        flatten: true
      },
      server: {
        src: 'game/*',
        dest: 'app/',
        filter: 'isFile',
        flatten: true
      }
    },

    includeSource: {
      options: {
        basePath: 'public',
        baseUrl: ''
      },
      myTarget: {
        'public/index.html': 'public/index.tpl.html'
      }
    },

    sass: {
      dist: {
        files: {
          'public/styles/main.css': 'public/sass/main.scss'
        },
        options: {
          compress: false,
          sourcemap: 'none'
        }
      }
    },

    watch: {
      css: {
        files: 'public/sass/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    },

    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'Firefox 11']
      },
      
      all: {
        expand: true,
        flatten: true,
        src: 'public/styles/*.css',
        dest: 'public/styles/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['includeSource']);
};