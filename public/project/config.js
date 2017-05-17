$(document).click(function(e) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768){
            $("#collapsable-nav").collapse("hide");
    }
});

(function () {
    angular
        .module("BonAppetit",["ui.router"])
        .config(configuration);

            function configuration($stateProvider, $urlRouterProvider,$locationProvider) {

            $locationProvider.hashPrefix("");

            $stateProvider

            //route for the main page
                .state("index",{
                    url:"/",
                    views: {
                        "header": {
                            templateUrl: "views/main/header.view.html"
                        },
                        "content": {
                            templateUrl: "views/main/main.view.html",
                            controller: "MainController",
                            controllerAs: "model"
                        }
                    }
                })

                //route for register page
                .state("index.register", {
                    url:"register",
                    views: {
                        "content@": {
                            templateUrl : "views/users/register.view.html"
                        }
                    }
                })

                //route for login page
                .state("index.login", {
                    url:"login",
                    views: {
                        "content@": {
                            templateUrl : "views/users/login.view.html"
                        }
                    }

                })

                //route for location results page
                .state("index.location", {
                    url:"location/:location",
                    views: {
                        "content@": {
                            templateUrl : "views/location/location.results.view.html",
                            controller: "SearchLocationController",
                            controllerAs: "model"
                        }
                    }
                });

            $urlRouterProvider.otherwise("/");

        }
})();