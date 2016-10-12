'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('compose', {
      url: '/compose/:cID',
      template: '<compose></compose>',
      authenticate: true
    });
}
