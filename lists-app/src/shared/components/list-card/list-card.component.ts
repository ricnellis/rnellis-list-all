import { Component, Input } from '@angular/core';
import { List } from '../../../core/models/list.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {
  @Input() list!: List;
}