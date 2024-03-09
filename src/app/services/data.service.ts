import { Injectable } from '@angular/core';
import Food from '../interfaces/food.interface';
import GoalTrackerData from '../interfaces/goal-tracker.interface';
import Goals from '../interfaces/goals.interface';
import LoggedFood from '../interfaces/logged-food.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public goalTrackerData: GoalTrackerData[] = [
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

  public loggedFood: LoggedFood[] = [
    {
      foodName: 'Chicken Burrito Bowl',
      imageSrc: 'image-outline',
      timeOfLogging: '12:47',
      totalCalories: '591',
    },
    {
      foodName: 'Beef and rice',
      imageSrc: 'image-outline',
      timeOfLogging: '5:00',
      totalCalories: '443',
    },
    {
      foodName: 'Protein Shake',
      imageSrc: 'image-outline',
      timeOfLogging: '9:25',
      totalCalories: '212',
    },
  ];

  public goals: Goals[] = [
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

  public addFood(food: Food): void {
    this.loggedFood.push({
      foodName: food.name,
      imageSrc: 'image-outline',
      timeOfLogging: '12:00',
      totalCalories: food.calories,
    });
  }
}
