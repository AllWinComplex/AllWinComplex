'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './outBound.routes';

export class OutBoundComponent {
  constructor(status, $scope, $state, $stateParams) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.$state = $state;
    
    this.starters = status.starters;
    this.filters = status.filters;
    this.getCurrentFilter = status.getCurrentFilter;
    this.setCurrentFilter = status.setCurrentFilter;

    this.getStatusCompose = status.getStatusCompose.bind(status);

    this.$scope = $scope;

    this.loading = true;



    status.viewMyOutBoundStatus($stateParams.skipNum || 0)
      .then(function(response){
        this.loading = false;
        this.outBound = response.data;
      }.bind(this));

  }

  goNextPage(){
    var currentSkip = this.$stateParams.skipNum;

    this.$state.go('inboundSkip', {
      skipNum: parseInt(currentSkip, 10) + 50
    });
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
  .filter('kindnessFilter', function() {
    return function(input, typeOfkindness) {
      return (input || []).filter(function(val){
        
        // console.log(val, typeOfkindness);

        if (typeOfkindness === 'all'){
          return true;
        }

        return (val.type === typeOfkindness);
      });
    };
  })
  .name;
