import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter = 0;
  style = '';

  onSelect(value): void {
    this.counter = this.counter + value;
  }

  constructor() { }

  ngOnInit() {
  }

}
