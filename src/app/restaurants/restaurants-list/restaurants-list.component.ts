import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dr-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  restaurants: Restaurant[];
  count: number;
  params = {
    page: 1,
    pageSize: 12,
    filter: {
    'priceFrom': 1,
    'priceTo': 5,
    'cuisine': ''
  }
}

  constructor(private restaurantService: RestaurantService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let cuis = params['cuisine'];
      if(cuis == 'all'){
        cuis = '';
      }
      this.params.filter.cuisine = cuis;
      this.refreshRestaurants(null);
    })
  }

 

  refreshRestaurants(newPage:number){
    if(newPage){
      this.params.page = newPage;
    } else {
      this.params.page = 1;
    }
    this.restaurantService.getRestaurants(this.params).subscribe(
      data => {
        this.restaurants = data.results;
        this.count = data.count;
      }
    );
  }
  

}
