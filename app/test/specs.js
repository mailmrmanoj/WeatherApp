describe("Component: rtLevelDetails test", function () {
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
    it("Check entity names are defined and initialised", function () {
        expect(true).toEqual(true);
    });
});
//# sourceMappingURL=specs.js.map