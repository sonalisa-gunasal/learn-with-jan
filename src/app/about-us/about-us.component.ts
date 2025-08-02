import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedEnrollmentFormComponent } from '../shared/shared-enrollment-form';
import { SharedConsultationFormComponent } from '../shared/shared-consultation-form';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedEnrollmentFormComponent, SharedConsultationFormComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  // Shared form visibility controls
  showSharedEnrollmentForm = false;
  showSharedConsultationForm = false;
  
  modalTitle = '';
  buttonText = '';
  
  enrollmentData = {
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

  // Updated comprehensive course list aligned with academic and professional components
  academicCourses = [
    {
      category: 'Grade 9 Foundation',
      title: 'Strong Fundamentals for Future Success 📘',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      duration: '36 weeks',
      value: 'grade-9-foundation'
    },
    {
      category: 'Grade 10 Mastery',
      title: 'Board-Level Concept Mastery 📗',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      duration: '36 weeks',
      value: 'grade-10-mastery'
    },
    {
      category: 'Grade 11 Deep Dive',
      title: 'Core Sciences Deep Dive 📕',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      duration: '36 weeks',
      value: 'grade-11-deep-dive'
    },
    {
      category: 'Grade 12 Excellence',
      title: 'Peak Preparation for Boards & Beyond 📙',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      duration: '36 weeks',
      value: 'grade-12-excellence'
    }
  ];

  professionalCourses = [
    {
      category: 'Quality Management',
      title: 'ISO 9001:2015 – Quality Management System (QMS) 🏆',
      duration: '5 days',
      value: 'iso-9001-qms'
    },
    {
      category: 'Environmental Management',
      title: 'ISO 14001:2015 – Environmental Management System (EMS) 🌱',
      duration: '5 days',
      value: 'iso-14001-ems'
    },
    {
      category: 'Health & Safety',
      title: 'ISO 45001:2018 – Occupational Health & Safety (OHSMS) 🛡️',
      duration: '5 days',
      value: 'iso-45001-ohsms'
    },
    {
      category: 'Food Safety',
      title: 'ISO 22000:2018 – Food Safety Management System (FSMS) 🍎',
      duration: '5 days',
      value: 'iso-22000-fsms'
    },
    {
      category: 'Food Safety Certification',
      title: 'FSSC 22000 – Food Safety System Certification (V6) 🏅',
      duration: '6 days',
      value: 'fssc-22000'
    },
    {
      category: 'Information Security',
      title: 'ISO 27001:2022 – Information Security Management (ISMS) 🔐',
      duration: '5 days',
      value: 'iso-27001-isms'
    },
    {
      category: 'Energy Management',
      title: 'ISO 50001:2018 – Energy Management System (EnMS) ⚡',
      duration: '4 days',
      value: 'iso-50001-enms'
    }
  ];

  learningModes = [
    { value: 'online-live', label: 'Online Live Classes' },
    { value: 'online-recorded', label: 'Online Recorded Classes' },
    { value: 'hybrid', label: 'Hybrid (Live + Recorded)' },
    { value: 'offline', label: 'Offline Classes (if available)' }
  ];

  openEnrollmentForm(courseTitle?: string) {
    this.modalTitle = 'Enroll Now';
    this.buttonText = 'Enroll Now';
    if (courseTitle) {
      this.enrollmentData.courseInterest = courseTitle;
    }
    
    // Show shared enrollment form
    this.showSharedEnrollmentForm = true;
  }

  openBookingForm(type: string) {
    if (type === 'consultation') {
      this.modalTitle = 'Book a Free Consultation';
      this.buttonText = 'Book Consultation';
    } else {
      this.modalTitle = 'Book a Free Demo';
      this.buttonText = 'Book Demo';
    }
    
    // Show shared consultation form
    this.showSharedConsultationForm = true;
  }

  // Shared form event handlers
  onSharedEnrollmentFormSubmitted(enrollmentData: any) {
    // Form submission is now handled within the shared component
    // This method can be used for any additional logic if needed
  }

  onSharedEnrollmentFormClosed() {
    this.showSharedEnrollmentForm = false;
  }

  onSharedConsultationFormSubmitted(formData: any) {
    // Form submission is now handled within the shared component
    // This method can be used for any additional logic if needed
  }

  onSharedConsultationFormClosed() {
    this.showSharedConsultationForm = false;
  }

}
