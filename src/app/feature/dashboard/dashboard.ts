import { Component } from '@angular/core';
import { Analysis } from './widgets/analysis/analysis';
import { DailyTasks } from './widgets/daily-tasks/daily-tasks';
import { FoodBlogs } from './widgets/food-blogs/food-blogs';
import { ShipmentTasks } from './widgets/shipment-tasks/shipment-tasks';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-dashboard',
  imports: [Analysis , DailyTasks , FoodBlogs , ShipmentTasks , MatGridListModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
