angular.module('numpadApp', [])
  .controller('NumpadController', ['$scope', function($scope) {
    $scope.grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['clr', 0, '<']
    ];
    
    $scope.fullNum = '';
    
    $scope.maxDigits = 4;
    
    $scope.numKeyStatus = 'enabled';
    
    $scope.keyClass = function(key) {
      if (isNaN(parseInt(key))) {
        return 'key'
      }
      return 'num-key';
    };
    
    $scope.press = function(key) {
      if (!isNaN(parseInt(key))) {
        if ($scope.numKeyStatus == 'enabled') {
          $scope.fullNum += key;
          if ($scope.fullNum.length >= $scope.maxDigits) {
            $scope.numKeyStatus = 'disabled';
          }
        }
      }
      else if (key == '<') {
        $scope.fullNum = $scope.fullNum.slice(0, -1);
        $scope.numKeyStatus = 'enabled';
      }
      else if (key == 'clr') {
        $scope.fullNum = '';
        $scope.numKeyStatus = 'enabled';
      }
    };
  }]);