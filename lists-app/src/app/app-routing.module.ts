import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from '../features/collections/collections.component';
import { ListViewComponent } from '../features/list/list-view/list-view.component';
import { ListEditComponent } from '../features/list/list-edit/list-edit.component';

const routes: Routes = [
  { path: '', component: CollectionsComponent },
  { path: 'list/:id', component: ListViewComponent },
  { path: 'edit/:id', component: ListEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }