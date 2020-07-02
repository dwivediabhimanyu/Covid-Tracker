import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MapViewComponent } from '../map-view/map-view.component'

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'aboutus',  component: AboutComponent },
  { path: 'tracking',     component: MenuComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'tracking/:id',     component: DishdetailComponent },
  { path: 'live', component: MapViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];