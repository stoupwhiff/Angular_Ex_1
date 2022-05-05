import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/models/student';

@Component({
  selector: 'x-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Output() hideStudentDetails = new EventEmitter<void>()
  @Input() student!: Student

  constructor() { }

  ngOnInit(): void {
  }

}
