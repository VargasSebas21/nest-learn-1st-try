import { Patient } from './patients.entity';
export declare class PatientsService {
    private patients;
    getAllPatients(): Patient[];
    createPatient(id: number, name: string): Patient;
    updatePatient(): void;
    deletePatient(): void;
}
