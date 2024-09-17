import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.createPieChart();
  }

  createPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Vermelho', 'Azul', 'Amarelo'],
        datasets: [
          {
            label: 'Cores Favoritas',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}
