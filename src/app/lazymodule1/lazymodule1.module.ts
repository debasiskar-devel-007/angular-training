import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazymodule1RoutingModule } from './lazymodule1-routing.module';
import { Lazymodule1Component } from './lazymodule1.component';
import { Lazym1c1Component } from './lazym1c1/lazym1c1.component';


@NgModule({
  declarations: [
    Lazymodule1Component,
    Lazym1c1Component
  ],
  imports: [
    CommonModule,
    Lazymodule1RoutingModule
  ]
})
export class Lazymodule1Module { }
