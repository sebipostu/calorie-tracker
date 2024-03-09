import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { LoggedFoodComponent } from '../logged-food/logged-food.component';

@Component({
  selector: 'app-goals-tracker',
  templateUrl: './goals-tracker.component.html',
  styleUrls: ['./goals-tracker.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, LoggedFoodComponent],
})
export class GoalsTrackerComponent {
  public goalTrackerData = this.dataService.goalTrackerData;
  constructor(private dataService: DataService) {}
}
