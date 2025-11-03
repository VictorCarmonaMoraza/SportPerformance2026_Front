import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthInterface } from '../core/interfaces/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'http://localhost:5000/api/auth';
  readonly #http = inject(HttpClient)

  login(nameuser: string, password: string): Observable<AuthInterface.InfoUser> {
    return this.#http.post<AuthInterface.InfoUser>(`${this.apiUrl}/login`, { nameuser, password });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
