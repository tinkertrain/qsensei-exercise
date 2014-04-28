'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('qsenseiExerciseApp'));

  var MainCtrl,
    scope;
    var spyOnAngularService = function(service, methodName, result) {
      return spyOn(service, methodName).andReturn( {then: function(fn) {
          fn(result);
        }});
    };
    var companiesSpy;
    var companiesDataMock = {
      companies: {
        company: [
          {
            _id : "0",
            name: "Wal-Mart Stores"
          },
          {
            _id : "1",
            name :"Royal Dutch Shell"
          }
        ]
      }
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    companiesSpy = spyOnAngularService($injector.get('Companies'), 'get', companiesDataMock);
  }));

  it('should call the Companies.get method', function () {
    scope.setTable();
    expect(companiesSpy).toHaveBeenCalledWith();
  });

  it('should set the companies to the result of the service call', function() {
    scope.setTable();
    expect(scope.companiesData).toEqual(companiesDataMock.companies.company);
  });

  it('should initialize $scope.companies to null', function () {
    expect(scope.companiesData).toBeNull();
  });

});
