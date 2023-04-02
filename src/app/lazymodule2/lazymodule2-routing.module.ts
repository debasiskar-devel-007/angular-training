import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazymodule2Component } from './lazymodule2.component';

const routes: Routes = [{ path: '', component: Lazymodule2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazymodule2RoutingModule { }
