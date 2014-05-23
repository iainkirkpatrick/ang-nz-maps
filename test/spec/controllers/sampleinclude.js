'use strict';

describe('Controller: SampleincludeCtrl', function () {

  // load the controller's module
  beforeEach(module('nzMapsApp'));

  var SampleincludeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleincludeCtrl = $controller('SampleincludeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
