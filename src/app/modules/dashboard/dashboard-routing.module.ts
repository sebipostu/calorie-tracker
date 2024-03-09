import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: 'weather',
        loadComponent: () =>
          import('./components/weather/weather.component').then(
            (m) => m.WeatherComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/profile-data/profile-data.component').then(
            (m) => m.ProfileDataComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/goals-tracker/goals-tracker.component').then(
            (m) => m.GoalsTrackerComponent
          ),
      },
    ],
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
