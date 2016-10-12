'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './receipient.routes';

export class ReceipientComponent {
  constructor(status, $stateParams) {
    'ngInject';
    this.$stateParams = $stateParams;

    this.status = status;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
    this.getStatusreceipient = status.getStatusreceipient;
    this.clearDraft = status.clearDraft;
  }


  goBack(){
    window.history.back();
  }

}

export default angular.module('awcApp.receipient', [uiRouter])
  .config(routes)
  .component('receipient', {
    template: require('./receipient.html'),
    controller: ReceipientComponent,
    controllerAs: '$ctrl'
  })
  .name;
