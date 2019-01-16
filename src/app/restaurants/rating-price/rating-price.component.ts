import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dr-rating-price',
  templateUrl: './rating-price.component.html',
  styleUrls: ['./rating-price.component.css']
})
export class RatingPriceComponent implements OnInit {
  @Input() value:number;
  @Input() iconFull: string;
  @Input() iconEmpty: string;

  constructor() { }

  ngOnInit() {
  }

}
