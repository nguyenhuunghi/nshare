'use strict'
angular.module('blogControllers', [])
  // post blog
  .controller('blogCtrl', ['$scope', '$routeParams', 'myApi', function ($scope, $routeParams, myApi) {
    $scope.blogList = []
    myApi.get('blogs').then(function (response) {
      $scope.blogList = response.blogs;
    })    
  }])

  // entry blog 
  .controller('blogViewCtrl', ['$scope', '$rootScope', '$routeParams', 'myApi', function ($scope, $rootScope, $routeParams, myApi) {
    $scope.blogId = $routeParams.id;
    $scope.blogEntry = [];
    $scope.limit = 10;
    var _ = window;
    // $scope.comments = [];
    myApi.get('blog/' + $scope.blogId).then(function (response) {
      $scope.blogEntry = response.blog;
      if ($scope.blogEntry) {
          $rootScope.make_listing('comments/' + $scope.blogId);
      }
    });
    // scroll function
    // var previousPosition;
    // $('#blog_entry_comment').scroll(function (e) {
    //   var entry_comment_scrolltop = parseInt($('#blog_entry_comment').scrollTop());
    //   var entry_comment_height = parseInt($('#blog_entry_comment').height());
    //   var currentPositionScroll = entry_comment_scrolltop + entry_comment_height;
    //   if (currentPositionScroll > previousPosition) {
    //     if (parseInt($('#blog_entry_comment')[0].scrollHeight) - parseInt(this.clientHeight) == entry_comment_scrolltop) {
    //       $scope.limit +=10;
    //       $rootScope.make_listing('comments/' + $scope.blogId + '?limit=' + $scope.limit);
    //     }
    //   }
    //   previousPosition = currentPositionScroll;
    // });
    // delete a message
    $scope.delete_comment = function (id) {
      var data = {
        'comment_id': id,
        'blog_id': $scope.blogId
      }
      myApi.delete('comment/' + id, data).then(function (response) {
        if (response) {
          $rootScope.make_listing('comments/' + $scope.blogId);
        }
      });
    }
    // edit a message
    $scope.editMessage = function (id) { 
      $('#update_' + id).removeClass('hide'); 
    }
    $scope.cancelComment = function (id) {
      $('#update_' + id).addClass('hide'); 
    }
    $scope.cancelComment = function (id) { 
      $('#update_' + id).hide(); 
      $('.options_message_' + id).removeAttr('open'); 
      $('.options_message_' + id).show(); 
    }
    $scope.edit_comment = function (id) {
      var form_data = {
        'comment_id': id,
        'blog_id': $scope.blogId,
        'comment_text': $('#comment_text_' + id).val()
      }
      myApi.put('comment/' + id, form_data).then(function (response) {
        if (response) {
          $('#comment_text').val('');
          $rootScope.make_listing('comments/' + $scope.blogId);
          $scope.cancelComment();
        }
      });
    }
    // assets of comment
    $('#asset_comment').change(function(e) {
      $rootScope.make_image('asset_comment'); // we must have a id of input
      if ($rootScope.image) {
        $('.blog-write-comment').append($rootScope.image);
      }
    }); 
    // submit comment
    $scope.comment = function () {
      var form_data = {
        'comment_text': $('#comment_text').val(),
        'assets': $rootScope.assets
      }
      myApi.post('comment/' + $scope.blogId, form_data).then(function (response) {
        if (response) {
          $('#comment_text').val('');
          $rootScope.make_listing('comments/' + $scope.blogId);
        }
      });
    }
  }]);