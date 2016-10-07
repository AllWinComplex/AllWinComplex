'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('people', {
      url: '/people',
      template: '<people></people>'
    });
}
