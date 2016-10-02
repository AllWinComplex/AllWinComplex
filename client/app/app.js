'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';

// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';

import main from './main/main.component';
import welcome from './welcome/welcome.component';

import inBound from './status/inBound/inBound.component';
import outBound from './status/outBound/outBound.component';

import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import tabBar from './components/tabBar/tabBar.component';
import welcomeCanvas from './components/welcomeCanvas/welcomeCanvas.directive';


import './app.scss';

angular.module('awcApp', [
    inBound, outBound,
    welcome, welcomeCanvas, 
    ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter, _Auth,
    account, admin, navbar, footer, main, constants, socket, util, tabBar
  ])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['awcApp'], {
      strictDi: true
    });
  });
