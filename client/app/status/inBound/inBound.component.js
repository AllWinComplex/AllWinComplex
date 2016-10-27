'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './inBound.routes';

export class InBoundComponent {
  constructor(status, $scope, $state, $stateParams) {
    'ngInject';
    this.$state = $state;
    
    this.starters = status.starters;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;

    this.getStatusCompose = status.getStatusCompose.bind(status);

    this.$scope = $scope;

    this.loading = true;
    status.viewMyInBoundStatus($stateParams.skipNum || 0)
      .then(function(response){
        this.loading = false;
        this.inBound = response.data;
      }.bind(this));
    
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
