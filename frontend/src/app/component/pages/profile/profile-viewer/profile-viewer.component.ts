import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePictureCropperDialogComponent } from '../profile-picture-cropper-dialog/profile-picture-cropper-dialog.component';

import { ReviewViewerComponent } from '../../../review/review-viewer/review-viewer.component';
import { ProfileHeaderSkeletonComponent } from '../my-profile-page/profile-header-skeleton/profile-header-skeleton.component';

import { UserDTO } from '../../../../service/user/user.service';
import { Review } from '../../../../core/model/review/review.type';

@Component({
  selector: 'app-profile-viewer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ReviewViewerComponent,
    ProfileHeaderSkeletonComponent
  ],
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.css']
})
export class ProfileViewerComponent {

  @Input() user: UserDTO | null = null;

  @Input() reviews: Review[] = [];

  @Input() isLoading = false;

  @Input() isReviewsLoading = false;

  @Input() errorMessage = '';

  @Input() showLogout = false;

  @Input() showFollow = false;

  @Input() isFollowing = false;

  @Input() cardComponent = 'ReviewCardComponent';

  @Input() showChangeProfilePicture = false;


  // -----------------------------
  // Events back to parent
  // -----------------------------

  followClick() {
    this.follow.emit();
  }

  unfollowClick() {
    this.unfollow.emit();
  }

  logoutClick() {
    this.logout.emit();
  }

  openUserList(title: string, users: string[]) {
    this.userList.emit({
      title,
      users
    });
  }


  // -----------------------------
  // Profile Picture
  // -----------------------------

  profilePictureSelected(event: Event) {
    this.profilePictureChange.emit(event);
  }


  // -----------------------------
  // Outputs
  // -----------------------------

  @Output() follow = new EventEmitter<void>();

  @Output() unfollow = new EventEmitter<void>();

  @Output() logout = new EventEmitter<void>();

  @Output() userList = new EventEmitter<{
    title: string,
    users: string[]
  }>();

  @Output() profilePictureChange =
    new EventEmitter<Event>();

}

