import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  public goals = [
    {
      name: 'Weight lifting',
      goalStatus: 'Workout done',
      iconSrc: 'barbell',
    },
    {
      name: 'Running',
      goalStatus: '2/6 km',
      iconSrc: 'footsteps',
    },
    {
      name: 'Sleeping',
      goalStatus: '0/8 hrs',
      iconSrc: 'bed',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
