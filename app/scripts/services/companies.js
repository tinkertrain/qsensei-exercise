'use strict';

angular.module('qsenseiExerciseApp')
  .service('Companies', ['$http', function Companies($http) {
      return {
        get: function() {
          $http(
            {
              method: 'GET',
              url: '/data/companies.xml',
              transformResponse: function(xmlData, headersGetter) {
                var x2js = new X2JS();
                var companiesData = x2js.xml_str2json( xmlData );
                return companiesData;
              }
            })
            .success(function(companiesData) {
              console.log(companiesData);
            })
            .error(function(data, status, headers, config) {
              console.log('An error ocurred: ' + status);
            });
        }
      };
    }]);
