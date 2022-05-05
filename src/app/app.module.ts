import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SinglePageComponent } from './views/single-page/single-page.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { AddStudentComponent } from './views/single-page/add-student/add-student.component';
import { HeroComponent } from './views/single-page/hero/hero.component';
import { HrComponent } from './shared/hr/hr.component';
import { StudentListComponent } from './views/single-page/student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './views/single-page/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    NavbarComponent,
    FooterComponent,
    AddStudentComponent,
    HeroComponent,
    HrComponent,
    StudentListComponent,
    StudentDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
