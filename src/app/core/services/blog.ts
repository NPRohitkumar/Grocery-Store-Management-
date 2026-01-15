import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Blog {
  private blogs = [
    {
      id: 1,
      image: "/images/blogImg1.png",
      date: "28/08/2004",
      title: 'Safe Food Storage Tips',
      summary: 'Learn how to store food properly to avoid contamination.'
    },
    {
      id: 2,
      image: "/images/blogImg2.jpg",
      date: "24/03/2004",
      title: 'Preventing Food-Borne Illness',
      summary: 'Best practices to keep your food healthy and safe.'
    },
    // {
    //   id: 3,
    //   image: "/images/blogImg3.jpg",
    //   date: "25/06/2007",
    //   title: 'Hygiene in Food Handling',
    //   summary: 'Why hygiene is important in every food business.'
    // }
  ];

  getBlogs() {
    return this.blogs;
  }
}
