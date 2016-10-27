'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './receipient.routes';

export class ReceipientComponent {
  constructor(status, $stateParams, Auth, $state) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.$state = $state;

    this.status = status;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;
    
    this.createStatus = status.createStatus;

    this.getCurrentUserSync = Auth.getCurrentUserSync;

  }

  sendToWorld(){
    this.status.updateDraft({
      sender: this.getCurrentUserSync()._id
    });

    this.status.getWorld()
    .then(function(response){

      console.log(response);

      this.status.updateDraft({
        receipient: response.data[0]._id
      });
    }.bind(this))
    .then(function(){
      return this.status.createStatus();
    }.bind(this))
    .then(function(){
      this.$state.go('outbound');
    }.bind(this))

    ;

  }

  sendTo(receipient){
    this.status.updateDraft({
      receipient: receipient,
      sender: this.getCurrentUserSync()._id
    });

    this.status.createStatus()
    .then(function(){
      this.$state.go('outbound');
    }.bind(this))

    ;

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
