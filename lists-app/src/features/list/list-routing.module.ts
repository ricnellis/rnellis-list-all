import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { ListEditComponent } from './list-edit/list-edit.component';

const routes: Routes = [
  { path: 'list/:id', component: ListViewComponent },
  { path: 'edit/:id', component: ListEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}