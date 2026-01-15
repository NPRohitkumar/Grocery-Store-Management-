import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Order {
  private data = {
    weekly: { active: 120, inactive: 30 },
    monthly: { active: 520, inactive: 140 },
    yearly: { active: 6200, inactive: 900 }
  }

  getAnalysis(period: 'weekly' | 'monthly' | 'yearly') {
    if (period === 'weekly') {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Active Orders',
            type: 'bar',
            data: [50, 85, 45, 80, 95, 88],
            backgroundColor: '#3f51b5',
            order:1
          },
          {
            label: 'Inactive Orders',
            type: 'line',
            data: [45, 78, 48, 75, 82, 63],
            borderColor: '#9fa8da',
            tension: 0.4,
            fill: false,
            order:2
          }
        ]
      };
    }

    if (period === 'monthly') {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Active Orders',
            type: 'bar',
            data: [420, 380, 460, 520, 610, 580],
            backgroundColor: '#3f51b5',
            order:1
          },
          {
            label: 'Inactive Orders',
            type: 'line',
            data: [300, 340, 320, 390, 410, 360],
            borderColor: '#9fa8da',
            tension: 0.4,
            order:2
          }
        ]
      };
    }

    // yearly
    return {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Active Orders',
          type: 'bar',
          data: [1200, 1800, 2400, 3100, 4200],
          backgroundColor: '#3f51b5',
          order:1
        },
        {
          label: 'Inactive Orders',
          type: 'line',
          data: [800, 900, 1100, 1400, 1700],
          borderColor: '#9fa8da',
          tension: 0.4,
          order:2
        }
      ]
    };
  }

}
