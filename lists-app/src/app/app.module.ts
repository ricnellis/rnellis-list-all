import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from '../features/collections/collections.component';
import { ListModule } from '../features/list/list.module';
import { ListCardComponent } from '../shared/components/list-card/list-card.component';
import { ListFormComponent } from '../shared/components/list-form/list-form.component';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    ListCardComponent,
    ListFormComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }