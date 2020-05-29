import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { User } from '../user';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course: Course = {
    Id: 1,
    Title: 'First course',
    CreationDate: new Date('12.12.2020'),
    Duration: 12,
    Description: 'First course description'
  };
  user: User = {
    Id: 1,
    FirstName: 'John',
    LastName: 'Smith'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
