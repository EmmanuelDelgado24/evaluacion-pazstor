import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { RouterLinkActive } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-evaluacion';
    }
    AppComponent.prototype.ngOnInit = function () {
        initFlowbite();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            standalone: true,
            imports: [RouterOutlet, RouterLink, RouterLinkActive],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css',
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map