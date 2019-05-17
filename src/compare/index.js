import angular from "angular";
import uiRouter from "angular-ui-router";

let appConfig = require("../config.js");

function fetchCompoundInfo(data) {
    if (data === undefined) {
        return undefined
    }
    let names = [];
    data.general_params.compounds.forEach(function(compound) {
        names.push(compound.compound);
    });
    return {
        names: names,
        compounds: data.general_params.compounds
    }
}

routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
    $stateProvider
    .state("compare", {
        url: "/compare/{bgcId}",
        template: require("./template.html"),
        controller: function($scope, bgcId, oldData, newData, Scopes) {
            Scopes.get("headerController").bgcId = bgcId;
            $scope.allData = [
                {
                    header: "Original",
                    data: fetchCompoundInfo(oldData)
                },
                {
                    header: "Generated",
                    data: fetchCompoundInfo(newData)
                }
            ]
        },
        resolve: {
            bgcId: ['$transition$', function($transition$) {
                return $transition$.params().bgcId;
            }],
            oldData: ['$http', '$transition$', function($http, $transition$) {
                let dataUrl = appConfig.dataPath.old + "/" + $transition$.params().bgcId + ".json";
                return $http.get(dataUrl).then(
                    function(response) { // success
                        return response.data;
                    },
                    function() {
                        return undefined;
                    }
                )
            }],
            newData: ['$http', '$transition$', function($http, $transition$) {                    
                let dataUrl = appConfig.dataPath.new + "/" + $transition$.params().bgcId + ".json";
                return $http.get(dataUrl).then(
                    function(response) { // success
                        return response.data;
                    },
                    function() {
                        return undefined;
                    }
                )
            }],
        }
    });
};