import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Chart } from '../../../../shared/components/chart/chart';
import { ChartDataset } from 'chart.js';
import { Shipment } from '../../../../core/services/shipment';

@Component({
  selector: 'app-shipment-tasks',
  standalone: true,
  imports: [Chart, MatCardModule],
  templateUrl: './shipment-tasks.html',
  styleUrl: './shipment-tasks.css',
})
export class ShipmentTasks {

  labels: string[] = [];
  values: number[] = [];

  constructor(private shipmentService: Shipment) {
    const stats = this.shipmentService.getShipmentStats();
    this.labels = stats.labels;
    this.values = stats.values;
  }

  get total(): number {
    return this.shipmentService.getTotalShipments();
  }

  get datasets(): ChartDataset<'doughnut', number[]>[] {
    return [
      {
        type: 'doughnut',
        data: this.values,
        backgroundColor: [
          '#8dcfa0',
          '#ecd48a',
          '#e5a4a4',
          '#9ccfd8'
        ],
        borderWidth: 0
      }
    ];
  }
}

