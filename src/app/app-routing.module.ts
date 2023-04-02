import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'lazymodule1', loadChildren: () => import('./lazymodule1/lazymodule1.module').then(m => m.Lazymodule1Module) }, { path: 'lazymodule2', loadChildren: () => import('./lazymodule2/lazymodule2.module').then(m => m.Lazymodule2Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
