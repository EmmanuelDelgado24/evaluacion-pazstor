import { __decorate } from "tslib";
import { Component } from '@angular/core';
var GeneralesComponent = /** @class */ (function () {
    function GeneralesComponent(flowbiteService) {
        this.flowbiteService = flowbiteService;
    }
    GeneralesComponent.prototype.ngOnInit = function () {
        this.flowbiteService.loadFlowbite(function (flowbite) {
            // Your custom code here
            console.log('Flowbite loaded', flowbite);
        });
    };
    return GeneralesComponent;
}());
GeneralesComponent = __decorate([
    Component({
        selector: 'app-generales',
        standalone: true,
        imports: [],
        templateUrl: './generales.component.html',
        styleUrl: './generales.component.css'
    })
], GeneralesComponent);
export { GeneralesComponent };
//# sourceMappingURL=generales.component.js.map
//# sourceMappingURL=generales.component.js.map