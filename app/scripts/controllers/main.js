'use strict';

angular.module('qsenseiExerciseApp')
  .controller('MainCtrl', ['$scope', 'Companies',
      function($scope, Companies) {

        /**
         * Method to clear the edit state
         * @param  {OBJ} companiesData The companiesData array
         */
        var clearAllEditing = function(companiesData) {
          _.forEach(companiesData, function(company) {
            if(company.editing) {
              company.editing = false;
            }
          });
        };

        /**
         * Method to fill the table with the data form the xml
         */
        $scope.setTable = function() {
          Companies.get().then(function(data) {
            $scope.companiesData = data.companies.company;
          });
        };

        $scope.companiesData = null;

        /**
         * Method to edit the company name
         * @param  {OBJ} company The company to edit
         */
        $scope.editCompany = function(company) {
          clearAllEditing($scope.companiesData.companies.company);
          company.editing = true;
          company.focus = true;
        };

        /**
         * Method to stop the edition on 'enter' keyup
         * @param  {obj} $event  The event
         * @param  {obj} company The company being edited
         */
        $scope.stopEditing = function($event, company) {
          if($event.keyCode === 13 || $event.charCode === 13) {
            company.editing = false;
            company.focus = false;
          }
        };
      }
  ]);
