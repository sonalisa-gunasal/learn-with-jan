import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shared-enrollment-form.component.html',
  styleUrls: ['./shared-enrollment-form.component.css']
})
export class SharedEnrollmentFormComponent {
  @Input() modalTitle: string = 'Enroll Now';
  @Input() buttonText: string = 'Enroll Now';
  @Input() courseTitle: string = '';
  @Input() academicCourses: any[] = [];
  @Input() professionalCourses: any[] = [];
  @Input() learningModes: any[] = [];
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() formClosed = new EventEmitter<void>();

  enrollmentData: any = {
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    board: '',
    subjects: [],
    preferredTime: '',
    currentPerformance: '',
    goals: '',
    courseInterest: '',
    learningMode: '',
    previousExperience: '',
    specificRequirements: ''
  };

  ngOnInit() {
    if (this.courseTitle) {
      this.enrollmentData.courseInterest = this.courseTitle;
    }
  }

  submitEnrollmentForm() {
    // Emit the form data to parent
    this.formSubmitted.emit(this.enrollmentData);
    this.resetEnrollmentForm();
  }

  closeForm() {
    this.formClosed.emit();
    this.resetEnrollmentForm();
  }

  resetEnrollmentForm() {
    this.enrollmentData = {
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      grade: '',
      board: '',
      subjects: [],
      preferredTime: '',
      currentPerformance: '',
      goals: '',
      courseInterest: '',
      learningMode: '',
      previousExperience: '',
      specificRequirements: ''
    };
  }
}
