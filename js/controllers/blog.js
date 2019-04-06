'use strick'
angular.module('blogControllers', [])
  // post blog
  .controller('blogCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.blogList = [
      {
        'id': 1,
        'date': 1400623623107,
        'introText': 'This is a blog post angularjs',
        'blogText': 'This is a blog post about angularjs. We will cover how to build a blog and how to add comment to the blog post.',
        'comments': [
          {
            'commentText': 'This is a good post',
            'time': new Date
          }, 
          {
            'commentText': 'That sounds good',
            'time': new Date
          }
        ]
      },
      {
        'id': 2,
        'date': 1400623623107,
        'introText': 'This is a blog post angularjs',
        'blogText': 'This is a blog post about angularjs. We will cover how to build a blog and how to add comment to the blog post.',
        'comments': [
          {
            'commentText': 'This is a good post',
            'time': new Date
          }, 
          {
            'commentText': 'That sounds good',
            'time': new Date
          }
        ]
      }
    ];
  }])

  // entry blog 
  .controller('blogViewCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    var bligId = $routeParams.id;
    var blog1 = {
        'id': 1,
        'date': new Date,
        'introText': 'This is a blog post angularjs',
        'blogText': 'This is a blog post about angularjs. We will cover how to build a blog and how to add comment to the blog post.',
        'comments': [
          {
            'commentText': 'This is a good post',
            'time': new Date
          }, 
          {
            'commentText': 'That sounds good',
            'time': new Date
          }
        ]
      };
    var blog2 = {
        'id': 2,
        'date': new Date,
        'introText': 'This is a blog post angularjs',
        'blogText': 'This is a blog post about angularjs. We will cover how to build a blog and how to add comment to the blog post.',
        'comments': [
          {
            'commentText': 'This is a good post',
            'time': new Date
          }, 
          {
            'commentText': 'That sounds good',
            'time': new Date
          }
        ]
      };
    if (bligId === '1') {
      $scope.blogEntry = blog1;
    } else if (bligId === '2') {
      $scope.blogEntry = blog2;
    }
  }]);