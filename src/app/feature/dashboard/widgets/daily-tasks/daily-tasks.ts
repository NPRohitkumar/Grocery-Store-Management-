import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { Chart } from '../../../../shared/components/chart/chart';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartDataset } from 'chart.js';


type Filter = 'popular' | 'top rated' | 'low to high' | 'high to low';

interface TaskCategory {
  label: string;
  count: number;
  rating: number;
}

@Component({
  selector: 'app-daily-tasks',
  imports: [Chart, MatCardModule, MatTabsModule, MatMenuModule, MatCardModule, MatButtonModule , FontAwesomeModule],
  templateUrl: './daily-tasks.html',
  styleUrl: './daily-tasks.css',
})
export class DailyTasks {
  faArrowDown = faArrowDown;
  activeTab: 'online' | 'offline' = 'online';
  filter: Filter = 'popular';

  dataSource: Record<'online' | 'offline', TaskCategory[]> = {
    online: [
      { label: 'Completed', count: 43, rating: 4.5 },
      { label: 'Pending', count: 19, rating: 3.9 },
      { label: 'Failed', count: 10, rating: 2.8 }
    ],
    offline: [
      { label: 'Completed', count: 30, rating: 4.2 },
      { label: 'Pending', count: 22, rating: 3.4 },
      { label: 'Failed', count: 20, rating: 2.6 }
    ]
  };

  get filteredData(): TaskCategory[] {
    const data = [...this.dataSource[this.activeTab]];

    switch (this.filter) {
      case 'top rated':
        return data.sort((a, b) => b.rating - a.rating);
      case 'low to high':
        return data.sort((a, b) => a.count - b.count);
      case 'high to low':
        return data.sort((a, b) => b.count - a.count);
      default:
        return data;
    }
  }

  get labels(): string[] {
    return this.filteredData.map(d => d.label);
  }

  get values(): number[] {
    return this.filteredData.map(d => d.count);
  }

  get total(): number {
    return this.filteredData.reduce((sum, i) => sum + i.count, 0);
  }

  setTab(tab: 'online' | 'offline') {
    this.activeTab = tab;
  }

  setFilter(filter: Filter) {
    this.filter = filter;
  }

  get datasets(): ChartDataset<'doughnut', number[]>[] {
  return [
    {
      type: 'doughnut',
      data: this.values,
      backgroundColor: ['#5b8def', '#8faefc', '#c5d4ff'],
      borderWidth: 0
    }
  ];
}

}
