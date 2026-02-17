import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../core/services/lists.service';
import { List } from '../../core/models/list.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  lists: List[] = [];

  constructor(private listsService: ListsService) {}

  ngOnInit(): void {
    this.lists = this.listsService.getLists();
  }

  create(title: string) {
    if (!title) return;
    this.listsService.createList(title);
    this.lists = this.listsService.getLists();
  }
}