'use strict';

var options = {

    appFilesLocal: [
        '../jsql-angular1/dist/jsql-angular.js',
        './src/app/modules.js',
        './src/app/cases/**/*.js',
        './src/app/controllers/**/*.js',
        './src/app/app.js'
    ],

    appFiles: [
        './node_modules/jsql-angular1/jsql-angular.min.js',
        './src/app/modules.js',
        './src/app/cases/**/*.js',
        './src/app/controllers/**/*.js',
        './src/app/app.js'
    ],

    libs: [
        './bower_components/angular/angular.js',
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/angular-animate/angular-animate.js',
        './bower_components/angular-resource/angular-resource.js',
        './bower_components/angular-route/angular-route.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ]

};

function generatePaths(begin, extension) {
    var paths = [];

    var path = begin;
    for (var i = 0; i < 5; i++) {
        path += '/**';
        paths.push(path + '/*.' + extension);
    }

    return paths;
}

options.html2js = generatePaths('./src/app', 'html');
options.htmls = generatePaths('./src/app', 'html');
options.htmls.push('./src/index.html');
options.jss = generatePaths('./src/app', 'js');
options.styles = generatePaths('./src/app', 'css');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsql');
    grunt.initConfig({

        connect: {
            options: {
                port: 9090,
                hostname: 'localhost'
            },
            dist: {
                options: {
                    open: true,
                    base: 'dist'
                }
            }
        },

        clean: {
            dist: {
                files: [{
                    src: ['dist/*']
                }]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            css: {
                src: ['.src/app/style.css'].concat(options.styles),
                dest: './dist/style.min.css'
            },
            jsDist: {
                src: options.appFiles,
                dest: './dist/app.min.js'
            },
            jsLocal: {
                src: options.appFilesLocal,
                dest: './dist/app.min.js'
            },
            libs: {
                src: options.libs,
                dest: './dist/vendor.min.js'
            }
        },

        html2js: {
            options: {},
            main: {
                src: options.html2js,
                dest: 'dist/templates.min.js'
            }
        },

        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src',
                    src: ['**/*.js'],
                    dest: 'dist'
                }]
            }
        },

        copy: {

            index: {
                files: [

                    {
                        expand: true,
                        dot: true,
                        cwd: 'src',
                        dest: 'dist',
                        src: 'index.html'
                    }
                ]
            }

        },

        concurrent: {

            options: {
                logConcurrentOutput: true
            },

            dist: [
                'watch:jsDist',
                'watch:css',
                'watch:html'
            ],

            local: [
                'watch:jsLocal',
                'watch:css',
                'watch:html'
            ]

        },

        watch: {
            options: {
                spawn: false
            },
            html: {
                files: options.htmls,
                tasks: ['watch-html']
            },
            jsLocal: {
                files: options.jss,
                tasks: ['concat:jsLocal', 'ngAnnotate', 'jsql']
            },
            jsDist: {
                files: options.jss,
                tasks: ['concat:jsDist', 'ngAnnotate', 'jsql']
            },
            css: {
                files: options.styles,
                tasks: ['concat:css']
            }
        },

        preprocess: {
            options: {
                context: {
                    HOST: 'https://provider.jsql.it'
                }
            },
            index: {
                src: 'dist/index.html',
                dest: 'dist/index.html'
            },

        },

        jsql: {
            target: {
                options: {
                    apiKey: 'dawid.senko@jsql.it',
                    src: 'dist/app.min.js',
                    dist: 'dist/app.min.js',
                    devKeyFileName: 'test-key.key',
                    debug: true,
                    local: true
                }
            }
        }

    });

    grunt.registerTask('buildDist', [
        'clean',
        'copy:index',
        'concat:libs',
        'html2js',
        'concat:jsDist',
        'ngAnnotate',
        'concat:css',
        'jsql',
        'preprocess:index'
    ]);

    grunt.registerTask('buildLocal', [
        'clean',
        'copy:index',
        'concat:libs',
        'html2js',
        'concat:jsLocal',
        'ngAnnotate',
        'concat:css',
        'jsql',
        'preprocess-watch'
    ]);

    grunt.registerTask('watch-html', function () {

        grunt.task.run([
            'copy:index', 'html2js', 'preprocess-watch'
        ]);

    });

    grunt.registerTask('local', function () {

        grunt.task.run([
            'buildLocal',
            'connect:dist',
            'concurrent:local'
        ]);

    });


    grunt.registerTask('default', function () {
        grunt.task.run([
            'buildDist',
            'connect:dist',
            'concurrent:dist'
        ]);
    });


    grunt.registerTask('preprocess-watch', function () {

        grunt.config('preprocess.options.context.HOST', 'http://localhost:9192');
        // grunt.config('preprocess.options.context.HOST', 'https://provider.jsql.it');

        grunt.task.run('preprocess:index');

    });

};
