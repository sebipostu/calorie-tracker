import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { IonicModule } from '@ionic/angular';
import { WeatherComponent } from './components/weather/weather.component';
import { GoalsTrackerComponent } from './components/goals-tracker/goals-tracker.component';
import { LoggedFoodComponent } from './components/logged-food/logged-food.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { LogFoodModalComponent } from './components/log-food-modal/log-food-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardPageComponent,
    WeatherComponent,
    GoalsTrackerComponent,
    LoggedFoodComponent,
    ProfileDataComponent,
    LogFoodModalComponent,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class DashboardModule {}
