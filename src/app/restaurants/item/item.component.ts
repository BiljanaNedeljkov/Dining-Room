import { Restaurant } from './../model/restaurant.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantsModalComponent } from '../restaurants-modal/restaurants-modal.component';

@Component({
  selector: 'dr-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() restaurant:Restaurant;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  openModal(restaurant){
    const modalRef = this.modal.open(RestaurantsModalComponent);
    modalRef.componentInstance.restaurant = restaurant;
  }

}
