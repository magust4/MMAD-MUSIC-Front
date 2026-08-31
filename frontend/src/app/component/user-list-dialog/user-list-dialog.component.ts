import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../service/user/auth/auth.service';

@Component({
  selector: 'app-user-list-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './user-list-dialog.component.html',
  styleUrls: ['./user-list-dialog.component.css']
})
export class UserListDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; users: string[] },

    private dialogRef: MatDialogRef<UserListDialogComponent>,

    private router: Router,

    private authService: AuthService
  ) {}

  goToProfile(username: string) {
    this.dialogRef.close();

    this.router.navigate(
      this.authService.getProfileRoute(username)
    );
  }
}