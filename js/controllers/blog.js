'use strick'
angular.module('blogControllers', [])
  // post blog
  .controller('blogCtrl', ['$scope', '$routeParams', 'myApi', function ($scope, $routeParams, myApi) {
    $scope.blogList = []
    myApi.get('blogs').then(function (response) {
      $scope.blogList = response.blogs;
    })    
  }])

  // entry blog 
  .controller('blogViewCtrl', ['$scope', '$routeParams', 'myApi', function ($scope, $routeParams, myApi) {
    var bligId = $routeParams.id;
    $scope.blogEntry = [];
    myApi.get('blog/' + bligId).then(function (response) {
      $scope.blogEntry = response.blog;
    });
  }]);