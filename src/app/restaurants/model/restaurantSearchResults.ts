import { Restaurant } from "./restaurant.model";

 export class restaurantSearch {
     count: number;
     results: Restaurant[];

     constructor(obj?:any){
         this.count = obj && obj.count || null;
         this.results= obj && obj.results.map(elem => {
             return new Restaurant(elem)
         }) || null;
     }

     
 }