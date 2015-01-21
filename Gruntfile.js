module.exports = function (grunt) {
    grunt.initConfig({
        jsDir: 'js/',
        cssDir: 'css/',
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
          files: ['Gruntfile.js', 'js/*.js', 'test/**/*.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },
        csslint: {
          strict: {
            options: {
              import: 2
            },
            src: ['css/*.css']
          },
          lax: {
            options: {
              import: false
            },
            src: ['css/*.css']
          }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    'js/script.js'
                ],
                dest: 'js/app.js'
            },
            css: {
                src: [
                    'css/style.css'
                ],
                dest: 'css/app.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/app.min.js': 'js/app.js'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/app.min.css': 'css/app.css'
                }
            }
        },
        watch: {
            files: ['<%=jsDir%>*.js', '<%=cssDir%>*.css'],
            tasks: ['jshint', 'csslint','concat', 'uglify', 'cssmin']
        }
    })
    ;

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('test', [
        'concat'
    ]);

    grunt.registerTask('dev', [
        'watch'
    ]);

    grunt.registerTask('default', [
        'concat',
        'uglify',
        'cssmin',
    ]);
}
;
