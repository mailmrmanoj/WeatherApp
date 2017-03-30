///<reference path="Reference.ts"/>
module AngularWeatherApp {

    export class Router {
        initialize($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/test");
            $stateProvider
                //region  navigation
                .state('test', {
                    "url": "/test",
                    templateUrl: 'views/default.html',
                    controller: 'TestController'

                })
            //endregion
        }
    }
}
