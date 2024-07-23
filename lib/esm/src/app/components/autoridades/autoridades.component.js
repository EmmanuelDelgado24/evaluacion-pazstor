import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { autoridades, } from '../../utils/data';
var AutoridadesComponent = /** @class */ (function () {
    function AutoridadesComponent() {
        this.autoridades = autoridades;
        this.displayedColumns = ['autoridad'];
        this.dataSource = autoridades;
    }
    AutoridadesComponent = __decorate([
        Component({
            selector: 'app-autoridades',
            standalone: true,
            imports: [],
            templateUrl: './autoridades.component.html',
            styleUrl: './autoridades.component.css'
        })
    ], AutoridadesComponent);
    return AutoridadesComponent;
}());
export { AutoridadesComponent };
//# sourceMappingURL=autoridades.component.js.map