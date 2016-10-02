'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './inBound.routes';

export class InBoundComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('awcApp.inBound', [uiRouter])
  .config(routes)
  .component('inBound', {
    template: require('./inBound.html'),
    controller: InBoundComponent,
    controllerAs: 'inBoundCtrl'
  })
  .name;
