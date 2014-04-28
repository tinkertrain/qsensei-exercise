'use strict';

describe('Service: Companies', function () {

  // load the service's module
  beforeEach(module('qsenseiExerciseApp'));

  // instantiate service
  var Companies;
  var companiesDataMock;

  beforeEach(inject(function (_Companies_) {
    Companies = _Companies_;
    companiesDataMock = {
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
  }));

  describe('get', function () {
    it('should issue a GET request to data/companies.xml', inject(function(Companies, $httpBackend) {
      $httpBackend.whenGET('/data/companies.xml').respond(companiesDataMock);
      Companies.get();
      $httpBackend.flush();
    }));
  });

});
