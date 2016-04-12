module.exports = function(grunt) {

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        clean: {
            build:'build/'
        },
        ts: {
            default: {
                tsconfig: true,
                outDir: "build/app",
                options: {
                    sourceMap: false
                }
            }
        },
        'cssmin': {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/css',
                    ext: '.min.css'
                }]
            }        
        },
        /*systemjs: {
            options: {
                sfx: false,
                sourceMaps: false,
                configFile: "./config.js",
                minify: true,
                build: {
                    mangle: false
                }
            },
            dist: {
                files: [{
                    "src":  "app/main.js - angular2/*.js - rxjs/*.js",
                    "dest": "build/js/app.min.js"
                }]
            }
        },*/        
        uglify: {
            options: {
                mangle: false,
                sourceMap: false
            },
            my_target: {
                files: {
                    'build/js/touch.min.js': ['js/touch.js']
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'build/index.html': ['index.html']
                }
            }
        },
        copy: {
            templates: {
                expand: true,
                cwd: 'app/',
                src: '**/*.html',
                dest: 'build/app/',
            },
            images: {
                expand: true,
                cwd: 'images/',
                src: '**',
                dest: 'build/images/',
            },
            vendors: {
                expand: true,
                cwd: 'vendors/',
                src: '**',
                dest: 'build/vendors/',
            },
            release: {
                expand: true,
                cwd: 'build/',
                src: ['**'/*, '!app/ ** / *.js'*/],
                dest: '../Release/'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-systemjs-builder");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('copy_build', ['copy:templates', 'copy:images', 'copy:vendors']);
    grunt.registerTask('default', ['clean', 'ts', 'copy_build', /*'systemjs',*/ 'cssmin', 'uglify', 'processhtml', 'copy:release']);
};
