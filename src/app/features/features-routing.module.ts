import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetComponent } from './views/bet/bet.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'bet',
        component: BetComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
