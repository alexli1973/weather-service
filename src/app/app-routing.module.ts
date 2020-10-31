import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';
import {HistoryComponent} from './history/history.component';


const routes: Routes = [
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
  {path: 'weather', component: WeatherWidgetComponent},
  {path: 'history', component: HistoryComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
