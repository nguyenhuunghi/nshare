'use strict'
angular.module('blogServices', [])
  .factory('myApi', function ($http, $q, $timeout, $rootScope) {
    var myApi = {};
    myApi.get = function (_url) {
      $('#blog_entry_comment .fa .fa-spin').show();
      return $http({
        url: $rootScope.base_url + _url,
        method: 'GET'
      }).then(function(response) {
        if (response && response.status === 200) {
          $('#blog_entry_comment .fa-spin').hide();
          return response.data;
        }
      }, function(error) {
        return error;
      });
    };
    myApi.post = function (_url, data) {
      $('#blog_entry_comment .fa .fa-spin').show();
      return $http({
        url:$rootScope.base_url + _url,
        method: 'POST',
        data: data
      }).then(function(response) {
        if (response && response.status === 200) {
          $('#blog_entry_comment .fa-spin').hide();
          return response.data;
        }
      }, function(error) {
        return error;
      });
    };
    myApi.put = function (_url, data) {
      return $http({
        url: $rootScope.base_url + _url,
        method: 'PUT',
        data: data
      }).then(function(response) {
        if (response && response.status === 200) {
          return response.data;
        }
      }, function(error) {
        return error;
      });
    };
    myApi.delete = function (_url, data) {
      return $http({
        url: $rootScope.base_url + _url,
        method: 'DELETE',
        params: data
      }).then(function(response) {
        if (response && response.status === 200) {
          return response.data;
        }
      }, function(error) {
        return error;
      });
    };
    return myApi;
  });