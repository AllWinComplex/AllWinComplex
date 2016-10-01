'use strict';
const angular = require('angular');

export class tabBarComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('awcApp.tabBar', [])
  .component('tabBar', {
    template: require('./tabBar.component.html'),//'<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: tabBarComponent
  })
  .name;
