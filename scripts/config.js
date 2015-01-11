var mod_path = "../node_modules/"

requirejs.config({
	baseUrl : "../",
	packages : ["scripts/controllers","scripts/services","scripts/directives","scripts/filters"],
	paths : {
		app : "scripts/app",		
		angular : mod_path + "angular/angular",
		"angular-animate" : mod_path + "angular-animate/angular-animate",
		"angular-resource" : mod_path + "angular-resource/angular-resource",
		"angular-route" : mod_path + "angular-route/angular-route",
		"angular-ui-router" : mod_path + "angular-ui-router/angular-ui-router"
	},
	priority : ['angular'],
	shim : {
		angular : {	
			exports : 'angular'
		}
		,
		"angular-route" : {	deps : ["angular"], exports : "angular-route"},
		"angular-resource" : {	deps : ["angular"], exports : "angular-resource"}		
	}
})
//run app
requirejs(["app"]);