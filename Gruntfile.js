module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      target: {
        files: [{
          expand: true,
          flatten: true,
          src: [
            'public/bower_components/octicons/octicons/*.css',
            'public/bower_components/octicons/octicons/*.eot',
            'public/bower_components/octicons/octicons/*.svg',
            'public/bower_components/octicons/octicons/*.ttf',
            'public/bower_components/octicons/octicons/*.woff'
          ],
          dest: 'public/styles'
        }]
      }
    },

    concat: {
      css: {
        src: ['public/styles/octicons.css', 'public/styles/main.css'],
        dest: 'public/styles/all.css'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/styles/',
          src: ['all.css'],
          dest: 'public/styles/',
          ext: '.min.css'
        }]
      }
    },

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
        tasks: ['sass', 'autoprefixer', 'concat', 'cssmin', 'uglify']
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
    },

    uglify: {
      target: {
        files: {
          'public/scripts/build.js': ['public/scripts/home.js']
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('minify', ['concat', 'cssmin']);
  grunt.registerTask('default', ['sass', 'autoprefixer']);
};