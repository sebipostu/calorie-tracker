import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  public menuItems = [
    {
      title: 'Profile',
      icon: 'person',
    },
    {
      title: 'Track',
      icon: 'pizza',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
