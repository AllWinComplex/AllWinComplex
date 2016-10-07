'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('culture', {
      url: '/culture',
      template: '<culture></culture>'
    });
}
