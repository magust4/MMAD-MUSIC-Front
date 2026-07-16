import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNoticeComponent } from './demo-notice.component';

describe('DemoNoticeComponent', () => {
  let component: DemoNoticeComponent;
  let fixture: ComponentFixture<DemoNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoNoticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
