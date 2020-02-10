import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzarankComponent } from './pizzarank/pizzarank.component';

const routes: Routes = [{ path: '', component: PizzarankComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
