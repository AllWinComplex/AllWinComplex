'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './inBound.routes';

export class InBoundComponent {
  constructor(status) {
    'ngInject';
    this.showFilterPop = false;

    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
    
  }

}

export default angular.module('awcApp.inBound', [uiRouter])
  .config(routes)
  .component('inBound', {
    template: require('./inBound.html'),
    controller: InBoundComponent,
    controllerAs: '$ctrl'
  })
  .name;
