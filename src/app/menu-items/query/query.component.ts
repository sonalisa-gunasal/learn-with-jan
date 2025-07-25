import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {

  queryData = {
    studentName: '',
    grade: '',
    subject: '',
    priority: '',
    question: '',
    email: '',
    courseInterest: '',
    queryType: '',
    // attachments: ''
  };

  // Updated comprehensive course list aligned with academic and professional components
  academicCourses = [
    {
      category: 'Grade 9 Foundation',
      title: 'Strong Fundamentals for Future Success 📘',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      value: 'grade-9-foundation'
    },
    {
      category: 'Grade 10 Mastery',
      title: 'Board-Level Concept Mastery 📗',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      value: 'grade-10-mastery'
    },
    {
      category: 'Grade 11 Deep Dive',
      title: 'Core Sciences Deep Dive 📕',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      value: 'grade-11-deep-dive'
    },
    {
      category: 'Grade 12 Excellence',
      title: 'Peak Preparation for Boards & Beyond 📙',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      value: 'grade-12-excellence'
    },
    {
      category: 'JEE Preparation',
      title: 'JEE Main & Advanced Mastery 🎯',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      value: 'jee-preparation'
    },
    {
      category: 'NEET Preparation',
      title: 'NEET Excellence Program 🩺',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      value: 'neet-preparation'
    }
  ];

  professionalCourses = [
    {
      category: 'Quality Management',
      title: 'ISO 9001:2015 – Quality Management System (QMS) 🏆',
      value: 'iso-9001-qms'
    },
    {
      category: 'Environmental Management',
      title: 'ISO 14001:2015 – Environmental Management System (EMS) 🌱',
      value: 'iso-14001-ems'
    },
    {
      category: 'Health & Safety',
      title: 'ISO 45001:2018 – Occupational Health & Safety (OHSMS) 🛡️',
      value: 'iso-45001-ohsms'
    },
    {
      category: 'Food Safety',
      title: 'ISO 22000:2018 – Food Safety Management System (FSMS) 🍎',
      value: 'iso-22000-fsms'
    },
    {
      category: 'Food Safety Certification',
      title: 'FSSC 22000 – Food Safety System Certification (V6) 🏅',
      value: 'fssc-22000'
    },
    {
      category: 'Information Security',
      title: 'ISO 27001:2022 – Information Security Management (ISMS) 🔐',
      value: 'iso-27001-isms'
    },
    {
      category: 'Energy Management',
      title: 'ISO 50001:2018 – Energy Management System (EnMS) ⚡',
      value: 'iso-50001-enms'
    }
  ];

  queryTypes = [
    { value: 'concept-doubt', label: 'Concept Doubt/Clarification' },
    { value: 'homework-help', label: 'Homework/Assignment Help' },
    { value: 'exam-preparation', label: 'Exam Preparation Strategy' },
    { value: 'course-content', label: 'Course Content Query' },
    { value: 'technical-issue', label: 'Technical Platform Issue' },
    { value: 'study-plan', label: 'Study Plan Guidance' },
    { value: 'career-guidance', label: 'Career Guidance' },
    { value: 'other', label: 'Other' }
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

  submitQuery() {
    if (!this.queryData.studentName || !this.queryData.grade || !this.queryData.subject || 
        !this.queryData.priority || !this.queryData.question || !this.queryData.email || 
        !this.queryData.courseInterest || !this.queryData.queryType) {
      alert('Please fill in all required fields.');
      return;
    }

    // Enhanced response based on priority level
    let responseTime = '48 hours';
    if (this.queryData.priority === 'critical') {
      responseTime = '1 hour';
    } else if (this.queryData.priority === 'high') {
      responseTime = '4 hours';
    } else if (this.queryData.priority === 'medium') {
      responseTime = '24 hours';
    }

    alert(`Your query has been submitted successfully! You will receive a response within ${responseTime} at your email address.`);
    
    // Reset form
    this.queryData = { 
      studentName: '', 
      grade: '', 
      subject: '', 
      priority: '', 
      question: '', 
      email: '', 
      courseInterest: '',
      queryType: '',
      // attachments: ''
    };
  }

  // Helper method to get available subjects based on selected grade
  getAvailableSubjects() {
    if (this.queryData.grade === 'graduate' || this.queryData.grade === 'working-professional') {
      return this.professionalCourses.map(course => ({
        value: course.value,
        label: course.category
      }));
    } else {
      const selectedCourse = this.academicCourses.find(course => 
        course.value.includes(this.queryData.grade) || 
        (this.queryData.grade === 'jee' && course.value === 'jee-preparation') ||
        (this.queryData.grade === 'neet' && course.value === 'neet-preparation')
      );
      
      if (selectedCourse) {
        return selectedCourse.subjects.map(subject => ({
          value: subject.toLowerCase(),
          label: subject
        }));
      }
    }
    
    return [
      { value: 'mathematics', label: 'Mathematics' },
      { value: 'physics', label: 'Physics' },
      { value: 'chemistry', label: 'Chemistry' },
      { value: 'biology', label: 'Biology' }
    ];
  }
}
