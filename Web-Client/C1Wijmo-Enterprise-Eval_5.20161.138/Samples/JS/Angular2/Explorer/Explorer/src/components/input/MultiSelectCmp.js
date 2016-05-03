'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var InputBaseCmp_1 = require('./InputBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// MultiSelect sample component.
var MultiSelectCmp = (function (_super) {
    __extends(MultiSelectCmp, _super);
    function MultiSelectCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    MultiSelectCmp = __decorate([
        core_1.Component({
            selector: 'multi-select-cmp'
        }),
        core_1.View({
            templateUrl: 'src/components/input/multiSelectCmp.html',
            directives: [wjNg2Input.WjMultiSelect, common_1.CORE_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], MultiSelectCmp);
    return MultiSelectCmp;
})(InputBaseCmp_1.InputBaseCmp);
exports.MultiSelectCmp = MultiSelectCmp;
//# sourceMappingURL=MultiSelectCmp.js.map