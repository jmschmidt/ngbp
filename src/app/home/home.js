/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.factory("HomeFactory", function() {
  var HomeFactory = {};
  HomeFactory.getContent = function() {
    return {
      "title": "Page Title",
      "date": "8/4/2014",
      "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur eros non iaculis tristique. Proin egestas magna nec turpis vehicula, at bibendum leo pretium. Nulla ac massa ante. Donec a libero vel odio auctor tincidunt in ac leo. Aenean tincidunt sapien dui, ac molestie quam rhoncus et. Nam gravida posuere scelerisque. In at risus venenatis, interdum mauris at, scelerisque sem. Nullam adipiscing id purus in fermentum. Cras pharetra felis sed ante pulvinar commodo. Curabitur sit amet venenatis sapien, at condimentum magna. Donec dictum in augue in bibendum. Pellentesque faucibus dui nunc, non rutrum erat vestibulum eu. Curabitur fringilla a mi a pulvinar. Ut porttitor condimentum erat vitae feugiat. Aenean eu auctor quam.<br />In elementum scelerisque aliquam. Nunc vitae luctus dolor. Nullam non ipsum tempor, scelerisque quam bibendum, rutrum ipsum. Praesent et sapien lectus. Donec est tortor, consequat quis semper et, egestas non ante. Quisque in tortor ac odio laoreet elementum vitae eget lorem. Suspendisse molestie ultricies libero. Sed ullamcorper justo in malesuada malesuada. Pellentesque vehicula nulla nisl, eu dictum sem convallis nec. Curabitur mollis ultricies consequat. Etiam congue hendrerit magna, dictum pharetra metus ultrices in. Suspendisse quam dolor, dignissim vel congue ac, tincidunt vitae ligula."
    };
  };

  // Return a reference to the function
  return (HomeFactory);
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, HomeFactory ) {
  $scope.pageContent = HomeFactory.getContent();
})

;

