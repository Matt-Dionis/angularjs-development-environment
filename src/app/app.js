'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import AppComponent from './app.component';

angular.module('app', [
    uirouter
  ])
  .config($locationProvider => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);
