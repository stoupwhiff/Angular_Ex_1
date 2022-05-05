import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'x-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() addStudent = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
