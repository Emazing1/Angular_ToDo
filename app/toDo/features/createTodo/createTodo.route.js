angular
    .module('toDo.createTodo')
    .config(createTodoConfig);

function createTodoConfig($stateProvider) {
    $stateProvider.state({
        name: 'create',
        url: '/create',
        templateUrl: 'toDo/features/createTodo/createTodo.html',
        controller: 'CreateTodoCtrl',
        controllerAs: 'CreateVM'
    });
}