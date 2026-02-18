import { Injectable } from '@angular/core';
import { List, Item } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private lists: List[] = [];

  constructor() { }

  createList(title: string): List {
    const newList: List = { id: this.generateId(), title, items: [] };
    this.lists.push(newList);
    return newList;
  }

  getLists(): List[] {
    return this.lists;
  }

  getListById(id: number): List | undefined {
    return this.lists.find(list => list.id === id);
  }

  updateList(updatedList: List): boolean {
    const index = this.lists.findIndex(list => list.id === updatedList.id);
    if (index !== -1) {
      this.lists[index] = updatedList;
      return true;
    }
    return false;
  }

  deleteList(id: number): boolean {
    const index = this.lists.findIndex(list => list.id === id);
    if (index !== -1) {
      this.lists.splice(index, 1);
      return true;
    }
    return false;
  }

  private generateId(): number {
    return this.lists.length > 0 ? Math.max(...this.lists.map(list => list.id)) + 1 : 1;
  }

  private generateItemId(list: List): number {
    return list.items && list.items.length > 0 ? Math.max(...list.items.map(i => i.id)) + 1 : 1;
  }

  addItem(listId: number, name: string, rating?: string, description?: string, date?: string): Item | undefined {
    const list = this.getListById(listId);
    if (!list) return undefined;
    const isoDate = date || new Date().toISOString().split('T')[0];
    const item: Item = { id: this.generateItemId(list), name, rating, description, date: isoDate };
    list.items.push(item);
    return item;
  }

  removeItem(listId: number, itemId: number): boolean {
    const list = this.getListById(listId);
    if (!list) return false;
    const idx = list.items.findIndex(i => i.id === itemId);
    if (idx === -1) return false;
    list.items.splice(idx, 1);
    return true;
  }

  renameItem(listId: number, itemId: number, newName: string): boolean {
    const list = this.getListById(listId);
    if (!list) return false;
    const item = list.items.find(i => i.id === itemId);
    if (!item) return false;
    item.name = newName;
    return true;
  }

  /** Update item fields (name, rating, description) */
  updateItem(listId: number, itemId: number, details: { name?: string; rating?: string; description?: string; date?: string }): boolean {
    const list = this.getListById(listId);
    if (!list) return false;
    const item = list.items.find(i => i.id === itemId);
    if (!item) return false;
    if (details.name !== undefined) item.name = details.name;
    if (details.rating !== undefined) item.rating = details.rating;
    if (details.description !== undefined) item.description = details.description;
    if (details.date !== undefined) item.date = details.date;
    return true;
  }
}