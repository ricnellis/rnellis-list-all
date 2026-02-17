export class List {
    id: number;
    title: string;
    items: string[];

    constructor(id: number, title: string, items: string[] = []) {
        this.id = id;
        this.title = title;
        this.items = items;
    }
}