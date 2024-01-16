import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TerminalService } from 'src/app/services/terminal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScaleLinear, ScaleBand, ScalePoint, ScaleTime  } from 'd3-scale'
import { DefaultArcObject, CurveFactory } from 'd3-shape';
import { BaseType } from 'd3-selection';

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.scss']
})
export class AnalyticComponent {

  constructor(private terminalService: TerminalService) {}

  ngOnInit(): void {
    // this.getTerminals();
    this.getAnalyticsOverview();
  }

  analyticsOverview: any;

  getAnalyticsOverview(): void{
    this.terminalService.getAnalyticsOverview().subscribe({
      next:(response: any)=>{
          this.analyticsOverview = response;
          console.log(this.analyticsOverview);
      },
      error:(error:any)=>{
        console.log(error);
      }
    })
  }

  deposits:any = [
    {
      location:"Unilag Terminal 1",
      operatorName:"Operator Makinde Alfa",
      amount:50000
    },
    {
      location:"Unilag Terminal 1",
      operatorName:"Mary Smith",
      amount:20000
    },
    {
      location:"Unilag Terminal 1",
      operatorName:"Operator Makinde Alfa",
      amount:50000
    },
    {
      location:"Unilag Terminal 1",
      operatorName:"Mary Smith",
      amount:20000
    },
    // {
    //   location:"Unilag Terminal 1",
    //   operatorName:"Operator Makinde Alfa",
    //   amount:50000
    // },
    // {
    //   location:"Unilag Terminal 1",
    //   operatorName:"Mary Smith",
    //   amount:20000
    // },

  ];

  name = 'Angular';
  // view: any[];
  width: number = 800;
  height: number = 400;
  fitContainer: boolean = false;

    view: number[] = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  doughnut = true;
  // colorScheme = {
  //   domain: ['green', 'blue', 'red', 'red', 'green', 'blue']
  // };
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA',  '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  customColors = (value: any) => {
    console.log(value);
    return "#299D91";
  }
  
  showLabels = true;

public multi = [
  {
    "name": "Sunday",
    "series": [
      {
        "name": "2018",
        "value": 2243772
      },
      {
        "name": "2017",
        "value": 1227770
      }
    ]
  },
  {
    "name": "Monday",
    "series": [
      {
        "name": "2018",
        "value": 1126000
      },
      {
        "name": "2017",
        "value": 764666
      }
    ]
  },
  {
    "name": "Teusday",
    "series": [
      {
        "name": "2018",
        "value": 296215
      },
      {
        "name": "2017",
        "value": 209122
      }
    ]
  },
  {
    "name": "Wednesday",
    "series": [
      {
        "name": "2018",
        "value": 257363
      },
      {
        "name": "2017",
        "value": 205350
      }
    ]
  },
  {
    "name": "Thursday",
    "series": [
      {
        "name": "2018",
        "value": 196750
      },
      {
        "name": "2017",
        "value": 129246
      }
    ]
  },
  {
    "name": "Friday",
    "series": [
      {
        "name": "2018",
        "value": 204617
      },
      {
        "name": "2017",
        "value": 149797
      }
    ]
  },
  {
    "name": "Saturday",
    "series": [
      {
        "name": "2018",
        "value": 204617
      },
      {
        "name": "2017",
        "value": 149797
      }
    ]
  }
];


}
