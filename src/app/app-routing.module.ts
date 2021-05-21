import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicInfoComponent} from "./basic-info/basic-info.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {ProsAndConsComponent} from "./pros-and-cons/pros-and-cons.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {ImpactsComponent} from "./impacts/impacts.component";
import {ItsFutureComponent} from "./its-future/its-future.component";
import {ClimateComponent} from "./impacts/climate/climate.component";
import {EconomyComponent} from "./impacts/economy/economy.component";

const routes: Routes = [
  {path: 'basicInfo', component: BasicInfoComponent},
  {path: 'howItWorks', component: HowItWorksComponent},
  {path: 'prosAndCons', component: ProsAndConsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'impacts', component: ImpactsComponent,
    children: [
      {path: 'climate', component: ClimateComponent},
      {path: 'economy', component: EconomyComponent}
    ]},
  {path: 'itsFuture', component: ItsFutureComponent},
  {path: '', redirectTo: 'basicInfo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
