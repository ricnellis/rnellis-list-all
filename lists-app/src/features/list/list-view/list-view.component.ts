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
  editDate: string = '';

  sortBy: 'rating' | 'title' | 'date' = 'title';
  sortDir: 'asc' | 'desc' = 'asc';

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
    this.editDate = item.date || '';
  }

  saveEdit() {
    if (!this.list || this.editingItemId === null) return;
    const name = this.editName.trim();
    if (!name) return;
    this.lists.updateItem(this.list.id, this.editingItemId, { name, rating: this.editRating, description: this.editDescription, date: this.editDate });
    this.editingItemId = null;
    this.editName = '';
    this.editRating = '';
    this.editDescription = '';
    this.editDate = '';
  }

  cancelEdit() {
    this.editingItemId = null;
    this.editName = '';
    this.editDate = '';
  }

  toggleSortDir() {
    this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
  }

  get sortedItems(): Item[] {
    if (!this.list) return [];
    const items = [...this.list.items];
    const dir = this.sortDir === 'asc' ? 1 : -1;
    items.sort((a, b) => {
      if (this.sortBy === 'rating') {
        const na = Number(a.rating || '');
        const nb = Number(b.rating || '');
        if (!isNaN(na) && !isNaN(nb)) return (na - nb) * dir;
        return ((a.rating || '').localeCompare(b.rating || '')) * dir;
      }
      if (this.sortBy === 'date') {
        const da = a.date || '';
        const db = b.date || '';
        if (da === db) return 0;
        if (!da) return 1 * dir;
        if (!db) return -1 * dir;
        return (da > db ? 1 : -1) * dir;
      }
      // title
      return ((a.name || '').localeCompare(b.name || '')) * dir;
    });
    return items;
  }
}