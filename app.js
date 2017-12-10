(function () {
  'use strict'

  angular.module('lunchCheck', [])
  .controller('MsgController', MsgController);
  MsgController.$inject = ['$scope'];

  function MsgController($scope){
    $scope.value = "";
    $scope.msg = "";
    $scope.clickVerify = function(string) {
      var newArray = string.split(",");
      var count = 0;
      for(var i = 0; i<newArray.length; i++) {
        var arrayItem = newArray[i];
        var newString = verifyString(arrayItem);
        if(newString != "") count++;
      };
      if(count > 0 && count <= 3){
        $scope.colorStyle = {
              "color" : "#029F12",
              "background-color": "#D1FFD6",
              "margin-top" : "30px",
              "border-radius": "100%"
          }
         $scope.msg = "Enjoy!"
       }
      else if(count > 3) {
        $scope.colorStyle = {
              "color" : "#AC0B30",
              "background-color": "#FFE1E8",
              "margin-top" : "30px",
              "border-radius": "100%"
          }
        $scope.msg = "Too much!"
      }
      else {
        $scope.colorStyle = {
              "color" : "white"
          }
        $scope.msg = "Please enter data first";
      }
    }

    function verifyString(string) {
      for(var i = 0; i<string.length; i++)  {
          string = string.replace(" ", "");
      }
      return string;
    }
  }


})
();
