import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Auth } from '../auth-service/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.html',
  styleUrls: ['./authentication.css']
})
export class Authentication {
  readonly #authService = inject(Auth);
  readonly router = inject(Router);
  readonly fb = inject(FormBuilder);


  loading = signal(false);
  errorMessage = signal('');

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  login() {
    if (this.loginForm.invalid) return;

    this.loading.set(true);
    this.errorMessage.set('');

    const { username, password } = this.loginForm.value;

    this.#authService.login(username!, password!).subscribe({
      next: (res) => {
        console.log('✅ Login correcto:', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.usuario));
        this.router.navigate(['/sportPerformance']);
      },
      error: (err) => {
        console.error('❌ Error en login:', err);
        //this.errorMessage.set(err.error?.error || 'Error al iniciar sesión');
        this.mostrarErrorTemporal(err.error?.error || 'Error al iniciar sesión');
        this.loading.set(false);
      },
      complete: () => this.loading.set(false)
    });
  }


  private mostrarErrorTemporal(msg: string) {
    this.errorMessage.set(msg);
    setTimeout(() => this.errorMessage.set(''), 4000);
  }
}
