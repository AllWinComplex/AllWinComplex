'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './outBound.routes';

export class OutBoundComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('awcApp.outBound', [uiRouter])
  .config(routes)
  .component('outBound', {
    template: require('./outBound.html'),
    controller: OutBoundComponent,
    controllerAs: 'outBoundCtrl'
  })
  .name;
