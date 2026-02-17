import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListsService } from '../../../core/services/lists.service';
import { List, Item } from '../../../core/models/list.model';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
  form!: FormGroup;
  list?: List;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private lists: ListsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.list = this.lists.getListById(id);
    this.form = this.fb.group({ title: [this.list?.title || ''] });
  }

  save() {
    if (!this.list) return;
    const updated: List = { ...this.list, title: this.form.value.title };
    this.lists.updateList(updated);
    this.router.navigate(['/']);
  }

  // Item editing moved to list-view; keep list save as-is
}