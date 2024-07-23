import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SelectorComponent } from '../ui/selector/selector.component';
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
    GeneralesComponent = __decorate([
        Component({
            selector: 'app-generales',
            standalone: true,
            imports: [SelectorComponent],
            templateUrl: './generales.component.html',
            styleUrl: './generales.component.css'
        })
    ], GeneralesComponent);
    return GeneralesComponent;
}());
export { GeneralesComponent };
//# sourceMappingURL=generales.component.js.map