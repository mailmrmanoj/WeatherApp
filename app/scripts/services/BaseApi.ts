///<reference path="Reference.ts"/>
module AngularWeatherApp.Services {
    import constants = AngularWeatherApp;
    import facades = AngularWeatherApp.Facades;
    export class BaseApi extends AngularWeatherApp.Repositories.BaseCrudRepository {
        constructor($injector, entityName: string) {
            var systemFacade = $injector.get("SystemFacade")
            super(systemFacade, AngularWeatherConstants.serverUrl, entityName, $injector);
        }
    }
}