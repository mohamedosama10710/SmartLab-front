import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Search {
  query = signal<string>('');

  updateQuery(val: string) {
    this.query.set(val);
  }

  clear() {
    this.query.set('');
  }
}
