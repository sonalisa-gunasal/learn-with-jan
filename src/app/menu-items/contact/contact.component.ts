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

  frequentQuestions = [
    {
      question: 'How long does it take to get a response?',
      answer: 'Response time depends on priority level: Critical (1 hour), High (4 hours), Medium (24 hours), Low (48 hours).'
    },
    {
      question: 'Can I ask questions about homework?',
      answer: 'Yes! We provide guidance and explanations to help you understand concepts, not just answers.'
    },
    {
      question: 'Is this service free?',
      answer: 'Basic query support is free. Premium support with faster response is available for enrolled students.'
    },
    // {
    //   question: 'Can I attach files or images?',
    //   answer: 'Yes, you can mention if you have attachments and our team will guide you on how to share them.'
    // },
    {
      question: 'Do you help with exam preparation?',
      answer: 'Absolutely! We provide exam strategies, practice problems, and revision guidance.'
    }
  ];

  submitContactForm() {
    const googleFormUrl = ' https://docs.google.com/forms/u/0/d/e/1FAIpQLScVbQhC8jBGSrukuwWObyD0dq7i9WOEWHJSa9akIL6eM-g2jg/formResponse';
    
    if (!this.contactData.firstName || !this.contactData.lastName || !this.contactData.email ||
      !this.contactData.message || !this.contactData.courseInterest || !this.contactData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    const form = new FormData();
    form.append('entry.1487966399', this.contactData.firstName);
    form.append('entry.1969319244', this.contactData.lastName);
    form.append('entry.997439586', this.contactData.email);
    form.append('entry.1873433624', this.contactData.phone);
    form.append('entry.1067673934', this.contactData.courseInterest);
    form.append('entry.571912973', this.contactData.message); 

    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        this.successMsg = '✅Thank you for your inquiry! We will get back to you within 24 hours.';
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
      courseInterest: ''
    };
  }
}
