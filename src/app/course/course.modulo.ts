import { NgModule } from '@angular/core';
import { CourseInfoComponent} from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

   NgModule({
        declarations: [
            CourseListComponent,
            CourseInfoComponent,

        ],
        imports: [
            CommonModule,
            FormsModule,
            StarModule,
            AppPipeModule,
            RouterModule.forChild({
                 {
          path: 'course', component: CourseListComponent
        },
        {
          path: 'course/info/:id', component: CourseInfoComponent
        }
            })
        ]
   })

export class CourseModule {

}
