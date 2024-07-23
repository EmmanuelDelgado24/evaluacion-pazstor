import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-evaluacion';
    }
    AppComponent.prototype.ngOnInit = function () {
        initFlowbite();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [RouterOutlet],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css',
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
//# sourceMappingURL=app.component.js.map