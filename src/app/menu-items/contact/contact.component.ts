import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  successMsg: string = '';

  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    courseInterest: '',
    inquiryType: '',
    preferredContactTime: '',
    urgencyLevel: ''
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
    },
    {
      category: 'JEE Preparation',
      title: 'JEE Main & Advanced Mastery 🎯',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '48 weeks',
      value: 'jee-preparation'
    },
    {
      category: 'NEET Preparation',
      title: 'NEET Excellence Program 🩺',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      duration: '48 weeks',
      value: 'neet-preparation'
    }
  ];

  professionalCourses = [
    {
      category: 'Quality Management',
      title: 'ISO 9001:2015 – Quality Management System (QMS) 🏆',
      duration: '5 days',
      targetAudience: ['Quality Managers', 'QMS Implementers', 'Auditors'],
      value: 'iso-9001-qms'
    },
    {
      category: 'Environmental Management',
      title: 'ISO 14001:2015 – Environmental Management System (EMS) 🌱',
      duration: '5 days',
      targetAudience: ['EHS Professionals', 'Consultants', 'Environmental Officers'],
      value: 'iso-14001-ems'
    },
    {
      category: 'Health & Safety',
      title: 'ISO 45001:2018 – Occupational Health & Safety (OHSMS) 🛡️',
      duration: '5 days',
      targetAudience: ['HSE Managers', 'Safety Auditors', 'OHS Practitioners'],
      value: 'iso-45001-ohsms'
    },
    {
      category: 'Food Safety',
      title: 'ISO 22000:2018 – Food Safety Management System (FSMS) 🍎',
      duration: '5 days',
      targetAudience: ['QA/QC Professionals', 'Food Safety Officers', 'HACCP Team Leaders'],
      value: 'iso-22000-fsms'
    },
    {
      category: 'Food Safety Certification',
      title: 'FSSC 22000 – Food Safety System Certification (V6) 🏅',
      duration: '6 days',
      targetAudience: ['Food Industry Professionals', 'Quality Leads', 'Auditors'],
      value: 'fssc-22000'
    },
    {
      category: 'Information Security',
      title: 'ISO 27001:2022 – Information Security Management (ISMS) 🔐',
      duration: '5 days',
      targetAudience: ['IT Security Managers', 'CISOs', 'Data Privacy Professionals'],
      value: 'iso-27001-isms'
    },
    {
      category: 'Energy Management',
      title: 'ISO 50001:2018 – Energy Management System (EnMS) ⚡',
      duration: '4 days',
      targetAudience: ['Energy Managers', 'Facility Auditors', 'Engineers'],
      value: 'iso-50001-enms'
    }
  ];

  inquiryTypes = [
    { value: 'course-inquiry', label: 'Course Information & Curriculum' },
    { value: 'enrollment', label: 'Enrollment Process & Requirements' },
    { value: 'pricing', label: 'Pricing & Payment Options' },
    { value: 'schedule', label: 'Class Schedule & Timing' },
    { value: 'technical-support', label: 'Technical Support' },
    { value: 'certification', label: 'Certification & Accreditation' },
    { value: 'career-guidance', label: 'Career Guidance & Counseling' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  contactTimePreferences = [
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
    { value: 'anytime', label: 'Anytime' }
  ];

  urgencyLevels = [
    { value: 'low', label: 'Low - General Inquiry' },
    { value: 'medium', label: 'Medium - Need info within 2-3 days' },
    { value: 'high', label: 'High - Need info within 24 hours' },
    { value: 'urgent', label: 'Urgent - Need immediate response' }
  ];

  submitContactForm() {
    const googleFormUrl = ' https://docs.google.com/forms/u/0/d/e/1FAIpQLScVbQhC8jBGSrukuwWObyD0dq7i9WOEWHJSa9akIL6eM-g2jg/formResponse';
    if (!this.contactData.firstName || !this.contactData.lastName || !this.contactData.email ||
      !this.contactData.inquiryType || !this.contactData.message || !this.contactData.courseInterest
      || this.contactData.preferredContactTime === '' || this.contactData.urgencyLevel === '') {
      alert('Please fill in all required fields.');
      return;
    }

    // Enhanced response based on urgency level
    let responseTime = '24-48 hours';
    if (this.contactData.urgencyLevel === 'urgent') {
      responseTime = '1-2 hours';
    } else if (this.contactData.urgencyLevel === 'high') {
      responseTime = '4-6 hours';
    } else if (this.contactData.urgencyLevel === 'medium') {
      responseTime = '12-24 hours';
    }

    alert(`Thank you for your inquiry! We will get back to you within ${responseTime} based on your urgency level.`);

    const form = new FormData();
    form.append('entry.1487966399', this.contactData.firstName);
    form.append('entry.1969319244', this.contactData.lastName);
    form.append('entry.997439586', this.contactData.email);
    form.append('entry.36602274', this.contactData.inquiryType);
    form.append('entry.1873433624', this.contactData.phone);
    form.append('entry.1067673934', this.contactData.courseInterest);
    form.append('entry.1266232267', this.contactData.preferredContactTime);
    form.append('entry.707266762', this.contactData.urgencyLevel);
    form.append('entry.571912973', this.contactData.message); // Optional field

    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        this.successMsg = '✅ Your demo has been booked! We\'ll contact you soon to schedule your FREE session.';
        alert(this.successMsg);
        this.closeContactForm();
      }).catch(() => {
        alert('❌ Something went wrong. Please try again.');
      });

    this.closeContactForm();

  }

  // Helper method to get selected course details
  getSelectedCourseDetails() {
    const allCourses = [...this.academicCourses, ...this.professionalCourses];
    return allCourses.find(course => course.value === this.contactData.courseInterest);
  }

  closeContactForm() {
    this.successMsg = '';
    this.contactData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      courseInterest: '',
      inquiryType: '',
      preferredContactTime: '',
      urgencyLevel: ''
    };
  }
}
