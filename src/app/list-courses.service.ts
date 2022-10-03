import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
      keywords: ['components', 'directive', 'binding'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Bart Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png',
      keywords: ['Intent', 'Activity', 'Recycler View'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Homer Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/220px-LogoIonic.png',
      keywords: ['Hybrid', 'Page', 'JS'],
    },
  ];

  constructor() {}

  getAllCourses() {
    return this.tabCourses;
  }

  addCourse(newCourse) {
    newCourse.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    this.tabCourses.push(newCourse);
  }

  getCourseById(id) {
    return this.tabCourses.find((c) => c.id == id);
  }

  deleteCourse(course) {
    let i = this.tabCourses.indexOf(course);
    this.tabCourses.splice(i, 1); //    this.tabCourses.splice(i);
  }
}
