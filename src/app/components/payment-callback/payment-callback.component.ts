import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-callback',
  templateUrl: './payment-callback.component.html',
  styleUrls: ['./payment-callback.component.css']
})
export class PaymentCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, // Inject ActivatedRoute vào constructor
    private http: HttpClient       // Inject HttpClient để gọi API
  ) { }

  ngOnInit(): void {
    // Lấy token và PayerID từ URL
    const token = this.route.snapshot.queryParamMap.get('token');
    const payerId = this.route.snapshot.queryParamMap.get('PayerID'); 
    if (token && payerId) {
      // Gửi thông tin đến backend để xác nhận thanh toán
      this.http
        // .get(`https://localhost:7072/api/PayPal/capture-order?token=${token}&PayerID=${payerId}`)
        .post(`https://localhost:7072/api/PayPal/capture-order/${token}`, {})
        .subscribe(response => {
          console.log('Thanh toán thành công', response);
          window.location.href = 'http://localhost:4300/payment-success';
        }, error => {
          console.log('Thanh toán thất bại', error);
          window.location.href = 'http://localhost:4300/payment-failed';
        });
    } else {
      console.log('Thiếu thông tin thanh toán');
      window.location.href = 'http://localhost:4300/payment-failed';
    }
  }
}
