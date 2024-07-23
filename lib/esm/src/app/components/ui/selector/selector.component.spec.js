import { __awaiter, __generator } from "tslib";
import { TestBed } from '@angular/core/testing';
import { SelectorComponent } from './selector.component';
describe('SelectorComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TestBed.configureTestingModule({
                        imports: [SelectorComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = TestBed.createComponent(SelectorComponent);
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
//# sourceMappingURL=selector.component.spec.js.map