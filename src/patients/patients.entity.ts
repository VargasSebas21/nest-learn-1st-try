export enum PatientStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DECEASED = 'DECEASED',
    PENDING = 'PENDING',
}

export class Patient {

    id: number;
    name: string;
    age: number;
    status: PatientStatus;
    createdAt: Date;
    updatedAt: Date;
}
