'use strict';

/* App Module */

var vendorApp = angular.module('vendorApp', [
  'vendorControllers',
  'vendorServices',
  'vendorFactories',
  'vendorDirectives',
  'ui.router',
  'highcharts-ng'
]);

vendorApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider,$urlRouterProvider) {

    //$urlRouterProvider.otherwise("/vendor");

    $stateProvider
        .state('vendor', {
          url: "/vendor",
          templateUrl: "partials/vendorBase.html",
          controller:"vendorHomeCtrl"
        })
        .state('vendor.child', {
          url: "/vendorChild",
          templateUrl: "partials/vendorChild1.html",
          controller: "vendorChildCtrl"
        })



  }]);
