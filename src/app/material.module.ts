import { NgModule, LOCALE_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule, 
    MatFormFieldModule, 
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule, 
    MatFormFieldModule, 
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class MaterialModule {}