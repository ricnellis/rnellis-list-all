import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListRoutingModule } from './list-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { ListEditComponent } from './list-edit/list-edit.component';

@NgModule({
  declarations: [ListViewComponent, ListEditComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, ListRoutingModule],
  exports: [ListViewComponent, ListEditComponent]
})
export class ListModule {}