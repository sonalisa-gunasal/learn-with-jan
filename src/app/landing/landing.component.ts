// src/app/landing/landing.component.ts

import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID, ViewChildren, ViewChild, ElementRef, QueryList } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true, // Keep 'standalone: true' if your project uses standalone components
  imports: [CommonModule, FormsModule, RouterModule], // Include modules as needed by your HTML
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] // Ensure this points to your component's CSS file
})
export class LandingComponent  {
  // @ViewChildren finds all elements with #submenu (like the 'Boards' li)
 title = 'GlobalEdge';
  isNavbarCollapsed = true;
  modalTitle = '';
  buttonText = '';
  successMsg = '';
  
  dropdownStates = {
    academic: false,
    professional: false,
    boards: false
  };

  formData = {
    name: '',
    email: '',
    phone: '',
    grade: '',
    board: '',
    message: ''
  };

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
    courseInterest: ''
  };

  successStories = [
    {
      name: 'Arjun Sharma',
      grade: 'Class 10, CBSE',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      achievement: '95% in Boards',
      testimonial: 'I improved from 65% to 95% in just 6 months! The teachers are amazing and always available for doubts.',
      improvement: '+30% Grade Improvement'
    },
    {
      name: 'Priya Patel',
      grade: 'Class 12, CBSE',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      achievement: 'IIT JEE Qualified',
      testimonial: 'The personalized study plan and mock tests helped me crack JEE with AIR 2847. Thank you GlobalEdge!',
      improvement: 'IIT JEE Success'
    },
    {
      name: 'Rahul Kumar',
      grade: 'Class 9, ICSE',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      achievement: 'Math Olympiad Winner',
      testimonial: 'From struggling with basic math to winning the state Math Olympiad - this platform changed my life!',
      improvement: 'Olympiad Winner'
    }
  ];

  parentTestimonials = [
    {
      parentName: 'Mrs. Sunita Sharma',
      childName: 'Arjun',
      childGrade: 'Class 10',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      testimonial: 'My son\'s confidence and grades have improved dramatically. The teachers provide individual attention and regular progress updates. Best investment for my child\'s future!',
      result: 'Son scored 95% in boards'
    },
    {
      parentName: 'Mr. Rajesh Patel',
      childName: 'Priya',
      childGrade: 'Class 12',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Priya was struggling with Physics and Chemistry. Within 3 months, she became the top performer in her class. The teaching methodology is excellent!',
      result: 'Daughter got admission in top engineering college'
    }
  ];

  features = [
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Expert Teachers',
      description: 'Learn from IIT/IIM graduates and experienced educators with proven track records.',
      benefits: ['IIT/IIM qualified teachers', 'Average 8+ years experience', 'Subject matter experts']
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Interactive Learning',
      description: 'Engage with live classes, virtual labs, and gamified learning experiences.',
      benefits: ['Live interactive sessions', 'Virtual science labs', 'Gamified learning modules']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Guaranteed Results',
      description: 'See measurable improvement in grades with our proven teaching methodology.',
      benefits: ['Average 2+ grade improvement', '95% student satisfaction', 'Money-back guarantee']
    },
    {
      icon: 'fas fa-clock',
      title: 'Flexible Timing',
      description: 'Choose from multiple time slots that fit your schedule perfectly.',
      benefits: ['Morning/Evening batches', 'Weekend classes available', 'Recorded sessions']
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Doubt Support',
      description: 'Get instant help with our round-the-clock doubt clearing sessions.',
      benefits: ['WhatsApp doubt support', 'Live doubt sessions', 'AI-powered help']
    },
    {
      icon: 'fas fa-medal',
      title: 'Proven Track Record',
      description: 'Join 50,000+ successful students who achieved their academic goals.',
      benefits: ['50K+ successful students', '98% pass rate', 'Award-winning platform']
    }
  ];

  courses = [
    {
      category: 'Academic',
      title: 'Advanced Mathematics',
      description: 'Master calculus, algebra, and advanced mathematical concepts with expert guidance.',
      duration: '12 weeks',
      badge: 'Most Popular',
      features: ['Live Classes', 'Practice Tests', 'Doubt Support', 'Study Material'],
      students: '15,000+',
      rating: '4.9',
      originalPrice: '15,999',
      currentPrice: '7,999',
      discount: '50'
    },
    {
      category: 'Academic',
      title: 'Science Fundamentals',
      description: 'Explore physics, chemistry, and biology through interactive experiments.',
      duration: '16 weeks',
      badge: 'Best Seller',
      features: ['Virtual Labs', 'Animated Videos', 'Mock Tests', 'Expert Teachers'],
      students: '12,000+',
      rating: '4.8',
      originalPrice: '18,999',
      currentPrice: '9,499',
      discount: '50'
    },
    {
      category: 'Professional',
      title: 'Full Stack Web Development',
      description: 'Build modern web applications using cutting-edge technologies and frameworks.',
      duration: '20 weeks',
      badge: 'Career Focused',
      features: ['Live Projects', 'Industry Mentors', 'Job Assistance', 'Certification'],
      students: '8,000+',
      rating: '4.9',
      originalPrice: '25,999',
      currentPrice: '12,999',
      discount: '50'
    },
    {
      category: 'Professional',
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      duration: '18 weeks',
      badge: 'High Demand',
      features: ['React Native', 'Flutter', 'App Store Deployment', 'Portfolio Building'],
      students: '6,000+',
      rating: '4.7',
      originalPrice: '22,999',
      currentPrice: '11,499',
      discount: '50'
    }
  ];

  stats = [
    { number: '50K+', label: 'Students Enrolled' },
    { number: '500+', label: 'Expert Instructors' },
    { number: '1000+', label: 'Courses Available' },
    { number: '95%', label: 'Success Rate' }
  ];

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  showDropdown(dropdown: string) {
    this.dropdownStates[dropdown as keyof typeof this.dropdownStates] = true;
  }

  hideDropdown(dropdown: string) {
    this.dropdownStates[dropdown as keyof typeof this.dropdownStates] = false;
  }

  openBookingForm(type: string) {
    if (type === 'consultation') {
      this.modalTitle = 'Book a Free Consultation';
      this.buttonText = 'Book Consultation';
      this.formData.message = 'need free consultation';
    } else {
      this.modalTitle = 'Book a Free Demo';
      this.buttonText = 'Book Demo';
      this.formData.message = 'need free demo';
    }
    
    // Open Bootstrap modal
    const modalElement = document.getElementById('bookingModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  openEnrollmentForm(courseTitle?: string) {
    this.modalTitle = 'Enroll Now - Get 50% OFF!';
    this.buttonText = 'Enroll Now';
    if (courseTitle) {
      this.enrollmentData.courseInterest = courseTitle;
    }
    
    // Open Bootstrap modal
    const modalElement = document.getElementById('enrollmentModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  closeDemoForm() {
    const modalElement = document.getElementById('bookingModal');
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }

  submitForm() {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdAeToorwMsxejfqIbczqr3XBBbRwpb9Sq4P9B2ihth0ZKQwA/formResponse';
    
    if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.grade || !this.formData.board) {
      alert('❌ Please fill in all fields.');
      return;
    }

    const form = new FormData();
    form.append('entry.1419253346', this.formData.name);
    form.append('entry.918774199', this.formData.email);
    form.append('entry.1773824258', this.formData.phone);
    form.append('entry.1604616735', this.formData.grade);
    form.append('entry.389492732', this.formData.board);

    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        this.successMsg = '✅ Your demo has been booked! We\'ll contact you soon.';
        alert(this.successMsg);
        this.closeDemoForm();
        this.formData = { name: '', email: '', phone: '', grade: '', board: '', message: 'need free demo' };
      }).catch(() => {
        alert('❌ Something went wrong. Please try again.');
      });
  }

  submitEnrollmentForm() {
    // Enhanced Google Form URL for enrollment (you'll need to create a new form)
    const enrollmentFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdAeToorwMsxejfqIbczqr3XBBbRwpb9Sq4P9B2ihth0ZKQwA/formResponse';
    
    if (!this.enrollmentData.studentName || !this.enrollmentData.parentName || !this.enrollmentData.email || 
        !this.enrollmentData.phone || !this.enrollmentData.grade || !this.enrollmentData.board || 
        !this.enrollmentData.preferredTime) {
      alert('❌ Please fill in all required fields.');
      return;
    }

    const form = new FormData();
    form.append('entry.1419253346', this.enrollmentData.studentName);
    form.append('entry.918774199', this.enrollmentData.parentName);
    form.append('entry.1773824258', this.enrollmentData.email);
    form.append('entry.1604616735', this.enrollmentData.phone);
    form.append('entry.389492732', this.enrollmentData.grade);
    form.append('entry.123456789', this.enrollmentData.board);
    form.append('entry.987654321', this.enrollmentData.subjects.join(', '));
    form.append('entry.456789123', this.enrollmentData.preferredTime);
    form.append('entry.789123456', this.enrollmentData.currentPerformance);
    form.append('entry.321654987', this.enrollmentData.goals);
    form.append('entry.654987321', this.enrollmentData.courseInterest);

    fetch(enrollmentFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        this.successMsg = '🎉 Congratulations! Your enrollment is successful! Our team will contact you within 24 hours to schedule your FREE demo session.';
        alert(this.successMsg);
        this.closeEnrollmentForm();
        this.resetEnrollmentForm();
      }).catch(() => {
        alert('❌ Something went wrong. Please try again or contact us directly.');
      });
  }

  closeEnrollmentForm() {
    const modalElement = document.getElementById('enrollmentModal');
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
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
      courseInterest: ''
    };
  }
}