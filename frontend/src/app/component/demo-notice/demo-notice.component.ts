import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-notice.component.html',
  styleUrls: ['./demo-notice.component.css']
})
export class DemoNoticeComponent {

  visible = true;

  constructor() {
    const seen = sessionStorage.getItem('demoNoticeSeen');

    if (seen) {
      this.visible = false;
    }
  }

  close(): void {
    this.visible = false;
    sessionStorage.setItem('demoNoticeSeen', 'true');
  }
}