'use strict';

describe('Component: tabBar', function() {
  // load the component's module
  beforeEach(module('awcApp'));

  var tabBarComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    tabBarComponent = $componentController('tabBar', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
