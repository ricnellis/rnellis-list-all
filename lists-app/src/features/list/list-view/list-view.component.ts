import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../../../core/services/lists.service';
import { List, Item } from '../../../core/models/list.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  list?: List | undefined;
  newItemName: string = '';
  editingItemId: number | null = null;
  editName: string = '';
  editRating: string = '';
  editDescription: string = '';

  constructor(private route: ActivatedRoute, private lists: ListsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.list = this.lists.getListById(id);
  }

  addItem() {
    if (!this.list) return;
    const name = this.newItemName.trim();
    if (!name) return;
    this.lists.addItem(this.list.id, name);
    this.newItemName = '';
  }

  removeItem(itemId: number) {
    if (!this.list) return;
    this.lists.removeItem(this.list.id, itemId);
  }

  startEdit(item: Item) {
    this.editingItemId = item.id;
    this.editName = item.name;
    this.editRating = item.rating || '';
    this.editDescription = item.description || '';
  }

  saveEdit() {
    if (!this.list || this.editingItemId === null) return;
    const name = this.editName.trim();
    if (!name) return;
    this.lists.updateItem(this.list.id, this.editingItemId, { name, rating: this.editRating, description: this.editDescription });
    this.editingItemId = null;
    this.editName = '';
    this.editRating = '';
    this.editDescription = '';
  }

  cancelEdit() {
    this.editingItemId = null;
    this.editName = '';
  }
}