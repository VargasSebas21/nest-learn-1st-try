"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const patients_entity_1 = require("./patients.entity");
const uuid_1 = require("uuid");
let PatientsService = exports.PatientsService = class PatientsService {
    constructor() {
        this.patients = [
            {
                id: 1,
                name: 'John Doe',
                age: 25,
                status: patients_entity_1.PatientStatus.PENDING,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
    }
    getAllPatients() {
        return this.patients;
    }
    createPatient(id, name) {
        const patient = {
            id,
            name: (0, uuid_1.v4)(),
            age: 25,
            status: patients_entity_1.PatientStatus.PENDING,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.patients.push(patient);
        return patient;
    }
    updatePatient() { }
    deletePatient() { }
};
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)()
], PatientsService);
//# sourceMappingURL=patients.service.js.map