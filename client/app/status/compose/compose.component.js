'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './compose.routes';

export class ComposeComponent {
  constructor(status, $stateParams) {
    'ngInject';
    this.$stateParams = $stateParams;

    status.draft.type = $stateParams.cid;

    this.status = status;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
    this.getStatusCompose = status.getStatusCompose;
    this.clearDraft = status.clearDraft;
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
