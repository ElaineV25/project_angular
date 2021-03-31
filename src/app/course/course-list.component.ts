import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
   selector: 'app-course-list',
   templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    course: Course[] = [];

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.course = this.courseService.retrieveAll();

    }
}
