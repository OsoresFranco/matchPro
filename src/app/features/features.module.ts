import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgSimpleCarouselModule } from 'ng-simple-carousel';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule,
    NgSimpleCarouselModule,
    ReactiveFormsModule,
  ],
})
export class FeaturesModule {}
