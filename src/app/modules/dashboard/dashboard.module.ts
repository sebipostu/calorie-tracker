import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class DashboardModule {}
