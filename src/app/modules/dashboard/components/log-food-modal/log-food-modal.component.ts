import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import Food from 'src/app/interfaces/food.interface';

@Component({
  selector: 'app-log-food-modal',
  templateUrl: './log-food-modal.component.html',
  styleUrls: ['./log-food-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class LogFoodModalComponent implements OnInit {
  public foodForm!: FormGroup;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      calories: ['', Validators.required],
      protein: ['', Validators.required],
      fats: ['', Validators.required],
      carbs: ['', Validators.required],
    });
  }
  public cancel(): void {
    this.modalController.dismiss();
  }
  public save(): void {
    const loggedFood: Food = {
      name: this.foodForm.value.name,
      calories: this.foodForm.value.calories,
      carbs: this.foodForm.value.carbs,
      fats: this.foodForm.value.fats,
      protein: this.foodForm.value.protein,
    };
    console.log(loggedFood);
    this.modalController.dismiss(loggedFood);
  }
}
