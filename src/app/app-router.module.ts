import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BallotComponent} from './pages/ballot/ballot.component';
import {ResultsComponent} from './pages/results/results.component';
import {TallyComponent} from './pages/tally/tally.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ballot', component: BallotComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'tally', component: TallyComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
