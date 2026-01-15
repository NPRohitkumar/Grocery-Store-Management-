import { Component } from '@angular/core';
import { Blog } from '../../../../core/services/blog';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-blogs',
  imports: [MatCardModule, CommonModule],
  templateUrl: './food-blogs.html',
  styleUrl: './food-blogs.css',
})
export class FoodBlogs {
  blogs: any;

  constructor(private blogService: Blog) {
    this.blogs = this.blogService.getBlogs();
  }
}
