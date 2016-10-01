'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('welcome', {
      url: '/',
      template: '<welcome></welcome>'
    });
}
