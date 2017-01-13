angular.module('todoApp', [])
  .controller('TodoListController', ['$scope', function($scope) {

    $scope.todos = [
      {text:"Learn angular", done: true},
      {text:"Give a talk", done: false}
    ]

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.yourTask, done: false});
    }

    $scope.deleteTodo = function(item) {
      $scope.todos.splice(item, 1);

    }


  }]);
