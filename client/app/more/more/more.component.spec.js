'use strict';

describe('Component: MoreComponent', function() {
  // load the controller's module
  beforeEach(module('awcApp.more'));

  var MoreComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MoreComponent = $componentController('more', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
