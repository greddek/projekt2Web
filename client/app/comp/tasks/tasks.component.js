"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var zada_service_1 = require("../../uslugi/zada.service");
var ZadComponent = (function () {
    function ZadComponent(zadService) {
        var _this = this;
        this.zadService = zadService;
        this.zadService.getZadania()
            .subscribe(function (zadania) {
            _this.zadania = zadania;
        });
    }
    ZadComponent.prototype.addZadanie = function (event) {
        var _this = this;
        event.preventDefault();
        var nZadanie = {
            tytul: this.tytul,
            JestGotowe: false
        };
        this.zadService.addZadanie(nZadanie)
            .subscribe(function (zadania) {
            _this.zadania.push(zadania);
            _this.tytul = '';
        });
    };
    ZadComponent.prototype.deleteZad = function (id) {
        var zadania = this.zadania;
        this.zadService.deleteZad(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < zadania.length; i++) {
                    if (zadania[i]._id == id) {
                        zadania.splice(i, 1);
                    }
                }
            }
        });
    };
    ZadComponent.prototype.updateStatus = function (zadania) {
        var _task = {
            _id: zadania._id,
            tytul: zadania.tytul,
            JestGotowe: !zadania.JestGotowe
        };
        this.zadService.updateStatus(_task).subscribe(function (data) {
            zadania.JestGotowe = !zadania.JestGotowe;
        });
    };
    return ZadComponent;
}());
ZadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'zadania',
        templateUrl: 'tasks.component.html'
    }),
    __metadata("design:paramtypes", [zada_service_1.zadaService])
], ZadComponent);
exports.ZadComponent = ZadComponent;
//# sourceMappingURL=tasks.component.js.map