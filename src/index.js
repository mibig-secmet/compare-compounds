import angular from "angular";
import uiRouter from "angular-ui-router";
import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes.js"; // other routes will be declared from within the components

import home from "./home"
import compare from "./compare"

angular.module("compare-compounds", [
    uiRouter,
    home,
    compare
]).config(routes);