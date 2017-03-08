angular
    .module('toDo.completeTodo')
    .config(completeTodoConfig);

function completeTodoConfig($stateProvider) {
    $stateProvider.state({
        name: 'complete',
        url: '/complete',
        templateUrl: 'toDo/features/completeTodo/completeTodo.html',
        controller: 'CompleteTodoCtrl',
        controllerAs: 'CompleteVM'
    });
}