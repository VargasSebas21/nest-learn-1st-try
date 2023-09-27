export declare enum PatientStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DECEASED = "DECEASED",
    PENDING = "PENDING"
}
export declare class Patient {
    id: number;
    name: string;
    age: number;
    status: PatientStatus;
    createdAt: Date;
    updatedAt: Date;
}
