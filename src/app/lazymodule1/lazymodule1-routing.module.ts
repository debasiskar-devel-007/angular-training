import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazym1c1Component } from './lazym1c1/lazym1c1.component';
import { Lazymodule1Component } from './lazymodule1.component';

const routes: Routes = [
  { path: '', component: Lazymodule1Component },
  { path: 'lazy1c1', component: Lazym1c1Component },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazymodule1RoutingModule { }
