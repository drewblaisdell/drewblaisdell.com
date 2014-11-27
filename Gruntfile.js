module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/styles/main.css': './sass/main.scss'
        },
        options: {
          compress: false,
          sourcemap: 'none'
        }
      }
    },

    watch: {
      css: {
        files: './sass/*.scss',
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

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['sass', 'autoprefixer']);
};