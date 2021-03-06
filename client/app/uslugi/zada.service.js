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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var zadaService = (function () {
    function zadaService(http) {
        this.http = http;
        console.log('Inicjalizacja Uslug ziom...');
    }
    zadaService.prototype.getZadania = function () {
        return this.http.get('/api/zadania')
            .map(function (res) { return res.json(); });
    };
    zadaService.prototype.addZadanie = function (nZadanie) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/zad', JSON.stringify(nZadanie), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    zadaService.prototype.deleteZad = function (id) {
        return this.http.delete('/api/zad/' + id)
            .map(function (res) { return res.json(); });
    };
    zadaService.prototype.updateStatus = function (zadania) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/zad/' + zadania._id, JSON.stringify(zadania), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return zadaService;
}());
zadaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], zadaService);
exports.zadaService = zadaService;
//# sourceMappingURL=zada.service.js.map