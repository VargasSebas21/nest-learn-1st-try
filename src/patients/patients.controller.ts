import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  

    constructor(private PatientsService: PatientsService) {}

    @Get()
    getPatients() {
        return this.PatientsService.getAllPatients()
    }
    @Post()
    createPatient(@Body() newPatient: any) {
        console.log(newPatient);
        return 'Patient created';
        //this.PatientsService.createPatient(1, 'John Doe');
    }
}
//historiales médicos y diagnósticos médicos