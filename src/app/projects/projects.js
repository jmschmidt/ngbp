angular.module( 'ngBoilerplate.projects', [
  'ui.router',
  'ui.router.stateHelper',
  'ngAnimate'
])

.factory("ProjectFactory", function() {
  var ProjectFactory = {};
  ProjectFactory.getProjects = function() {
    return [
      { id:0, name: "Project 1" },
      { id:1, name: "Project 2" },
      { id:2, name: "Project 3" }
    ];
  };

  return (ProjectFactory);
})

.config(function config( $stateProvider ) {
  $stateProvider.state( 'projects', {
    url: '/projects',
    views: {
      "main": {
        controller: 'ProjectCtrl',
        templateUrl: 'projects/projects.tpl.html'
      }
    },
    data:{ pageTitle: 'Projects' }
  })
  .state('projects.detail', {
    url: '/:id',
    views: {
      "projectView": {
        templateUrl: 'projects/projects.detail.tpl.html',
        controller: 'ProjectDetailCtrl'
      }
    },
    data:{ pageTitle: 'Projects' }
  });
})

.controller( 'ProjectCtrl', function ProjectCtrl( $scope, ProjectFactory ) {
  $scope.projects = ProjectFactory.getProjects();
})

.controller( 'ProjectDetailCtrl', function ProjectDetailCtrl( $scope, $stateParams, ProjectFactory ) {
   $scope.project = ProjectFactory.getProjects()[$stateParams.id];
})

;
