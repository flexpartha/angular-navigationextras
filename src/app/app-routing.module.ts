import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngmaterialtableComponent } from './angmaterialtable/angmaterialtable.component';
import { PageonedetailComponent } from './pageonedetail/pageonedetail.component';
import { PageonemonthListComponent } from './pageonemonth-list/pageonemonth-list.component';

export const routes: Routes = [
  {path: '', redirectTo: '/pageoneMonthList', pathMatch: 'full'},
  {path: 'pageoneMonthList',component:PageonemonthListComponent},
  {path: 'pageoneDetails', component:PageonedetailComponent},
  {path: 'matTable', component:AngmaterialtableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
