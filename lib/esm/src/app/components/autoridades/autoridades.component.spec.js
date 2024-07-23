import { __awaiter, __generator } from "tslib";
import { TestBed } from '@angular/core/testing';
import { AutoridadesComponent } from './autoridades.component';
describe('AutoridadesComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TestBed.configureTestingModule({
                        imports: [AutoridadesComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = TestBed.createComponent(AutoridadesComponent);
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
//# sourceMappingURL=autoridades.component.spec.js.map