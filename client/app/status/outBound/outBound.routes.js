'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('outbound', {
      url: '/outBound',
      template: '<out-bound></out-bound>'
    });
}