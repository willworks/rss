(function() {
    angular
        .module('app')
        .directive('navbar', navbar);
    
    function navbar($state) {
        return {
            restrict: 'EA',
            scope: {
                title: '='
            },
            replace: true,
            templateUrl: 'navbar/navbar.html',
            controllerAs: 'vm',            
            controller: function navbarController($timeout, tools) {
                let vm = this, timeout;
                vm.blur = blur;
                vm.search = search;
                vm.focus = focus;

                function focus() {
                    if(timeout) {
                        $timeout.cancel(timeout);
                    }
                    vm.active = true;
                }
                function blur() {
                    timeout = $timeout(() => {
                        vm.active = false;                        
                    }, 800);
                }
                function search(feedlink) {
                    // Check again
                    if(!tools.checkUrl(feedlink)) {
                        return false;
                    } else {
                        $state.go('search', {feedlink: feedlink});
                    }
                }
            }
        }
    }

}());