import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { datos } from '../../../utils/data';
import { CommonModule } from '@angular/common';
var SelectorComponent = /** @class */ (function () {
    function SelectorComponent() {
        this.datos = datos;
    }
    SelectorComponent = __decorate([
        Component({
            selector: 'app-selector',
            standalone: true,
            imports: [CommonModule],
            templateUrl: './selector.component.html',
            styleUrl: './selector.component.css'
        })
    ], SelectorComponent);
    return SelectorComponent;
}());
export { SelectorComponent };
//# sourceMappingURL=selector.component.js.map