'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './choose.routes';

export class ChooseComponent {
  constructor(status, $stateParams) {
    'ngInject';
    this.$stateParams = $stateParams;

    status.draft.type = $stateParams.cid;

    this.starters = status.starters;
    
    this.status = status;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
    this.getStatuschoose = status.getStatuschoose;
    this.clearDraft = status.clearDraft;
  }


  goBack(){
    window.history.back();
  }
  

}

export default angular.module('awcApp.choose', [uiRouter])
  .config(routes)
  .component('choose', {
    template: require('./choose.html'),
    controller: ChooseComponent,
    controllerAs: '$ctrl'
  })
  .name;
