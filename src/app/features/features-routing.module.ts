import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetComponent } from './views/bet/bet.component';
import { FeaturesComponent } from './views/features.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RankingComponent } from './views/ranking/ranking.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'bet', component: BetComponent },
      { path: 'ranking', component: RankingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
