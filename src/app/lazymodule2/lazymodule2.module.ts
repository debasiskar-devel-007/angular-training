import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazymodule2RoutingModule } from './lazymodule2-routing.module';
import { Lazymodule2Component } from './lazymodule2.component';


@NgModule({
  declarations: [
    Lazymodule2Component
  ],
  imports: [
    CommonModule,
    Lazymodule2RoutingModule
  ]
})
export class Lazymodule2Module { }
