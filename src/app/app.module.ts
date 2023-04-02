import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterWithNgrxComponent } from './my-counter-with-ngrx/my-counter-with-ngrx.component';
import { AnotherComponentComponent } from './another-component/another-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterWithNgrxComponent,
    AnotherComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
