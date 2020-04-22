import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  @Input() color: Array<string>;
  @Input() dataSource;
  @Output() newColors = new EventEmitter<Array<string>>();

  constructor() {}

  ngOnInit(): void {}

  colorChange(i: number, newColor: string) {
    this.color[i] = newColor;
    this.color = [...this.color];
    this.newColors.emit(this.color);
  }
}
