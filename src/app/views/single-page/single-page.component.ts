import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student';

@Component({
  selector: 'x-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  selected!: Student
  addStudent: boolean = false
  viewStudent: boolean = false
  students: Student[] = [
    {
      id: 0,
      name: "Ermes",
      surname: "Marino",
      email: "Ermes.marino@gmail.com",
      birth: new Date(18, 10, 1990),
      image: "https://picsum.photos/120/120"
    },
    {
      id: 1,
      name: "Mario",
      surname: "Rossi",
      email: "mario.rossi@gmail.com",
      birth: new Date(18, 10, 1990),
      image: "https://picsum.photos/121/120"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



  addStudents(student: Student) {
    this.students.push(
      {
        ...student,
        id: this.students.length
      }
    )
  }

  select(student: Student) {
    this.selected = student
  }

  deleteStudent(student: Student) {
    this.students = this.students.filter(el => el.id != student.id)
  }

}
