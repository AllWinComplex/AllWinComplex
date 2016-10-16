'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './search.routes';

export class SearchComponent {
  constructor(status, $stateParams) {
    'ngInject';
    this.$stateParams = $stateParams;

    status.draft.type = $stateParams.cid;

    this.starters = status.starters;
    
    this.status = status;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
    this.clearDraft = status.clearDraft;

    this.currentTab = 'inbound';

  }

  setTab(tab){
    this.currentTab = tab;
  }

  goBack(){
    window.history.back();
  }
  
}

export default angular.module('awcApp.search', [uiRouter])
  .config(routes)
  .component('search', {
    template: require('./search.html'),
    controller: SearchComponent,
    controllerAs: '$ctrl'
  })
  .name;
