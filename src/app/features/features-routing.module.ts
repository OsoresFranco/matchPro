import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { BetComponent } from './views/bet/bet.component';
import { Error404Component } from './views/error404/error404.component';
import { FeaturesComponent } from './views/features.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { ResultsComponent } from './views/results/results.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'tooltip', component: TooltipComponent },

  {
    path: '',
    component: FeaturesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'bet', component: BetComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'results', component: ResultsComponent },
    ],
  },
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
