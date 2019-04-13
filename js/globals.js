'use strict'
angular.module('blogApp').run(function ($rootScope, $location, myApi) {
  myApi.init();
  var cid = '';
  $rootScope.make_listing = function (url, field) {
    myApi.get(url).then(function (response) {
      $rootScope.comments = response.comments;
    }, function (error) {
      alert('wrong');
    });
  };

  $rootScope.make_image = function(id) {
    $rootScope.assets = [];
    var curFiles = $('#' + id)[0].files[0]; // this.files[0]
    $rootScope.image = document.createElement("img");
    if (curFiles) {
      $rootScope.image.src = window.URL.createObjectURL(curFiles);
      $rootScope.image.style = 'width: 100px; height:100px; margin: 1% 1% 1% 1%;';
      var reader = new FileReader();
      reader.onloadend = function() {
        $rootScope.assets = reader.result.split(',')[1];
      }
      reader.readAsDataURL(curFiles);
    }
  };
});