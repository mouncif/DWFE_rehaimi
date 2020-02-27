import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import {
  MatButtonModule, MatCardModule, MatInputModule,
  MatTableModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule,
  MatGridListModule, MatDatepickerModule, MatNativeDateModule,
} from '@angular/material';
import { MatDialogModule, MatRadioModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class MaterialModule { }
