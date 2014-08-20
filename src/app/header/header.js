angular.module( 'ngBoilerplate.header', [])

.directive('header', function() {
	return {
		restrict: 'E',
		templateUrl: 'header/header.tpl.html'
	};
})

;