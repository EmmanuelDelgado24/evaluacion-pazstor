import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { ContainerComponent } from '../../layouts/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
var IngenieriaComponent = /** @class */ (function () {
    function IngenieriaComponent() {
    }
    IngenieriaComponent = __decorate([
        Component({
            selector: 'app-ingenieria',
            standalone: true,
            imports: [HeaderComponent, LayoutComponent, ContainerComponent, RouterOutlet],
            templateUrl: './ingenieria.component.html',
            styleUrl: './ingenieria.component.css'
        })
    ], IngenieriaComponent);
    return IngenieriaComponent;
}());
export default IngenieriaComponent;
//# sourceMappingURL=ingenieria.component.js.map