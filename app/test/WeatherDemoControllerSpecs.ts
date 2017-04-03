///<reference path="Reference.ts"/>

describe("Weather app controller test", () => {
    var scope, controller, demoService, weatherAppController;
    beforeEach(angular.mock.module("angular.weatherApp"));
    beforeEach(angular.mock.inject(function ($rootScope, $controller, $injector, _$httpBackend_, _$controller_, _$q_) {
        scope = $rootScope.$new();
        demoService = $injector.get('DemoService');
        controller = _$controller_;
        weatherAppController = $controller('WeatherAppController', {
            $scope: scope,
            $rootScope: scope,
            DemoService: demoService
        });
    }));
    it("Check JSON are initialised and defined for scope.weatherData", () => {
        expect(scope.weatherData).toEqual(AngularWeatherApp.MockData.MOCK_WEATHER_DATA);
    });
});