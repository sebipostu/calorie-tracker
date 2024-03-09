import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ProfileDataComponent implements OnInit {
  public goals = this.dataService.goals;
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
