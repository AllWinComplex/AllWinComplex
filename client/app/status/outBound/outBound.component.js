'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './outBound.routes';

export class OutBoundComponent {
  constructor(status) {
    'ngInject';
    
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
  }

}

export default angular.module('awcApp.outBound', [uiRouter])
  .config(routes)
  .component('outBound', {
    template: require('./outBound.html'),
    controller: OutBoundComponent,
    controllerAs: '$ctrl'
  })
  .name;
