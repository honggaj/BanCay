// src/app/components/banner-slider/banner-slider.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
})
export class BannerSliderComponent implements OnInit, OnDestroy {
  images: string[] = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg'
  ];
  
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide(); // Bắt đầu tự động chuyển slide khi component được khởi tạo
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Dọn dẹp interval khi component bị hủy
  }

  plusSlides(n: number): void {
    this.currentIndex += n;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1; // Quay về slide cuối
    } else if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0; // Quay về slide đầu
    }
  }

  getCurrentImage(): string {
    return this.images[this.currentIndex];
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.plusSlides(1); // Tự động chuyển slide mỗi 3 giây
    }, 3000); // Thay đổi mỗi 3000ms = 3 giây
  }
}
