'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './compose.routes';

export class ComposeComponent {
  constructor(status, $state, $stateParams) {
    'ngInject';
    this.$state = $state;
    this.$stateParams = $stateParams;

    this.status = status;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
    this.getStatusCompose = status.getStatusCompose;
    this.clearDraft = status.clearDraft;
  }

  saveNext(){
    this.status.updateDraft({
      type: this.$stateParams.cID,
    });
    
    this.$state.go('receipient');
  }

  goBack(){
    window.history.back();
  }
  

}

export default angular.module('awcApp.compose', [uiRouter])
  .config(routes)
  .component('compose', {
    template: require('./compose.html'),
    controller: ComposeComponent,
    controllerAs: '$ctrl'
  })
  .name;
