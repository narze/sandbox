'use strict';

var app = angular.module('app', [
	'ui.router',
	'bodyDirective',
	'headDirective'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('root', {
		url: '/',
		templateUrl: 'partials/index.html'
	})
}]);

// Disable Template Caching Angular UI
app.config(['$provide', function ($provide) {
	// Set a suffix outside the decorator function
	var cacheBuster = Date.now().toString();
	$provide.decorator('$templateFactory', ['$delegate', function ($delegate) {
		var fromUrl = angular.bind($delegate, $delegate.fromUrl);
		$delegate.fromUrl = function (url, params) {
			if (url !== null && angular.isDefined(url) && angular.isString(url)) {
				url += (url.indexOf("?") === -1 ? "?" : "&");
				url += "v=" + cacheBuster;
			}
			return fromUrl(url, params);
		};
		return $delegate;
	}]);
}]);

app.config(['$provide', function($provide) {
	$provide.decorator('$state', ['$delegate', '$rootScope', function($delegate, $rootScope) {
		$rootScope.$on('$stateChangeStart', function(event, state, params) {
			$delegate.next = state;
			$delegate.toParams = params;
		});
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
			$delegate.previous = fromState;
			$delegate.fromParams = fromParams;
		});
		return $delegate;
	}]);
}]);

app.run(['$rootScope', function($rootScope) {

}]);
