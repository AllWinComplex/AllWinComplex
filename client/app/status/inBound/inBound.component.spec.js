'use strict';

describe('Component: InBoundComponent', function() {
  // load the controller's module
  beforeEach(module('awcApp.inBound'));

  var InBoundComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    InBoundComponent = $componentController('inBound', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
