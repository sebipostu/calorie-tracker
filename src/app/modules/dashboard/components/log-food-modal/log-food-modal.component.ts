import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-log-food-modal',
  templateUrl: './log-food-modal.component.html',
  styleUrls: ['./log-food-modal.component.scss'],
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
    this.modalController.dismiss();
  }
}
