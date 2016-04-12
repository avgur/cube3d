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
        uglify: {
            options: {
                mangle: false
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
            config: {
                expand: true,
                cwd: '.',
                src: 'config.js',
                dest: 'build/',
            },
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    

    grunt.registerTask('default', ['clean', 'ts', 'copy', 'cssmin', 'uglify', 'processhtml']);
};
