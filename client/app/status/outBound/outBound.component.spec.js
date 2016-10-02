'use strict';

describe('Component: OutBoundComponent', function() {
  // load the controller's module
  beforeEach(module('awcApp.outBound'));

  var OutBoundComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    OutBoundComponent = $componentController('outBound', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
