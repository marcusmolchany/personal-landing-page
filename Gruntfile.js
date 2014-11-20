module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    'js/jquery-1.11.1.js',
                    'js/script.js'
                ],
                dest: 'js/app.js'
            },
            css: {
                src: [
                    'css/font-awesome.css',
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
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:jsLib', 'concat:js']
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'concat:css', 'concat:cssMap']
            },
            handlebars: {
                files: ['templates/**/*.hbs'],
                tasks: ['handlebars', 'concat:js']
            }
        }
    })
    ;

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('test', [
        'concat'
    ]);

    grunt.registerTask('dev', [
        'concat'
    ]);

    grunt.registerTask('default', [
        'concat',
        'uglify',
        'cssmin',
    ]);
}
;
