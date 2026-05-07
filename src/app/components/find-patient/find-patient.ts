import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Patient {
  id: string;
  name: string;
}
@Component({
  selector: 'app-find-patient',
  imports: [FormsModule,CommonModule],
  templateUrl: './find-patient.html',
  styleUrl: './find-patient.css',
})
export class FindPatient {
  searchQuery: string = '';
  foundPatient: Patient[] | null = null;
  notFound: boolean = false;
  lastQuery: string = '';

  private mockPatients: Patient[] = [
    { id: 'A-12230-A', name: 'Mohamed Ali' },
    { id: 'B-55321-C', name: 'Sara Ahmed' },
    { id: 'C-99812-D', name: 'Omar Hassan' },
  ];

  onSearch(): void {
    const query = this.searchQuery.trim();
    if (!query) return;

    this.lastQuery = query;
    this.foundPatient = null;
    this.notFound = false;

    const result = this.mockPatients.filter(
      (p) =>
        p.id.toLowerCase() === query.toLowerCase() ||
        p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (result.length > 0) {
      this.foundPatient = result;
    } else {
      this.notFound = true;
    }

  }

}

