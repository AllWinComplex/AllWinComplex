'use strict';

describe('Component: PeopleComponent', function() {
  // load the controller's module
  beforeEach(module('awcApp.people'));

  var PeopleComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PeopleComponent = $componentController('people', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
