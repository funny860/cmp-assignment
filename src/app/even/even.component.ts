import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  @Input() num: number;
  constructor() {
    this.num = 0;
  }

  ngOnInit(): void {}
}
