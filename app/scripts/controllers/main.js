'use strict';

angular.module('qsenseiExerciseApp')
  .controller('MainCtrl', ['$scope', 'Companies',
      function($scope, Companies) {

        // Get the companies data
        $scope.setTable = function() {
          Companies.get().then(function(data) {
            $scope.companiesData = data;
          });
        };

        $scope.companiesData = null;

        $scope.editCompany = function(company) {
          company.editing = true;
          company.focus = true;
        };
        // Key event
        $scope.stopEditing = function($event, company) {
          if($event.keyCode === 13 || $event.charCode === 13) {
            company.editing = false;
            company.focus = false;
          }
        };
      }
  ]);
