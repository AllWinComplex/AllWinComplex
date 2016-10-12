'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('receipient', {
      url: '/receipient',
      template: '<receipient></receipient>',
      authenticate: true
    });
}
