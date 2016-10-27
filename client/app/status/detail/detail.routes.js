'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('detail', {
      url: '/detail/:sID',
      template: '<detail></detail>',
      authenticate: true
    });
}
