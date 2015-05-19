
angular.module('EDRLightbox', ['ui.router.state']);

angular.module('EDRLightbox').config([
  '$stateProvider', '$urlRouterProvider', '$httpProvider',
  function ($stateProvider, $urlRouterProvider, $httpProvider) {

      $urlRouterProvider.otherwise('/');
      $stateProvider.state('/', {

          'url': '/',
          'controller': 'signInController',
          'templateUrl': 'modules/signin/views/signIn.html',

      })
      .state('signUp', {

          'url': '/signUp',
          'controller': 'signUpController',
          'templateUrl': 'modules/signup/views/SignUp.html',
    
      })
  }
]);

angular.module('EDRLightbox').directive("btncomp", function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            eventHandler: '&ngClick',
            btnlbl: "=btnlbl",
            btnclass:"=btnclass"
        },
        template: '<div><button type="button" class="{{btnclass}}" ng-click="btnMethod()" type="submit">{{btnlbl}}</button></div>'
    };
});

angular.module('EDRLightbox').directive('inputcomp', function () {
     return {
         restrict: 'E',
         transclude: true,
         scope: {
             inputngmodel: '=',
             plcholder: '=',
             required : '=',
             pattern: '=',
             type : '='
         },
         template: '<div><input type="{{type}}" class="form-control"  placeholder="{{plcholder}}" ng-model="inputngmodel" required="" >' + '<span class="help-block"></span>' + '<div ng-transclude></div>' + '</div>'
     };
 });



angular.module('EDRLightbox').directive('emailCtrl', function () {
    return {
        restrict: 'E',
        scope: {
            ngModel: "=",
            plcholder: '='
        },
        templateUrl: 'components/emailControl.html'
    };
});

angular.module('EDRLightbox').directive('zipCtrl', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            ngModel: '=',
            required : '='
          },
        templateUrl: 'components/zipControl.html'
    };
});

angular.module('EDRLightbox').directive('passwordCtrl', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            ngModel: "=",
            plcholder: '=',
            pattern: '='
        },
        templateUrl: 'components/passwordControl.html'
    };
});

angular.module('EDRLightbox').directive('stateCtrl', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        restrict: 'E',
        scope: {
            ngModel: '=',
        },
        templateUrl: 'components/stateControl.html',
        link: function ($scope) {
            $http.get('json/states.js').success(function (data) {
                $scope.States = data;
                console.log("sss " + data);
            });
        }
    };
}]);

angular.module('EDRLightbox').directive('industryCtrl',['$http', '$rootScope', function ($http, $rootScope) {
    return {
        restrict: 'E',
        scope: {
            ngModel: '='
        },
        templateUrl: 'components/industry_ddControl.html',
        link: function ($scope) {
            $http.get('json/industry.js').success(function (data) {
                $scope.Industry = data;
                console.log("sss " + data);
            });
        }
    };
}]);