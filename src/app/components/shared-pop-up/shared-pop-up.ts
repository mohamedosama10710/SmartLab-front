import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PopupData } from '../../core/interfaces/popup';
@Component({
  selector: 'app-shared-pop-up',
  imports: [CommonModule, MatDialogModule, MatSnackBarModule],
  templateUrl: './shared-pop-up.html',
  styleUrl: './shared-pop-up.css',
})
export class SharedPopUp {
  constructor(
    public dialogRef: MatDialogRef<SharedPopUp>,
    @Inject(MAT_DIALOG_DATA) public data: PopupData,
    private snackBar: MatSnackBar,
  ) {}

  onAction(value: string) {
    this.dialogRef.close(value);
  }

  copyId() {
    if (this.data.patientId) {
      navigator.clipboard
        .writeText(this.data.patientId)
        .then(() => {
          this.snackBar.open('ID copied to clipboard!', 'Close', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['success-snackbar'], 
          });
        })
        .catch((err) => {
          console.error('Failed to copy ID: ', err);
        });
    }
  }
}
