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
exports.Fitness = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Fitness = class Fitness {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Fitness.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", String)
], Fitness.prototype, "dia", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Fitness.prototype, "comentarios", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Fitness.prototype, "braco", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Fitness.prototype, "antebraco", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Fitness.prototype, "bracoDescancando", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Fitness.prototype, "medidaUmbigo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Fitness.prototype, "medidaMaior", void 0);
Fitness = __decorate([
    typeorm_1.Entity("fitness"),
    __metadata("design:paramtypes", [])
], Fitness);
exports.Fitness = Fitness;
