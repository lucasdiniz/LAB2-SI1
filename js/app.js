/**
 * Created by lucasdiniz on 23/11/16.
 */

var app = angular.module('myApp', []);

app.controller('controller', function($scope){

    $scope.action = function(newName){
        this.isDone = false;
        this.name = newName;
    }

    $scope.total = 0;
    $scope.done = 0;
    $scope.actionList = [];

    $scope.update = function(){

        for(var i = 0 ; i < $scope.actionList.length ; i = i + 1){
            if($scope.actionList[i].name === $scope.actionName){
                alert("Atividade já cadastrada!");
                return;
            }
        }

        $scope.actionList.push(new $scope.action($scope.actionName));
        $scope.total = $scope.total + 1;
        $scope.clearForm();

    };

    $scope.clearForm = function() {
        $scope.actionName = "";
    };

    $scope.changeStatus = function(actionDone){

        var index = $scope.actionList.indexOf(actionDone);

        if($scope.actionList[index].isDone)
            $scope.done = $scope.done - 1;
        else
            $scope.done = $scope.done + 1;

        $scope.actionList[index].isDone = !$scope.actionList[index].isDone;
    };


});