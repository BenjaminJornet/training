(function withAngular(angular) {
  'use strict';

  app
  .service('HttpServ', ['$window', '$q', '$http',

    function HttpServ($window, $q, $http) {
        
        var GET = function GET (_url, _data) {
            return $http({
                method: 'GET',
                url: _url
              }).then(function successCallback(data, status, headers, config) {
                console.log("GET request success : ");
                console.log(data);
                return data.data;
              }, function errorCallback(data, status, headers, config) {
                console.log("GET request error : ");
                console.log(data);
                return data.data;
              });
        }, POST = function POST (_url, _data) {
            return $http.post(_url, _data,{
                headers: {'Content-Type': 'application/json'},
                timeout: 0,
                cache: false
              }).success(function (data, status, headers, config) {
                console.log("POST request success  : " + JSON.stringify(data));
                return data.data;
              }).error(function (data, status, headers, config) {
                console.log("POST request error  : " + data);
                return data.data;
              });
        };
        
        return {
            'GET': GET,
            'POST': POST
        };
    }]);
}(angular));