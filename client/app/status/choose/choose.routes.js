'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('choose', {
      url: '/choose',
      template: '<choose></choose>',
      authenticate: true
    });
}
