import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit {
  ngOnInit(): void {
    const request = {page: 0, size: 3}
    this.getPageRequest(request);
  }

  listCategory?: Category[];
  totalElements = 3;

  constructor(private categoryService: CategoryService) {
  }

  getPageRequest(request: any) {
    this.categoryService.getPageCategory(request).subscribe(data => {
      this.listCategory = data["content"];
    })
  }

  nextPage($event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = $event.pageIndex.toString();
    // @ts-ignore
    request['size'] = $event.pageSize.toString();
    this.getPageRequest(request);
  }
}
