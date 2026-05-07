import { Component } from '@angular/core';
import { Contact } from "../contact/contact";
import { OurTestimonials } from '../our-testimonials/our-testimonials';
import { OurServices } from "../our-services/our-services";
import { ProfilePatient } from '../profile-patient/profile-patient';


@Component({
  selector: 'app-home',
  imports: [Contact, OurTestimonials, OurServices, ProfilePatient],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
