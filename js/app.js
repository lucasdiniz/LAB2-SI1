/**
 * Created by lucasdiniz on 23/11/16.
 */

var app = angular.module('myApp', []);

app.controller('controller', function($scope){


    $scope.action = function(newName){
        this.isDone = false;
        this.name = newName;
    };

    $scope.customStyle = {};
    $scope.total = 3;
    $scope.done = 0;
    $scope.actionList = [new $scope.action("Varrer a casa"), new $scope.action("Lavar os pratos"), new $scope.action("Fazer a feira")];

    $scope.changeTaskText = function(task){

        task.name = task.name.strike();
        console.log(task.name);
    };


    $scope.deleteTask = function(task){

        if(!confirm("Tem certeza que deseja remover a atividade?"))
            return;

        var index = $scope.actionList.indexOf(task);

        $scope.actionList.splice(index,1);
        $scope.total -= 1;
    };

    $scope.alreadyExist = function(){
        for(var i = 0 ; i < $scope.actionList.length ; i = i + 1){
            if($scope.actionList[i].name === $scope.actionName){
                return true;
            }
        }
        return false;
    };

    $scope.update = function(){

        if(alreadyExist($scope.actionName)){
            alert("Atividade já cadastrada!");
            return;
        }

        $scope.actionList.push(new $scope.action($scope.actionName));
        $scope.total = $scope.total + 1;
        $scope.clearForm();

    };

    $scope.clearForm = function() {
        $scope.actionName = "";
    };

    $scope.allDone = function(){
        for(var i = 0 ; i < $scope.actionList.length ; i = i + 1) {
            if (!$scope.actionList[i].isDone) {
                $scope.done = $scope.done + 1;
            }
            $scope.actionList[i].isDone = true;
        }
    };


    $scope.calcDone = function(){
        var sumDone = 0;
        for(var i = 0 ; i < $scope.actionList.length ; i = i + 1) {
            if($scope.actionList[i].isDone) sumDone += 1;
        }
        return sumDone;
    };

});