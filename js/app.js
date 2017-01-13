angular.module('todoApp', [])
  .controller('TodoListController', ['$scope', function($scope) {

    $scope.todos = [
      {text:"Learn angular", done: true},
      {text:"Give a talk", done: false}
    ]


  }]);
