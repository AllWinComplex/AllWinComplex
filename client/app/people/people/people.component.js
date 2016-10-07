'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './people.routes';

export class PeopleComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('awcApp.people', [uiRouter])
  .config(routes)
  .component('people', {
    template: require('./people.html'),
    controller: PeopleComponent,
    controllerAs: 'peopleCtrl'
  })
  .name;
