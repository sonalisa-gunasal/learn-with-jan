import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared-consultation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shared-consultation-form.component.html',
  styleUrls: ['./shared-consultation-form.component.css']
})
export class SharedConsultationFormComponent {
  @Input() modalTitle: string = 'Book a Free Consultation';
  @Input() buttonText: string = 'Book Consultation';
  @Input() academicCourses: any[] = [];
  @Input() professionalCourses: any[] = [];
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() formClosed = new EventEmitter<void>();

  formData: any = {
    name: '',
    email: '',
    phone: '',
    grade: '',
    board: '',
    message: 'need free consultation',
    courseInterest: ''
  };

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      grade: '',
      board: '',
      message: 'need free consultation',
      courseInterest: ''
    };
  }

  submitConsultationForm() {
    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfgk40xoIJEWPkLLN4fcPWlvC2c78hFC10bnaMUy5rRhahr_w/formResponse';
    
    if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.grade || !this.formData.courseInterest) {
      alert('❌ Please fill in all required fields.');
      return;
    }

    const form = new FormData();
    form.append('entry.1487966399', this.formData.name);
    form.append('entry.997439586', this.formData.email);
    form.append('entry.1873433624', this.formData.phone);
    form.append('entry.36602274', this.formData.grade);
    form.append('entry.707266762', this.formData.board);
    form.append('entry.1067673934', this.formData.courseInterest);

    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        const successMsg = '✅ Your demo has been booked! We\'ll contact you soon to schedule your FREE session.';
        alert(successMsg);
        this.closeForm();
      }).catch(() => {
        alert('❌ Something went wrong. Please try again.');
      });
  }

  closeForm() {
    this.formClosed.emit();
    this.resetForm();
  }

  resetForm() {
    this.initializeForm();
  }
}