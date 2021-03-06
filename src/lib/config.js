angular.module("myApp")
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('accept')
		$urlRouterProvider.when('/serve',"/serve/msg")
		$stateProvider.state({
			name:"accept",
			url:"/accept",
			templateUrl:"./tpl/accept.html"
		})
		.state({
			name:"admin",
			url:"/admin",
			templateUrl:"./tpl/admin.html"
		})
		.state({
			name:"serve",
			url:"/serve",
			templateUrl:"./tpl/serve.html"
		})
		.state({
			name:"serve.message",
			url:"/msg",
			templateUrl:"./tpl/message.html"
		})
		.state({
			name:"serve.active",
			url:"/active",
			templateUrl:"./tpl/active.html"
		})
		.state({
			name:"serve.active.jieshao",
			url:"/jieshao",
			templateUrl:"./tpl/jieshao.html"
		})
		.state({
			name:"serve.active.zongjie",
			url:"/zongjie",
			templateUrl:"./tpl/zongjie.html"
		})
		.state({
			name:"serve.active.jumin",
			url:"/jumin",
			templateUrl:"./tpl/jumin.html"
		})
		.state({
			name:"serve.active.baoming",
			url:"/baoming",
			templateUrl:"./tpl/baoming.html"
		})
	})