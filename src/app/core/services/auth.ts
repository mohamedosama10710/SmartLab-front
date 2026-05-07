import { Injectable , signal } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'admin' | 'staff' | 'patient';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
@Injectable({
  providedIn: 'root',
})
export class Auth {
    private _user = signal<AuthUser | null>({
    id: '1',
    name: 'Dr. Sarah Ahmed',
    email: 'sarah@elnourlab.com',
    role: 'patient',
    avatar: '',
  });
 
  readonly user = this._user.asReadonly();
 
  constructor(private router: Router) {}
 
  get isLoggedIn(): boolean {
    return this._user() !== null;
  }
 
  get currentRole(): UserRole | null {
    return this._user()?.role ?? null;
  }
 
  /**
   * Call your backend login API here.
   * Store the JWT token in HttpOnly cookie or memory.
   */
  login(email: string, password: string): void {
    // TODO: replace with real API call
    console.log('login()', email, password);
  }
 
  logout(): void {
    this._user.set(null);
    this.router.navigate(['/login']);
  }
}
