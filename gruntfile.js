module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: './app.js'
                }
            }
        },
        watch: {
            scripts: {
                files: ['app.js', 'app/**/*.js', 'public/**/*.less'],
                tasks: ['express'],
                options: {
                    spawn: false,

                    interrupt: true,
                    reload: true
                },
            },
        },
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js']
        },
        less: {
            development: {
                options: {
                    paths: ["public/assets/css"]
                },
                files: {
                    "public/style/app.min.css": "public/style/app.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    // Default task(s).
    grunt.registerTask('default', ['jshint', 'less', 'express', 'watch']);

};