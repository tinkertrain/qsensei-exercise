'use strict';

angular.module('qsenseiExerciseApp')
  .service('Companies', ['$http', '$q', function Companies($http, $q) {
      return {
        get: function() {
          var deferred = $q.defer();
          $http(
            {
              method: 'GET',
              url: '/data/companies.xml'
            })
            .success(function(xmlData) {
              var x2js = new X2JS();
              var companiesData = x2js.xml_str2json( xmlData );
              return deferred.resolve(companiesData);
            })
            .error(function(data, status, headers, config) {
              deferred.reject('An error ocurred: ' + status);
            });
            return deferred.promise;
        }
      };
    }]);
