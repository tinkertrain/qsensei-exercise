'use strict';

describe('Directive: focusME', function () {

  // load the directive's module
  beforeEach(module('qsenseiExerciseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<focus-m-e></focus-m-e>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the focusME directive');
  }));
});
