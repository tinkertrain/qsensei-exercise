'use strict';

angular.module('qsenseiExerciseApp')
  .controller('MainCtrl', ['$scope', 'Companies',
      function($scope, Companies) {

          // Get the companies data
          Companies.get().then(function(data) {
            $scope.companies = data;
          });

          // Key event
          $scope.stopEditing = function($event) {
            console.log($event);
          };
      }
  ]);
