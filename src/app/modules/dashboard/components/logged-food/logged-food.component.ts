import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LogFoodModalComponent } from '../log-food-modal/log-food-modal.component';

@Component({
  selector: 'app-logged-food',
  templateUrl: './logged-food.component.html',
  styleUrls: ['./logged-food.component.scss'],
})
export class LoggedFoodComponent implements OnInit {
  public loggedFood = [
    {
      foodName: 'Chicken Burrito Bowl',
      imageSrc: 'image-outline',
      timeOfLogging: '12:47 PM',
      totalCalories: '591 Kcal',
    },
    {
      foodName: 'Beef and rice',
      imageSrc: 'image-outline',
      timeOfLogging: '5:00 PM',
      totalCalories: '443 Kcal',
    },
    {
      foodName: 'Protein Shake',
      imageSrc: 'image-outline',
      timeOfLogging: '9:25 AM',
      totalCalories: '212 Kcal',
    },
  ];
  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  public async logFood() {
    const modal = await this.modalController.create({
      component: LogFoodModalComponent,
      cssClass: 'log-food-modal',
    });
    await modal.present();

    modal.onDidDismiss().then(() => this.presentToast('bottom'));
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
