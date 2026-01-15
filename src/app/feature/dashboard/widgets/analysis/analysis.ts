import { Component } from '@angular/core';
import { Order } from '../../../../core/services/order';
import { Chart } from '../../../../shared/components/chart/chart';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-analysis',
  imports: [ CommonModule,Chart,MatMenuModule,MatButtonModule,MatCardModule , FontAwesomeModule],
  templateUrl: './analysis.html',
  styleUrl: './analysis.css',
})
export class Analysis {
  faArrowDown = faArrowDown;
  period: 'weekly' | 'monthly' | 'yearly' = 'weekly';

  labels: string[] = [];
  datasets: any[] = [];

  constructor(private orderService: Order) {
    this.loadData();
  }

  loadData() {
    const result = this.orderService.getAnalysis(this.period);
    this.labels = result.labels;
    this.datasets = result.datasets;
  }

  changePeriod(period: 'weekly' | 'monthly' | 'yearly') {
    this.period = period;
    this.loadData();
  }
}