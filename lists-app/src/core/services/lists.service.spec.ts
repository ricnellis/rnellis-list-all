import { TestBed } from '@angular/core/testing';
import { ListsService } from './lists.service';

describe('ListsService', () => {
  let service: ListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can add, rename, and remove items', () => {
    const list = service.createList('My test');
    expect(list.items.length).toBe(0);

    const added = service.addItem(list.id, 'First');
    expect(added).toBeTruthy();
    expect(list.items.length).toBe(1);
    expect(list.items[0].name).toBe('First');

    const itemId = added!.id;
    const renamed = service.renameItem(list.id, itemId, 'Renamed');
    expect(renamed).toBeTrue();
    expect(list.items[0].name).toBe('Renamed');

    const removed = service.removeItem(list.id, itemId);
    expect(removed).toBeTrue();
    expect(list.items.length).toBe(0);
  });

  it('can update item details (rating & description)', () => {
    const list = service.createList('Details test');
    const added = service.addItem(list.id, 'Thing');
    expect(added).toBeTruthy();
    const id = added!.id;

    const updated = service.updateItem(list.id, id, { rating: 'A', description: 'A useful thing' });
    expect(updated).toBeTrue();
    const item = list.items.find(i => i.id === id)!;
    expect(item.rating).toBe('A');
    expect(item.description).toBe('A useful thing');
  });
});