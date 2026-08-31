import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureCropperDialogComponent } from './profile-picture-cropper-dialog.component';

describe('ProfilePictureCropperDialogComponent', () => {
  let component: ProfilePictureCropperDialogComponent;
  let fixture: ComponentFixture<ProfilePictureCropperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePictureCropperDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePictureCropperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
