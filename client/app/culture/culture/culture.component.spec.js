'use strict';

describe('Component: CultureComponent', function() {
  // load the controller's module
  beforeEach(module('awcApp.culture'));

  var CultureComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CultureComponent = $componentController('culture', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
