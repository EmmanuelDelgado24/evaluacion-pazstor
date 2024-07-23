import { __awaiter, __generator } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil.component';
describe('PerfilComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TestBed.configureTestingModule({
                        imports: [PerfilComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = TestBed.createComponent(PerfilComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=perfil.component.spec.js.map
//# sourceMappingURL=perfil.component.spec.js.map