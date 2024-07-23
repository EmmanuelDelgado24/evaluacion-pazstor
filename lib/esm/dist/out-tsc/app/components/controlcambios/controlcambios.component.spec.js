import { __awaiter, __generator } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ControlcambiosComponent } from './controlcambios.component';
describe('ControlcambiosComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TestBed.configureTestingModule({
                        imports: [ControlcambiosComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = TestBed.createComponent(ControlcambiosComponent);
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
//# sourceMappingURL=controlcambios.component.spec.js.map
//# sourceMappingURL=controlcambios.component.spec.js.map