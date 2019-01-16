import { restaurantSearch } from './../model/restaurantSearchResults';
import {  MenuList } from './../model/menuSearchResult';
import { Menu } from './../model/menu.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurant } from '../model/restaurant.model';

const baseUrl: string = "http://localhost:3000/api/restaurants";

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(params?):Observable<restaurantSearch>{
    let queryParams = {};

    if(params){
      let filter = {}
      filter['priceFrom'] = params.filter && params.filter.priceFrom && params.filter.priceFrom.toString() || '1';
      filter['priceTo'] = params.filter && params.filter.priceTo && params.filter.priceTo.toString() || '5';
      filter['cuisine'] = params.filter && params.filter.cuisine && params.filter.cuisine.toString() || '';
      
      queryParams = {
        params: new HttpParams()
        .set('page', params.page || '1')
        .set('pageSize', params.pageSize || '12')
        .set('sort', params.sort || 'rating')
        .set('sortDirection', params.sortDirection || 'desc')
        .set('filter', JSON.stringify(params.filter))
      };
    }
    return this.http.get(baseUrl, queryParams).pipe(map(
      data => { return new restaurantSearch(data)}
    ))
  }

  getMenu(restaurantId: number): Observable<MenuList> {
    return this.http.get<restaurantSearch>("http://localhost:3000/api/restaurants/" + restaurantId + "/menus")
      .pipe(map(res => {
        return new MenuList(res);
      }));
    
  }
}
