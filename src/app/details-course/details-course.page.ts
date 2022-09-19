import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: ListCoursesService
  ) {}

  ngOnInit() {
    // V1
    // this.activatedRoute.params.subscribe({
    //   next: (p: Params) => {
    //     console.log(p['id']);
    //     this.selectedCourse = this.courseService.getCourseById(p['id']);
    //     console.log(this.selectedCourse);
    //   },
    // });

    //V2
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        console.log(p.get('id'));
        this.selectedCourse = this.courseService.getCourseById(p.get('id'));
        console.log(this.selectedCourse);
      },
    });
  }
}
