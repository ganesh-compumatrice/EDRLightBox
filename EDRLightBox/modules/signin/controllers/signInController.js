angular.module('EDRLightbox').controller('signInController', ['$scope', '$state', '$location', '$rootScope', '$document', '$timeout', function ($scope, $state, $location, $rootScope, $document, $timeout) {

    /* Button Component */ 
    //$scope.btnLoginlbl = "Login";
    //$scope.btnLoginclass = "btn btn-primary btn-block";

    //$scope.btnRegisterlbl = "Register";
    //$scope.btnRegisterclass = "btn btn-default btn-block";

    /* Place holder & model Components*/
    $scope.email = "Account / Email Address";
   $scope.passPattern = "";
    $scope.userpassword = "";
    $scope.useremail = "";

    /* Method */
     $scope.btnRegiter = function () {
        console.log("Register Clicked!");
        window.location.href = ("#/signUp");
    };

     $scope.btnLogin = function (loginForm) {
         $scope.$broadcast('show-errors-check-validity');
         $scope.submitted = true;
         if($scope.loginForm.$valid){
             console.log("Login Clicked!");
             console.log("Useremail " + $scope.useremail);
             console.log("password " + $scope.userpassword);
             console.log("Category " + $scope.category);
             console.log("Remember " + $scope.remember);
         }
         else {
             console.log("Invalid form");
             return;
         }
       
     }
}]);