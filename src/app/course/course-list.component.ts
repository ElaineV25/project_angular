import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService, course } from './course.service';

@Component({
   templateUrl: './course-list.component.html'
})
 export class CourseListComponent implements OnInit {

    filteredCourse: Course[] = [];

    _course: Course[] = [];

    _filterBy: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.course = this.courseService.retrieveAll();
        this.filteredCourse = this._course;
    }

    deleteById(courseId: number): void {
         this.courseService.deleteById(courseId).subscribe({
               next: () => {
                  console.log('Delete with sucess');
                  retrieveAll();
               },
               error: err => console.log('Error', err)
         })
    }

    set filter(value: string) {
        this._filterBy = value;

    this.filteredCourse = this._course.filter((course: Course ) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}
