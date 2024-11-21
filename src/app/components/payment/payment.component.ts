import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  orderId: string | null = null;
  totalAmount: number = 0;
  totalAmountInUSD: number = 0;
  paymentMethod: string = 'PayPal'; 
  conversionRate: number = 0.000042;   
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Lấy thông tin đơn hàng từ URL hoặc từ dịch vụ
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');
    this.totalAmount =
      Number(this.route.snapshot.queryParamMap.get('totalAmount')) || 0;
       // Convert VNĐ to USD
    this.totalAmountInUSD = this.totalAmount * this.conversionRate;
    this.totalAmountInUSD = Math.round(this.totalAmountInUSD * 100) / 100; 
  }
  confirmPaymentPaypal()
  {
    this.http
    .post('https://localhost:7072/api/PayPal/create-order', {
      amount: this.totalAmountInUSD, // Giá trị đơn hàng
      returnUrl: 'http://localhost:4300/payment-callback', // URL sau khi thanh toán thành công
      cancelUrl: 'http://localhost:4300/cancel', // URL nếu người dùng hủy thanh toán
      orderId: this.orderId
    })
    .subscribe((response: any) => {
      const approvalUrl = response.approvalUrl;  // Lấy approvalUrl từ phản hồi
      // Chuyển hướng người dùng đến PayPal
      window.location.href = approvalUrl;  // Chuyển hướng tới trang thanh toán PayPal
    });
  }
  confirmPayment() {
    // Xử lý logic thanh toán
    alert('Thanh toán thành công!');
    // Điều hướng về trang chính sau thanh toán
    this.router.navigate(['/']);
  }
}
