import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from '../../layouts/container/container.component';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { GeneralesComponent } from '../../components/generales/generales.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MisionComponent } from '../../components/mision/mision.component';
import { ResponsabilidadesComponent } from '../../components/responsabilidades/responsabilidades.component';
import { PerfilComponent } from '../../components/perfil/perfil.component';
import { AutoridadesComponent } from '../../components/autoridades/autoridades.component';
import { CompetenciasComponent } from '../../components/competencias/competencias.component';
import { CompetenciascomportamentalesComponent } from '../../components/competenciascomportamentales/competenciascomportamentales.component';
import { ControldocumentoComponent } from '../../components/controldocumento/controldocumento.component';
import { ControlcambiosComponent } from '../../components/controlcambios/controlcambios.component';
import { SelectorComponent } from '../../components/ui/selector/selector.component';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            standalone: true,
            imports: [RouterOutlet, GeneralesComponent, ContainerComponent, LayoutComponent, HeaderComponent,
                MisionComponent, ResponsabilidadesComponent, PerfilComponent, AutoridadesComponent, CompetenciasComponent,
                CompetenciascomportamentalesComponent, ControldocumentoComponent, ControlcambiosComponent, SelectorComponent],
            templateUrl: './home.component.html',
            styleUrl: './home.component.css'
        })
    ], HomeComponent);
    return HomeComponent;
}());
export default HomeComponent;
//# sourceMappingURL=home.component.js.map