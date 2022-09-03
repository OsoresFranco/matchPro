import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgSimpleCarouselModule } from 'ng-simple-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BetComponent } from './views/bet/bet.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './views/login/login.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { FeaturesComponent } from './views/features.component';
import { MatchComponent } from './components/match/match.component';
import { BetMatchComponent } from './components/bet-match/bet-match.component';
import { RankingTableComponent } from './components/ranking-table/ranking-table.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ResultsComponent } from './views/results/results.component';
import { BetModalComponent } from './components/bet-modal/bet-modal.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { Error404Component } from './views/error404/error404.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BetComponent,
    SliderComponent,
    LoginComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    MatchComponent,
    BetMatchComponent,
    RankingTableComponent,
    RankingComponent,
    ResultCardComponent,
    ResultsComponent,
    BetModalComponent,
    TooltipComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule,
    NgSimpleCarouselModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
})
export class FeaturesModule {}
