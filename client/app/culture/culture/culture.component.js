'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './culture.routes';

export class CultureComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('awcApp.culture', [uiRouter])
  .config(routes)
  .component('culture', {
    template: require('./culture.html'),
    controller: CultureComponent,
    controllerAs: 'cultureCtrl'
  })
  .name;
