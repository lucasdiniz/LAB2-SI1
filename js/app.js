/**
 * Created by lucasdiniz on 23/11/16.
 */

var app = angular.module('myApp', []);

app.controller('controller', function($scope){

    $scope.cont = 0;
    $scope.total = 0;
    $scope.actions = [];
    $scope.dummy = "";

    $scope.update = function(){
        $scope.actions.push($scope.dummy);
        $scope.total = $scope.total + 1;
        $scope.dummy = "";

    };

    $scope.go = function(actionDone){

        $scope.cont = $scope.cont + 1;
        var index = $scope.actions.indexOf(actionDone);
        $scope.actions.splice(index,1);
        alert("Tarefa realizada!");
    };


});