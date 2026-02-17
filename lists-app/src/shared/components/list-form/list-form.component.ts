import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent {
  title = '';
  @Output() create = new EventEmitter<string>();

  submit() {
    if (!this.title) return;
    this.create.emit(this.title);
    this.title = '';
  }
}