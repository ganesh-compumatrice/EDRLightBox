angular.module('EDRLightbox').controller('signUpController', ['$scope', '$state', function ($scope, $state) {

    /* Button Component */
    $scope.btnlbl = "CANCEL";
    $scope.btnclass = "btn btn-default btn-block";

    $scope.btnsignuplbl = "SIGN UP";
    $scope.btnsignupclass = "btn btn-primary btn-block";

    /* Component Placeholders */

    $scope.email = "Email Address";
    $scope.reEmail = "Retype Email Address";
    

    /* Component ng-models */

    $scope.zipcode = "";
    $scope.useremail = "";
    $scope.reusereemail = "";
    $scope.userpassword = "";
    $scope.userrepassword = "";
    $scope.zipcode = "";
    $scope.zipRequired = "true";


    $scope.btnCancel = function () {
       
        window.location.href = ("/");
    };
    $scope.btnSignup = function (registerForm) {
        if (registerForm.$invalid) {

        } else {
            console.log("Sign Up Click");
            console.log($scope.stateValue);
            $scope.RegisteredData = {
                companyname: $scope.companyname,
                Industry: $scope.industryValue.name,
                FirstName: $scope.firstname,
                LastName: $scope.lastname,
                Address: $scope.address,
                Suite: $scope.suit,
                ZipCode: $scope.zipcode,
                City: $scope.city,
                State: $scope.stateValue.name,
                Email: $scope.useremail,
                ReEmail: $scope.reusereemail,
                Password: $scope.userpassword,
                RePassword: $scope.userrepassword

            };
            console.log($scope.RegisteredData)
        }
    };
   
   

}]);