'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('inbound', {
      url: '/inBound',
      template: '<in-bound></in-bound>'
    });
}
