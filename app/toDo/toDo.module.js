angular
    .module('toDo', [
        'ui.router',
        'toDo.listTodo',
        'toDo.createTodo',
        'toDo.completeTodo',
        'toDo.component.navbar',
        'toDo.component.todoItem',
        'toDo.service.todoApi'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}