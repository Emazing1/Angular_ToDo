angular
    .module('toDo.listTodo')
    .config(listTodoConfig);

function listTodoConfig($stateProvider) {
    $stateProvider.state({
        name: 'list',
        url: '/',
        templateUrl: 'toDo/features/listTodo/listTodo.html',
        controller: 'ListTodoCtrl',
        controllerAs: 'ListVM'
    });
}