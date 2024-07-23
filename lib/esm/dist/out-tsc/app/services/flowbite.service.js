import { __decorate, __param } from "tslib";
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var FlowbiteService = /** @class */ (function () {
    function FlowbiteService(platformId) {
        this.platformId = platformId;
    }
    FlowbiteService.prototype.loadFlowbite = function (callback) {
        if (isPlatformBrowser(this.platformId)) {
            import('flowbite').then(function (flowbite) {
                callback(flowbite);
            });
        }
    };
    return FlowbiteService;
}());
FlowbiteService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(PLATFORM_ID))
], FlowbiteService);
export { FlowbiteService };
//# sourceMappingURL=flowbite.service.js.map
//# sourceMappingURL=flowbite.service.js.map