import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Add CommonModule to imports
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;
  isPasswordVisible: boolean = false;
  isLoggedIn: boolean = false; // Initialize the login status variable

  constructor(private router: Router,
              private http: HttpClient, 
              private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  goToRegister(): void {
    this.router.navigate(['/dangky']);
  }

  login() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post('https://localhost:7072/api/Customer/Login', loginData).subscribe({
        next: (response: any) => {
          if (response.success) {
            localStorage.setItem('customerId', response.data.customerId.toString());
            this.isLoggedIn = true; // Update the login status
            Swal.fire('Đăng nhập thành công', 'Bạn đã đăng nhập thành công!', 'success');
            this.router.navigate(['/home']);
          } else {
            Swal.fire('Đăng nhập thất bại', response.message, 'error');
          }
        },
        error: () => {
          Swal.fire('Đăng nhập thất bại', 'Có lỗi xảy ra khi đăng nhập.', 'error');
        }
      });
    } else {
      Swal.fire('Thông tin không đầy đủ', 'Vui lòng nhập email và mật khẩu.', 'warning');
    }
  }
}