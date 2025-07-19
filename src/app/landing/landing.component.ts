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
 title = 'Learn with Jan';
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

  features = [
    {
      icon: 'fas fa-star',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and certified educators with years of experience.'
    },
    {
      icon: 'fas fa-laptop',
      title: 'Interactive Learning',
      description: 'Engage with dynamic content, virtual labs, and hands-on projects.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certified Programs',
      description: 'Earn recognized certificates and credentials to advance your career.'
    },
    {
      icon: 'fas fa-users',
      title: 'Community Support',
      description: 'Connect with peers, mentors, and study groups for collaborative learning.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Flexible Schedule',
      description: 'Study at your own pace with 24/7 access to course materials.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Proven Results',
      description: 'Join thousands of successful graduates who achieved their goals with us.'
    }
  ];

  courses = [
    {
      category: 'Academic',
      title: 'Advanced Mathematics',
      description: 'Master calculus, algebra, and advanced mathematical concepts with expert guidance.',
      duration: '12 weeks'
    },
    {
      category: 'Academic',
      title: 'Science Fundamentals',
      description: 'Explore physics, chemistry, and biology through interactive experiments.',
      duration: '16 weeks'
    },
    {
      category: 'Professional',
      title: 'Full Stack Web Development',
      description: 'Build modern web applications using cutting-edge technologies and frameworks.',
      duration: '20 weeks'
    },
    {
      category: 'Professional',
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      duration: '18 weeks'
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
  }}