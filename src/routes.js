routes.$inject = ["$urlRouterProvider"];
export default function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
};