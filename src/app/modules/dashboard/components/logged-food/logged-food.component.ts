import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { LogFoodModalComponent } from '../log-food-modal/log-food-modal.component';

@Component({
  selector: 'app-logged-food',
  templateUrl: './logged-food.component.html',
  styleUrls: ['./logged-food.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, LogFoodModalComponent],
})
export class LoggedFoodComponent implements OnInit {
  public loggedFood = this.dataService.loggedFood;
  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  public async logFood() {
    const modal = await this.modalController.create({
      component: LogFoodModalComponent,
      cssClass: 'log-food-modal',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.dataService.addFood(data.data);
        this.presentToast('bottom');
      }
    });
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Your food has been logged into the calorie tracker.',
      duration: 5000,
      position: position,
      cssClass: 'toast',
    });

    await toast.present();
  }
}
