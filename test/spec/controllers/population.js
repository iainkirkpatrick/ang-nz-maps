'use strict';

describe('Controller: PopulationCtrl', function () {

  // load the controller's module
  beforeEach(module('nzMapsApp'));

  var PopulationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PopulationCtrl = $controller('PopulationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
