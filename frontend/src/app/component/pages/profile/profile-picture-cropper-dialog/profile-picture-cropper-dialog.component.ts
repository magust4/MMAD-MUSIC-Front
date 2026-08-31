import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  ImageCropperComponent,
  ImageCroppedEvent
} from 'ngx-image-cropper';

@Component({
  selector: 'app-profile-picture-cropper-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ImageCropperComponent
  ],
  templateUrl: './profile-picture-cropper-dialog.component.html',
  styleUrls: ['./profile-picture-cropper-dialog.component.css']
})
export class ProfilePictureCropperDialogComponent {

  croppedBlob: Blob | null = null;

  constructor(
    private dialogRef: MatDialogRef<ProfilePictureCropperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { file: File }
  ) {}

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedBlob = event.blob ?? null;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (!this.croppedBlob) {
      return;
    }

    this.dialogRef.close(this.croppedBlob);
  }
}