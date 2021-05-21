import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ProsAndConsComponent } from './pros-and-cons/pros-and-cons.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ImpactsComponent } from './impacts/impacts.component';
import { ItsFutureComponent } from './its-future/its-future.component';
import { ClimateComponent } from './impacts/climate/climate.component';
import { EconomyComponent } from './impacts/economy/economy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicInfoComponent,
    HowItWorksComponent,
    ProsAndConsComponent,
    StatisticsComponent,
    ImpactsComponent,
    ItsFutureComponent,
    ClimateComponent,
    EconomyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
