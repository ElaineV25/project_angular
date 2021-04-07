import { Component } from '@angular/core';

@Component({
     templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements Oninit {

     course: Course;

     constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

     ngOnInit(): void {
         this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paraMap.get('id'));
     }

     save{}: void {
         this.course = this.courseService.save(this.course);
     }

}
