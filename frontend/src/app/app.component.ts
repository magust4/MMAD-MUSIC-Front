import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoNoticeComponent } from './component/demo-notice/demo-notice.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DemoNoticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'frontend';

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const root = document.querySelector('app-root');

    if (root) {
      this.renderer.addClass(root, 'app-ready');
    }
  }
}