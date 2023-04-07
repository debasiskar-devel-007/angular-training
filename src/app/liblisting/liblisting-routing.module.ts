import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiblistingComponent } from './liblisting.component';

const routes: Routes = [{ path: '', component: LiblistingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiblistingRoutingModule { }
