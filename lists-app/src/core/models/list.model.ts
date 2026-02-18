export interface Item {
    id: number;
    name: string;
    rating?: string;
    description?: string;
    date?: string;
}

export class List {
    id: number;
    title: string;
    items: Item[];

    constructor(id: number, title: string, items: Item[] = []) {
        this.id = id;
        this.title = title;
        this.items = items;
    }
}