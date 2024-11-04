import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];
  shippingInfo = { name: '', phone: '', address: '' };
  discountCode: string = '';
  discountAmount: number = 0; // Số tiền giảm giá
  discountApplied: boolean = false; // Kiểm tra xem mã giảm giá đã được áp dụng hay chưa
  discountMessage: string = ''; // Thông báo về mã giảm giá

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { cartItems: any[] };
    if (state?.cartItems) {
      this.cartItems = state.cartItems;
    } else {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    }

    this.shippingInfo.name = localStorage.getItem('fullname') || '';
    this.shippingInfo.phone = localStorage.getItem('phone') || '';
    this.shippingInfo.address = localStorage.getItem('address') || '';
  }

  get total() {
    const subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const finalTotal = subtotal - this.discountAmount;
    return finalTotal < 0 ? 0 : finalTotal; // Đảm bảo không có tổng âm
  }

  submitOrder() {
    console.log('Đơn hàng đã được xác nhận:', {
      items: this.cartItems,
      shippingInfo: this.shippingInfo
    });
    localStorage.removeItem('cartItems');
    this.router.navigate(['/success']);
  }

  applyDiscount() {
    // Kiểm tra mã giảm giá và áp dụng nếu hợp lệ
    if (this.discountCode === 'DISCOUNT10') {
      this.discountAmount = 10000; // Giả sử mã giảm giá là 10.000đ
      this.discountApplied = true;
      this.discountMessage = 'Mã giảm giá đã được áp dụng!';
    } else {
      this.discountApplied = false;
      this.discountMessage = 'Mã giảm giá không hợp lệ!';
      this.discountAmount = 0; // Đặt lại giảm giá nếu không hợp lệ
    }
  }
}
