'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './more.routes';

export class MoreComponent {
  /*@ngInject*/
  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  

    this.message = 'Hello';
  }
}

export default angular.module('awcApp.more', [uiRouter])
  .config(routes)
  .component('more', {
    template: require('./more.html'),
    controller: MoreComponent,
    controllerAs: '$ctrl'
  })
  .name;
