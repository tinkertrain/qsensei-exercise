'use strict';

angular.module('qsenseiExerciseApp')
  .controller('MainCtrl', ['$scope', 'Companies', '$timeout',
      function($scope, Companies, $timeout) {

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
              company._id = parseFloat(company._id, 10);
            });
            console.log(companiesData);
            $scope.companiesData = companiesData;
          });
        };

        $scope.companiesData = null;
        $scope.sortParameter = '-_id';

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
         * Method to finish the edition on 'enter' and 'esc' keyup
         * @param  {obj} $event  The event
         * @param  {obj} company The company being edited
         */
        $scope.finishEditing = function($event, company) {
          if($event.keyCode === 13 || $event.charCode === 13) {
            company.editing = false;
            company.focus = false;
            company.finishedEdition = true;
            $timeout(function() {
              company.finishedEdition = false;
            }, 2000);
          }
          if($event.keyCode === 27 || $event.charCode === 27) {
            company.name = company.originalName;
            company.editing = false;
            company.focus = false;
          }
        };

        /**
         * add a company
         * @param {string} name The name of the new company
         */
        $scope.addCompany = function(name) {
          var newCompany = {};
          var newID;
          if(name !== '') {
            newID = $scope.companiesData.length;
            newCompany.name = name;
            newCompany._id = newID;
            newCompany.new = true;
            $scope.companiesData.push(newCompany);
            $timeout(function() {
              newCompany.new = false;
            }, 2000);
          }
        };

      }
  ]);
