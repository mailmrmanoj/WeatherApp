///<reference path="Reference.ts"/>
module AngularWeatherApp.Controllers {
    import globalConstants = AngularWeatherApp.AngularWeatherConstants;
    export class WeatherAppController {
        static $inject = ["$scope", "DemoService"];

        constructor($scope, DemoService) {
            $scope.weatherData = AngularWeatherApp.MockData.MOCK_WEATHER_DATA;
        }
    }
}