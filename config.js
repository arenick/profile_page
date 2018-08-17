"use strict";

angular
    .module("App")
    .config(["$routeProvider",($routeProvider) => {
        $routeProvider
            .when("/editProfile", {
                template: "<editProfile></editProfile>"
            })
            .when("/userProfile", {
                template: "<userProfile></userProfile>"
            })
            .otherwise({ redirectTo: "/userProfile" });
    }]);