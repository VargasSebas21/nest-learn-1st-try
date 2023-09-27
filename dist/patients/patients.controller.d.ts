import { PatientsService } from './patients.service';
export declare class PatientsController {
    private PatientsService;
    constructor(PatientsService: PatientsService);
    getPatients(): import("./patients.entity").Patient[];
    createPatient(newPatient: any): string;
}
