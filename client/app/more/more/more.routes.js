'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('more', {
      url: '/more',
      template: '<more></more>'
    });
}
