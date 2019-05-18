'use strict'
angular.module('blogApp', [
  'ngRoute',
  'blogControllers',
  'homeControllers',
  'blogServices'
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      'templateUrl': '/partials/home.html',
      'controller': 'homeCtrl'
    })
    .when('/blog', {
      'templateUrl': '/partials/blog/blog.html',
      'controller': 'blogCtrl'
    })
    .when('/blogPost/:id', {
      'templateUrl': '/partials/blog/blog_post.html',
      'controller': 'blogViewCtrl'
    })
    .otherwise('/', {
      redirectTo: '/'
    });
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
    $locationProvider.hashPrefix('');
}]);