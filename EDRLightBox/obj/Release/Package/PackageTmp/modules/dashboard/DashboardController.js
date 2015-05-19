angular.module('EDRLightbox').controller('dashboard_Ctrl', ['$scope', '$rootScope','$location','$state', function ($scope,  $rootScope,$location,$state) {


   


    $rootScope.$broadcast('bringUpHeader');
    $scope.value = "Foo";
    $scope.Redirect = function () {
       // $scope.currentUser = true;
       // $state.go('landingpage');
        
        // $location.path('/integrations.html')
        $state.go('integrations');
    }
}]);