angular
    .module('toDo.component.navbar')
    .directive('navbar', Navbar);

function Navbar() {
    return {
        restrict: 'E',
        scope: {
            navData: '@'
        },
        templateUrl: '/toDo/features/components/navbar/navbar.html',
        controller: NavbarCtrl,
        controllerAs: 'NavbarVM',
        bindToController: true
    };
}

function NavbarCtrl() {

}