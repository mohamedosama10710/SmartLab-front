import {Component,OnInit,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: 'male' | 'female';
  photoUrl?: string;
  location?: string;
}

@Component({
  selector: 'app-profile-patient',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './profile-patient.html',
  styleUrls: ['./profile-patient.css'],
})
export class ProfilePatient implements OnInit {

  patientPhotoUrl: string = '';
  patient: Patient | null = null;
  locationValue: string = '';
  isEditing: boolean = false;

  editForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadPatient();
  }

  loadPatient(): void {

    this.patient = {
    id: 'A-12230-A',
    firstName: 'Mohamed',
    lastName: 'Ali Mettwally',
    email: 'alimetwally@gmail.com',
    phone: '01081111111',
    gender: 'male',
    location: 'Sindbees',
  };

    if (this.patient.gender === 'male') {
        this.patientPhotoUrl =
        'images/male-avatar.png';
      } else {

        this.patientPhotoUrl =
        'images/female-avatar.png';
      }

    this.locationValue =
      this.patient.location ?? '';
  }

  toggleEdit(): void {

    if (!this.patient) return;

    if (this.isEditing) {
      this.isEditing = false;
      return;
    }

    this.isEditing = true;

    this.editForm = {
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      email: this.patient.email,
      phone: this.patient.phone,
    };

    this.locationValue =
      this.patient.location ?? '';

  }

  saveEdit(): void {

    if (!this.patient) return;
    
    this.patient = {
      ...this.patient,
      ...this.editForm,
      location: this.locationValue,
    };

    this.isEditing = false;
  }

}
