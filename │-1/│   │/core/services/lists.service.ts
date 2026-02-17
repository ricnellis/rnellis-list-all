import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

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
}