import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HomepageComponent } from './restaurants/homepage/homepage.component';
import { AboutComponent } from './restaurants/about/about.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { ItemComponent } from './restaurants/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { RatingPriceComponent } from './restaurants/rating-price/rating-price.component';
import { RestaurantsModalComponent } from './restaurants/restaurants-modal/restaurants-modal.component';

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "about", component: AboutComponent},
  {path: "restaurants/:cuisine", component: RestaurantsListComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    AboutComponent,
    RestaurantsListComponent,
    ItemComponent,
    RatingPriceComponent,
    RestaurantsModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RestaurantsModalComponent]
})
export class AppModule { }
