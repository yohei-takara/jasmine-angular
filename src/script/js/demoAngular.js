angular.module('demoApp', [])
  .controller('demoAppCtl', ['$scope', function($scope) {
    $scope.name = "angular-unit-test";
  }])
  .filter('numberCustomFilter', ['$filter', function ($filter) {
     return function (num) {
         if (num != null) {
             if (num >= 0) {
                 return $filter('number')(num);
             }
         }
         return "-";
     }
  }]);
