import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgSimpleCarouselModule } from 'ng-simple-carousel';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BetComponent } from './views/bet/bet.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './views/login/login.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, BetComponent, SliderComponent, LoginComponent, LoginDialogComponent, RegisterDialogComponent],
  imports: [CommonModule, FeaturesRoutingModule, MaterialModule, NgSimpleCarouselModule],
})
export class FeaturesModule {}
