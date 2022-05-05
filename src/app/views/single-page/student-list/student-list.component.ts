import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/models/student';

@Component({
  selector: 'x-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  

  @Output() viewStudent = new EventEmitter<void>()
  @Output() selectedStudent = new EventEmitter<Student>()
  @Output() deleted = new EventEmitter<Student>()
  @Output() addStudent = new EventEmitter<void>()

  @Input() students!: Student[]

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(student: Student) {
    this.selectedStudent.emit(student)
  }

}
