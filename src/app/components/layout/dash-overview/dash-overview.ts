import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SharedPopUp } from '../../shared-pop-up/shared-pop-up';
import { PopupData } from '../../../core/interfaces/popup';
@Component({
  selector: 'app-dash-overview',
  imports: [CommonModule, NgApexchartsModule, MatDialogModule],
  templateUrl: './dash-overview.html',
  styleUrl: './dash-overview.css',
})
export class DashOverview {
  // constructor(private dialog: MatDialog) {}// for test the pop up

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

  addPatient() {
    // const dialogData: PopupData = {
    //   type: 'success',
    //   title: 'Patient Records Added Successfully!',
    //   description:
    //     'The record for **Mohamed Ali** has been created and the Access ID has been generated.',
    //   patientId: '#AD-45532',
    //   showClose: true,
    //   actions: [
    //     { label: 'View Patient', type: 'outline', value: 'view' },
    //     { label: 'Go Dashboard', type: 'primary', value: 'home' },
    //   ],
    // };

    // const dialogRef = this.dialog.open(SharedPopUp, {
    //   width: '420px',
    //   data: dialogData,
    //   panelClass: 'custom-popup-panel', 
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed. Action:', result);
    //   if (result === 'view') {
    //   }
    // });
  }

  addTest() {
    // this.dialog.open(SharedPopUp, {
    //   width: '400px',
    //   data: {
    //     type: 'danger',
    //     title: 'Are You Sure You Want Cancel Test Results?',
    //     description: 'by pressing cancel you will lose the test results',
    //     showClose: true,
    //     actions: [
    //       { label: 'Cancel Results', type: 'danger', value: 'cancel' },
    //       { label: 'Keep Results', type: 'primary', value: 'keep' },
    //     ],
    //   },
    // });
  }
}

