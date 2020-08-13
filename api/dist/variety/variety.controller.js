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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarietyController = void 0;
const common_1 = require("@nestjs/common");
const variety_service_1 = require("./variety.service");
const variety_dto_1 = require("./variety.dto");
let VarietyController = class VarietyController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    getTree(query) {
        let root = query.root ? query.root : 1;
        console.log(root);
        return this.service.getTree(root);
    }
    getLeaves() {
        return this.service.getLeaves();
    }
    getPath(id) {
        return this.service.getPath(id);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(id, data) {
        return this.service.update(id, data);
    }
    remove(id) {
        this.service.remove(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "findAll", null);
__decorate([
    common_1.Get('/tree'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "getTree", null);
__decorate([
    common_1.Get('leaves'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "getLeaves", null);
__decorate([
    common_1.Get('path/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "getPath", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [variety_dto_1.VarietyDTO]),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, variety_dto_1.VarietyDTO]),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VarietyController.prototype, "remove", null);
VarietyController = __decorate([
    common_1.Controller('variety'),
    __metadata("design:paramtypes", [variety_service_1.VarietyService])
], VarietyController);
exports.VarietyController = VarietyController;
//# sourceMappingURL=variety.controller.js.map