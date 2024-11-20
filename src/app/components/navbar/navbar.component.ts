import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  cartCount: number = 0;
  isDarkMode = false;

  constructor(private router: Router) {
    this.checkLoginStatus();
  }

  ngOnInit(): void {
    this.updateCartCount();
  }

  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (event.key === 'cartItems') {
      this.updateCartCount(); // Cập nhật lại khi `cartItems` thay đổi
    }
  }

  checkLoginStatus(): void {
    const customerId = localStorage.getItem('customerId');
    this.isLoggedIn = customerId !== null;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  navigateToAccount(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/taikhoan']);
    } else {
      this.router.navigate(['/dangnhap']);
    }
  }

  updateCartCount(): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartCount = cartItems.reduce((acc: number, item: any) => acc + item.quantity, 0);
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
 
}
