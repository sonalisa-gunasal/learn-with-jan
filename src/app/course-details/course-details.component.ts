import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-course-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  courseName = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.courseName = params['id']; // Example: /courses/math => "math"
    });
  }
}
