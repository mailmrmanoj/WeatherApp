///<reference path="Reference.ts"/>
module AngularWeatherApp.Facades {
    import services = AngularWeatherApp.Services;
    export interface ISystemFacade {
        crudService: services.CrudService;
        $qService: ng.IQService;
        restangularService: any;
    }
    export class SystemFacade implements ISystemFacade {
        static $inject = ["CrudService", "$q", "Restangular"
        ];
        constructor(public crudService: AngularWeatherApp.Services.CrudService,
            public $qService: ng.IQService, public restangularService) {
        }
    }
}

