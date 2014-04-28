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
            if(company.finishedEdition) {
              company.finishedEdition = false;
            }
          });
        };

        /**
         * Method to fill the table with the data form the xml
         */
        $scope.setTable = function() {
          Companies.get().then(function(data) {
            var companiesData = data.companies.company;

            _.forEach(companiesData, function(company) {
              if(company._id.length === 1) {
                company._id = '0' + company._id;
              }
            });
            $scope.companiesData = companiesData;
          });
        };

        $scope.companiesData = null;
        $scope.byID = '-_id';

        /**
         * Method to edit the company name
         * @param  {OBJ} company The company to edit
         */
        $scope.editCompany = function(company) {
          company.originalName = company.name;
          clearAllEditing($scope.companiesData);
          company.editing = true;
          company.focus = true;
        };

        /**
         * Method to stop the edition on 'enter' keyup
         * @param  {obj} $event  The event
         * @param  {obj} company The company being edited
         */
        $scope.finishEditing = function($event, company) {
          if($event.keyCode === 13 || $event.charCode === 13) {
            company.editing = false;
            company.focus = false;
            company.finishedEdition = true;
          }
          if($event.keyCode === 27 || $event.charCode === 27) {
            company.name = company.originalName;
            company.editing = false;
            company.focus = false;
            company.finishedEdition = true;
          }
        };
      }
  ]);
