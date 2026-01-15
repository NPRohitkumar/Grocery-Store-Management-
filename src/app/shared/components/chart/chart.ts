import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType, TooltipItem } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset } from 'chart.js';
import { Chart as ChartJS, Plugin } from 'chart.js';


@Component({
  standalone: true,
  selector: 'app-chart',
  imports: [BaseChartDirective],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class Chart {
  @Input() labels: string[] = [];
  @Input() datasets: ChartDataset[] = [];

  @Input() isDonut = false;
  @Input() showPercentage = false;
  @Input() centerText?: number;

  chartData!: ChartConfiguration['data'];
  chartOptions!: ChartConfiguration['options'];
  baseOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#eee' }
      },
      x: {
        grid: { display: false }
      }
    }
  };

ngOnChanges(): void {
  this.chartData = {
    labels: this.labels,
    datasets: this.datasets
  };

  // Always start from base options
  this.chartOptions = { ...this.baseOptions };

  // Apply donut-specific config safely
  if (this.isDonut) {
    this.chartOptions = {
      ...this.chartOptions,
      cutout: '70%', // allowed at runtime
      plugins: {
        ...this.chartOptions.plugins,
        tooltip: this.showPercentage
          ? {
              callbacks: {
                label: (context: TooltipItem<'doughnut'>) => {
                  const data = context.dataset.data as number[];
                  const total = data.reduce((a, b) => a + b, 0);
                  const value = context.raw as number;
                  const percent = ((value / total) * 100).toFixed(1);
                  return `${context.label}: ${value} (${percent}%)`;
                }
              }
            }
          : undefined
      }
    } as ChartConfiguration['options']; // 🔑 SAFE NARROWING
  }
}



}
