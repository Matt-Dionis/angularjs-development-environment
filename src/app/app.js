'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import AppComponent from './app.component';

angular.module('app', [
    uirouter
  ])
  .config(($locationProvider, $stateProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');

    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }

    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  })
  .component('app', AppComponent);
