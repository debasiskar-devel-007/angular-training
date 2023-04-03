import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazymodule2RoutingModule } from './lazymodule2-routing.module';
import { Lazymodule2Component } from './lazymodule2.component';
import { Lazym2c1Component } from './lazym2c1/lazym2c1.component';


@NgModule({
  declarations: [
    Lazymodule2Component,
    Lazym2c1Component
  ],
  imports: [
    CommonModule,
    Lazymodule2RoutingModule
  ]
})
export class Lazymodule2Module { }
