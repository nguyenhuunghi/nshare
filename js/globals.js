'use strict'
angular.module('blogApp').run(function ($rootScope, $location, myApi) {
  var api_local = 'http://blog.api.local:5000/';
  var api_heroku = 'https://phones-store-api.herokuapp.com/';
  var baseUrl = window.location;
  if (!window.location.origin) {
    baseUrl.origin = baseUrl.protocol + '//' + baseUrl.hostname + ':' + baseUrl.port;
  }
  $rootScope.api_url = api_local;
  $rootScope.img_src = '../assets/img/logo200.png';
  $rootScope.avatar2x = 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png';
  
  $rootScope.make_listing = function (url, field) {
    myApi.get(url).then(function (response) {
      $rootScope.comments = response.comments;
    }, function (error) {
      alert('wrong');
    });
  };

  $rootScope.upload = function () {
    document.querySelector("input[type='file']").click();
    // var evObj = document.createEvent('MouseEvents');
    // evObj.initMouseEvent('click', true, true, window);
    // $("input[type='file']").click();
    // setTimeout(function() {
    //   document.getElementById('asset_comment').dispatchEvent(evObj);
    // }, 100);
  }
    
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