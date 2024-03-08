import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-tracker',
  templateUrl: './goals-tracker.component.html',
  styleUrls: ['./goals-tracker.component.scss'],
})
export class GoalsTrackerComponent implements OnInit {
  public goalTrackerData = [
    {
      icon: 'footsteps',
      title: 'Total Steps',
      value: '4961',
    },
    {
      icon: 'flame',
      title: 'Total Calories Burned',
      value: '160 kcal',
    },
    {
      icon: 'pin',
      title: 'Total Distance',
      value: '3.4km',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
