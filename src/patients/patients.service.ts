import { Injectable } from '@nestjs/common';
import { Patient } from './patients.entity';
import { PatientStatus } from './patients.entity';
import { v4} from 'uuid';
@Injectable()
export class PatientsService {

    private patients: Patient[] = [
        {
            id: 1,
            name: 'John Doe',
            age: 25,
            status: PatientStatus.PENDING,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]

    getAllPatients() {
        return this.patients;
    }
    createPatient(id: number, name: string) {
        const patient: Patient = {
            id,
            name : v4(),
            age: 25,
            status: PatientStatus.PENDING,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        this.patients.push(patient);
        return patient;
    }
    updatePatient() {}
    deletePatient() {}
    
}


