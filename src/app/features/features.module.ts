import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BetComponent } from './views/bet/bet.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, BetComponent],
  imports: [CommonModule, FeaturesRoutingModule, MaterialModule],
})
export class FeaturesModule {}
