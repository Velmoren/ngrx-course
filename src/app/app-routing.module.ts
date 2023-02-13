import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import ('./modules/main/main.module').then(x => x.MainModule)},
  {path: 'caunter', loadChildren: () => import ('./modules/counter/counter.module').then(x => x.CounterModule)},
  {path: 'form', loadChildren: () => import ('./modules/form/form.module').then(x => x.FormModule)},
  {path: 'homework', loadChildren: () => import ('./modules/homework/homework.module').then(x => x.HomeworkModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
