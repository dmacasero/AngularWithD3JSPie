import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() dataSource;
  @Input() type: string;
  @Input() color: Array<string>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource.length > 1) {
      this.reDrawPie();
    }
  }

  ngOnInit(): void {}

  reDrawPie() {
    var svg = d3.select('#pie>svg').remove();
    this.drawPie();
  }

  drawPie() {
    var width = 700,
      height = 500;

    var colors = d3.scaleOrdinal(this.color);

    var svg = d3
      .select('#pie')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    var data = d3
      .pie()
      .sort(null)
      .value((d: any) => d.value)(this.dataSource);
    var segments = d3
      .arc()
      .innerRadius(this.changeChartType())
      .outerRadius(200)
      .padAngle(0.05)
      .padRadius(50);
    var sections = svg
      .append('g')
      .attr('transform', 'translate(250,250)')
      .selectAll('path')
      .data(data);
    sections
      .enter()
      .append('path')
      .attr('d', <any>segments)
      .attr('fill', (d: any) => {
        return colors(d.index);
      });

    var legends = svg
      .append('g')
      .attr('transform', 'translate(500,100)')
      .selectAll('.legends')
      .data(data);
    var legend = legends
      .enter()
      .append('g')
      .classed('legends', true)
      .attr('transform', (d, i) => {
        return 'translate(0,' + (i + 1) * 30 + ')';
      });
    legend
      .append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', (d: any) => {
        return colors(d.index);
      });
    legend
      .append('text')
      .classed('label', true)
      .text((d: any) => {
        return d.data.label;
      })
      .attr('fill', (d: any) => {
        return colors(d.index);
      })
      .attr('x', 30)
      .attr('y', 15);
    legend
      .append('text')
      .classed('label', true)
      .text((d: any) => {
        return '=' + d.data.value;
      })
      .attr('fill', (d: any) => {
        return colors(d.index);
      })
      .attr('x', 80)
      .attr('y', 15);
  }

  changeChartType() {
    switch (this.type) {
      case 'donut':
        return 30;
      case 'pie':
        return 0;
      default:
        return 0;
    }
  }
}
