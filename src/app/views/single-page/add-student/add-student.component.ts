import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/models/student';

@Component({
  selector: 'x-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Output() hideAddStudent = new EventEmitter<void>()
  @Output() submitted = new EventEmitter<Student>()

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(form: NgForm) {
    this.submitted.emit({...form.value})
  }

}
