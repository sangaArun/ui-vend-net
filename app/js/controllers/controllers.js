'use strict';

/* Controllers */

var vendorControllers = angular.module('vendorControllers', []);


vendorControllers.controller('vendorHomeCtrl', ['$scope',
  function($scope) {
  $scope.chartConfig = {
                options: {
                    chart: {
                        type: 'pie'
                    }
                },
                series: [{
                    data: [10, 15, 12, 8, 7]
                }],
                title: {
                    text: 'High Chart - PIE Chart'
                },

                loading: false
            }
    console.log('success');
  }]);

vendorControllers.controller('vendorChildCtrl', ['$scope',
    function($scope) {
      console.log('success');
      $scope.chartConfig = {
              options: {
                  chart: {
                      type: 'bar'
                  }
              },
              series: [{
                  data: [10, 15, 12, 8, 7]
              }],
              title: {
                  text: 'High Chart - BAR Chart'
              },

              loading: false
          }
    }]);


