///<reference path="Reference.ts"/>
module AngularWeatherApp {
    "use strict";
    // import commonConstants = AngularWeatherApp.Common.Constants.CommonConstants;
    // import globalConstants = AngularWeatherApp.Constants.GlobalConstants;
    export class App {
        module: ng.IModule;

        constructor() {
            var dependencies = [AngularWeatherApp.AngularWeatherConstants.DIRECTIVES, , AngularWeatherApp.AngularWeatherConstants.FACADES, AngularWeatherApp.AngularWeatherConstants.SERVICES, AngularWeatherApp.AngularWeatherConstants.CONTROLLERS, "restangular", "ui.router"];

            //dependencies = dependencies.concat(window.reactoreConfigurations.moduleConfig.dependencies);
            this.module = angular.module(AngularWeatherApp.AngularWeatherConstants.MODULE, dependencies);
            var router = new AngularWeatherApp.Router();
            var bootstraper = new AngularWeatherApp.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
            // this.setModuleUrlConstants();
        }
        // setModuleUrlConstants = () => {
        //     $.ajax({
        //         url: AngularWeatherApp.AngularWeatherConstants.CONFIG_JSON_FILE_PATH,
        //         dataType: "json",
        //         async: false,
        //         success: (json) => {
        //             this.module.value(AngularWeatherApp.AngularWeatherConstants.CONFIG_CONSTANT, json);
        //         },
        //         error: (error) => {
        //             console.log(error);
        //         }
        //     });
        // }
    };
    new App();
}
