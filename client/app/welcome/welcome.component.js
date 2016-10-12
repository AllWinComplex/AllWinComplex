'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

// import _Auth from '../../components/auth/auth.module';

import routes from './welcome.routes';


export class WelcomeComponent {
  /*@ngInject*/
  constructor(Auth, $state) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

    this.message = 'Hello';

  }

}

export default angular.module('awcApp.welcome', [uiRouter])
  .config(routes)
  .component('welcome', {
    template: require('./welcome.html'),
    controller: WelcomeComponent,
    controllerAs: '$ctrl'
  })
  .name;



