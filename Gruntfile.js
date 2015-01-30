module.exports = function(grunt){

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint : {
			files : ['Gruntfile.js','scripts/**/*.js','tests/**/*.js'],
			options : {

			}			
		},
		watch : {
			files : ['<%= jshint.files %>'],
			tasks : ['jshint']
		},
		sass : {
			'stylesheets/compile.css' : ['stylesheets/sass/**/*.scss']			
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default',['jshint']);
	grunt.registerTask('govern',['watch']);
	grunt.registerTask('style',['sass']);
};