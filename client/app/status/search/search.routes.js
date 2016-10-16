'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('search', {
      url: '/search',
      template: '<search></search>',
      authenticate: true
    });
}
