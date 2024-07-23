import { __awaiter, __generator } from "tslib";
import { TestBed } from '@angular/core/testing';
import { IngenieriaComponent } from './ingenieria.component';
describe('IngenieriaComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TestBed.configureTestingModule({
                        imports: [IngenieriaComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = TestBed.createComponent(IngenieriaComponent);
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
//# sourceMappingURL=ingenieria.component.spec.js.map