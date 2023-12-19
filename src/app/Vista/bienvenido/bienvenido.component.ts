import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {

  chart:any;
   xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
   yValues = [55, 49, 44, 24, 15];
   barColors = ["red", "green","blue","orange","brown"];

  ngOnInit(){
    this.chart =new Chart("myChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {
        labels: this.xValues,
        datasets: [{
          backgroundColor: this.barColors,
          data: this.yValues
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    })
   }
}
