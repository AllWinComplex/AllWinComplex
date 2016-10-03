'use strict';
const angular = require('angular');

export class tabBarComponent {
  /*@ngInject*/
  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

    this.message = 'World';
  }
}

export default angular.module('awcApp.tabBar', [])
  .component('tabBar', {
    template: require('./tabBar.component.html'),//'<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: tabBarComponent,
    controllerAs: '$ctrl',
  })
  .name;
