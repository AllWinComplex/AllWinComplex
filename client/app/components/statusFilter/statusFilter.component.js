'use strict';
const angular = require('angular');

export class statusFilterComponent {
  constructor(status) {
    'ngInject';

    this.showFilterPop = false;

    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
  
  }
}

export default angular.module('awcApp.statusFilter', [])
  .component('statusFilter', {
    template: require('./statusFilter.component.html'),
    bindings: { showFilterPop: '=' },
    controller: statusFilterComponent,
    controllerAs: '$ctrl'
  })
  .name;
