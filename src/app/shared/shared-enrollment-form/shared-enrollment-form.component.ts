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
    this.initializeForm();
  }

  ngOnChanges() {
    if (this.courseTitle) {
      this.enrollmentData.courseInterest = this.courseTitle;
    }
  }

  initializeForm() {
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
      courseInterest: this.courseTitle || '',
      learningMode: '',
      previousExperience: '',
      specificRequirements: ''
    };
  }

  submitEnrollmentForm() {
    // Enhanced Google Form URL for enrollment
    const enrollmentFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7m4n_wq8XctJGwT7jmpju9BU1-6gLe9ZrqK1pBo09xWzWog/formResponse';

    if (!this.enrollmentData.studentName || !this.enrollmentData.parentName || !this.enrollmentData.email ||
        !this.enrollmentData.phone || !this.enrollmentData.grade || !this.enrollmentData.courseInterest ||
        !this.enrollmentData.preferredTime || !this.enrollmentData.learningMode) {
      alert('❌ Please fill in all required fields.');
      return;
    }

    const form = new FormData();
    form.append('entry.1487966399', this.enrollmentData.studentName);
    form.append('entry.1642405014', this.enrollmentData.parentName);
    form.append('entry.1379084204', this.enrollmentData.email);
    form.append('entry.123757761', this.enrollmentData.phone);
    form.append('entry.1969319244', this.enrollmentData.grade);
    form.append('entry.36602274', this.enrollmentData.board);
    form.append('entry.987654321', this.enrollmentData.subjects.join(', '));
    form.append('entry.707266762', this.enrollmentData.preferredTime);
    form.append('entry.1266232267', this.enrollmentData.currentPerformance);
    form.append('entry.652009937', this.enrollmentData.goals);
    form.append('entry.57529502', this.enrollmentData.courseInterest);
    form.append('entry.997439586', this.enrollmentData.learningMode);
    form.append('entry.571912973', this.enrollmentData.previousExperience);
    form.append('entry.486126496', this.enrollmentData.specificRequirements);

    fetch(enrollmentFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        const successMsg = '🎉 Congratulations! Your enrollment is successful! Our team will contact you within 24 hours to schedule your FREE demo session.';
        alert(successMsg);
        this.closeForm();
      }).catch(() => {
        alert('❌ Something went wrong. Please try again or contact us directly.');
      });
  }

  closeForm() {
    this.formClosed.emit();
    this.resetEnrollmentForm();
  }

  resetEnrollmentForm() {
    this.initializeForm();
  }
}
