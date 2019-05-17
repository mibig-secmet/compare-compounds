import angular from "angular";
import uiRouter from "angular-ui-router";
import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes.js"; // other routes will be declared from within the components
import "./assets/css/style.css";
import directives from "./directives";

import home from "./home"
import compare from "./compare"

angular.module("compare-compounds", [
    uiRouter,
    home,
    compare
]).config(routes);

directives().forEach(function(directive) {
    angular.module("compare-compounds").directive(directive.name, directive.function)
})

angular.module("compare-compounds").factory('Scopes', function ($rootScope) {
    var mem = {};
    return {
        store: function (key, value) {
            mem[key] = value;
        },
        get: function (key) {
            return mem[key];
        }
    };
});

angular.module("compare-compounds").controller("headerController", function($scope, $location, Scopes) {
    Scopes.store('headerController', $scope);
    $scope.bgcId = "";
    $scope.clickSubmit = function() {
        $location.url("compare/" + $scope.bgcId);
    }
})