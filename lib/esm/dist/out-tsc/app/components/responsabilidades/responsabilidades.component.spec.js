import { __awaiter, __generator } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ResponsabilidadesComponent } from './responsabilidades.component';
describe('ResponsabilidadesComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TestBed.configureTestingModule({
                        imports: [ResponsabilidadesComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = TestBed.createComponent(ResponsabilidadesComponent);
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
//# sourceMappingURL=responsabilidades.component.spec.js.map
//# sourceMappingURL=responsabilidades.component.spec.js.map