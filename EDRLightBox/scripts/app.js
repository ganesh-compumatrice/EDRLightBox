


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
            ngModel: '='
           
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

angular.module('EDRLightbox').directive('pwCheck', [function () {
      return {
          require: 'ngModel',
          link: function (scope, elem, attrs, ctrl) {
              var firstPassword = '#' + attrs.pwCheck;
              elem.add(firstPassword).on('keyup', function () {
                  scope.$apply(function () {
                      var v = elem.val() === $(firstPassword).val();
                      ctrl.$setValidity('pwmatch', v);
                  });
              });
          }
      }
}]);


angular.module('EDRLightbox').directive('rcSubmit', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        require: ['rcSubmit', '?form'],
        controller: ['$scope', function ($scope) {
            this.attempted = false;

            var formController = null;

            this.setAttempted = function () {
                this.attempted = true;
            };

            this.setFormController = function (controller) {
                formController = controller;
            };

            this.needsAttention = function (fieldModelController) {
                if (!formController) return false;

                if (fieldModelController) {
                    return fieldModelController.$invalid && (fieldModelController.$dirty || this.attempted);
                } else {
                    return formController && formController.$invalid && (formController.$dirty || this.attempted);
                }
            };
        }],
        compile: function (cElement, cAttributes, transclude) {
            return {
                pre: function (scope, formElement, attributes, controllers) {

                    var submitController = controllers[0];
                    var formController = (controllers.length > 1) ? controllers[1] : null;

                    submitController.setFormController(formController);

                    scope.rc = scope.rc || {};
                    scope.rc[attributes.name] = submitController;
                },
                post: function (scope, formElement, attributes, controllers) {

                    var submitController = controllers[0];
                    var formController = (controllers.length > 1) ? controllers[1] : null;
                    var fn = $parse(attributes.rcSubmit);

                    formElement.bind('submit', function (event) {
                        submitController.setAttempted();
                        if (!scope.$$phase) scope.$apply();

                        if (!formController.$valid) return false;

                        scope.$apply(function () {
                            fn(scope, { $event: event });
                        });
                    });
                }
            };
        }
    };
}]);