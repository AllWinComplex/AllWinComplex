'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './detail.routes';

export class DetailComponent {
  constructor(status, $stateParams) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.getStatusCompose = status.getStatusCompose.bind(status);
    
    var sID = $stateParams.sID;
    this.status = status;

    this.loading = true;

    this.status.viewStatus(sID)
      .then(function(response){
        this.loading = false;

        console.log(response);

        this.detail = response.data;

      }.bind(this), function(){

        this.notFound = true;

      }.bind(this));
    
  }


  goBack(){
    window.history.back();
  }
  

}

export default angular.module('awcApp.detail', [uiRouter])
  .config(routes)
  .component('detail', {
    template: require('./detail.html'),
    controller: DetailComponent,
    controllerAs: '$ctrl'
  })
  .name;
