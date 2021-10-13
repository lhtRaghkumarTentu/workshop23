import { Component, OnInit } from '@angular/core';
import {patientList} from '../../PatientList'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  Patients = patientList
  
  individual: any = {
    id: 1,
    patientName:'Sara Smith', 
    admissionDate:'15-Aug-2021', 
    status: true, 
    image:'assets/media/user1.png',
    phone: '304-323-23s4',
    email: 'sara@email.com',
    gender: 'female',
    age: 45,
    surgeryType: 'Roaster Cuff Repair',
    surgeryDate: '15 Aug 2021',
    lastUpdated: '15 aug 2021',
    height: 163,
    weight: 110,
    BMI: 19,
    anesthesiologist: 'Dr.Christina Hardway',
    anesthesiologistPhone: '238-342-1234',
    anesthesiologistEmail: 'christina@email.com',
    sugeryClearance: true
} 
  constructor() { }

  ngOnInit(): void {
  }
  showInformation(patient: object){
    this.individual = patient
  }

}
