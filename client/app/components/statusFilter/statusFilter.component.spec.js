'use strict';

describe('Component: statusFilter', function() {
  // load the component's module
  beforeEach(module('awcApp.statusFilter'));

  var statusFilterComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    statusFilterComponent = $componentController('statusFilter', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
