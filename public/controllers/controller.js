// Jonathan Song
// Resume demo
// cs3035

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    // console.log("Hello World from controller");


var refresh = function() {
  // console.log("refresh called");
  $http.get('/resumedemo/edu').success(function(response) {
    $scope.education = response;
    $scope.edu = "";
  });
  $http.get('/resumedemo/skill').success(function(response) {
    $scope.skills = response;
    $scope.skill = "";
  });
  $http.get('/resumedemo/project').success(function(response) {
    $scope.projects = response;
    $scope.project = "";
  });
};

refresh();

}]);﻿