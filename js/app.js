'use strict'
var blogApp = angular.module('blogApp', [
  'ngRoute',
  'blogControllers'
]);

blogApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      'templateUrl': '/partials/blog/main.html',
      'controller': 'blogCtrl'
    })
    .when('/blogPost/:id', {
      'templateUrl': '/partials/blog/blog_post.html',
      'controller': 'blogViewCtrl'
    });
    $locationProvider.html5Mode(false).hashPrefix('!');
}]);