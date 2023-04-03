import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazym2c1Component } from './lazym2c1/lazym2c1.component';
import { Lazymodule2Component } from './lazymodule2.component';

const routes: Routes = [
  { path: '', component: Lazymodule2Component },
  { path: 'lazy2c1', component: Lazym2c1Component },
];
// Lazym2c1Component

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazymodule2RoutingModule { }
