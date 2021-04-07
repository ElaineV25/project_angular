import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,

      ],
   imports: [
     BrowserModule,
     FormsModule,
     HttpModule,
     CourseModule,
     CoreModule
     RouterModule.forRoot([
        {
          path: '', redirectTo: 'course', pathMatch: 'full'
        },
               ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
