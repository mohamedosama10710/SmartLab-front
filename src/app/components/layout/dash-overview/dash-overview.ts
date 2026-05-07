import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dash-overview',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './dash-overview.html',
  styleUrl: './dash-overview.css',
})
export class DashOverview {
  chartOptions: any = {
    series: [60, 20, 20], 
    labels: ['sent to patient(compeleted)', 'ready to send', 'In-Progress'],
    colors: ['#22c55e', '#1e293b', '#eab308'], 
    chart: {
      type: 'donut',
      height: 250,
      fontFamily: 'Inter, sans-serif',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '12px',
              color: '#64748b',
              offsetY: -5,
            },
            value: {
              show: true,
              fontSize: '22px',
              fontWeight: 600,
              color: '#1e293b',
              offsetY: 5,
            },
            total: {
              show: true,
              showAlways: true,
              label: 'overal',
              formatter: function (w: any) {
                return '24';
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      colors: ['#fff'],
      width: 4, 
    },
    legend: {
      show: false, 
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val: number) {
          return val + '%';
        },
      },
    },
  };


  statsCards = [
    {
      title: 'Today Tests',
      value: 24,
      icon: 'fa-solid fa-microscope',
      bg: '#eff6ff',
      color: '#3b82f6',
    },
    {
      title: 'Pending Tests',
      value: 24,
      icon: 'fa-regular fa-clock',
      bg: '#fef9c3',
      color: '#eab308',
    },
    {
      title: 'Abnormal Tests',
      value: 24,
      icon: 'fa-solid fa-triangle-exclamation',
      bg: '#fee2e2',
      color: '#ef4444',
    },
    {
      title: 'Completed Tests',
      value: 24,
      icon: 'fa-solid fa-circle-check',
      bg: '#dcfce7',
      color: '#22c55e',
    },
  ];
}
