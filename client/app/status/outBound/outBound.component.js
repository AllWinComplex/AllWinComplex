'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './outBound.routes';

export class OutBoundComponent {
  constructor(status, $scope, $state) {
    'ngInject';

    this.$state = $state;
    
    this.starters = status.starters;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;

    this.$scope = $scope;

  }

  // toggleModal (mode){
  //   this.showModal = !this.showModal;
  //   this.showModalRender = false;
  //   this.showModalMode = 'starter';

  //   setTimeout(function(){
  //     this.showModalRender = false;
  //     this.$scope.$apply();

  //     setTimeout(function(){
  //       this.showModalRender = true;
  //       this.$scope.$apply();
  //     }.bind(this),0);

  //   }.bind(this),350);

  // }

}

export default angular.module('awcApp.outBound', [uiRouter])
  .config(routes)
  .component('outBound', {
    template: require('./outBound.html'),
    controller: OutBoundComponent,
    controllerAs: '$ctrl'
  })
  .name;
