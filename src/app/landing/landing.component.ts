import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedEnrollmentFormComponent } from '../shared/shared-enrollment-form';
import { SharedConsultationFormComponent } from '../shared/shared-consultation-form';

@Component({
  selector: 'app-landing',
  standalone: true, // Keep 'standalone: true' if your project uses standalone components
  imports: [CommonModule, FormsModule, RouterModule, SharedEnrollmentFormComponent, SharedConsultationFormComponent], // Include modules as needed by your HTML
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] // Ensure this points to your component's CSS file
})
export class LandingComponent {
  // @ViewChildren finds all elements with #submenu (like the 'Boards' li)
  title = 'GlobalEdge';
  isNavbarCollapsed = true;
  modalTitle = '';
  buttonText = '';
  successMsg = '';

  // Shared form visibility controls
  showSharedEnrollmentForm = false;
  showSharedConsultationForm = false;

  dropdownStates = {
    academic: false,
    professional: false,
    boards: false
  };

  // Query form data for hero section
  queryData = {
    name: '',
    number: '',
    email: '',
    message: ''
  };

  submitQueryForm() {
    // Validation: all fields required
    if (!this.queryData.name.trim() || !this.queryData.number.trim() || !this.queryData.email.trim() || !this.queryData.message.trim()) {
      alert('❌ Please fill in all fields before submitting your query.');
      return;
    }
    const form = new FormData();
    form.append('entry.1487966399', this.queryData.name);
    form.append('entry.652009937', this.queryData.email);
    form.append('entry.571912973', this.queryData.number);
    form.append('entry.1266232267', this.queryData.message);
    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdOAsu7IWU0n_T8mvBbYG5nxXJmbQvcnH_9ARlflZqVoUd3zg/formResponse", {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        const successMsg = '🎉 Congratulations! Your Query has been submitted successfully! Our team will contact you within 24 hours to schedule your FREE demo session.';
        alert(successMsg);
        this.queryData = { name: '', number: '', email: '', message: '' };
      }).catch(() => {
        alert('❌ Something went wrong. Please try again or contact us directly.');
      });
  }

  formData = {
    name: '',
    email: '',
    phone: '',
    grade: '',
    board: '',
    message: '',
    courseInterest: ''
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

  // Removed student success stories as per new requirements

  // Removed parent testimonials as per new requirements
  professionalTestimonials = [
    {
      name: 'R. Suresh (Tamil Nadu)',
      title: 'ISO 9001 Lead Auditor',
      testimonial: 'The ISO training was practical and helped me advance my career in quality management.'
    },
    {
      name: 'K. Priya (Tamil Nadu)',
      title: 'ISO 27001 Internal Auditor',
      testimonial: 'The ISMS course was clear and actionable. I could apply the concepts at my workplace immediately.'
    },
    {
      name: 'M. Aravind (Tamil Nadu)',
      title: 'ISO 14001 Environmental Consultant',
      testimonial: 'The trainers are industry experts and the sessions were very interactive.'
    }
  ];

  features = [
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Expert Teachers',
      description: 'Learn from experienced educators with proven track records.',
      benefits: [
        'Qualified teachers',
        'Average 8+ years experience',
        'Subject matter experts',
        'Certified ISO Trainers with Industry Experience',
        'Separate Mentor for Every Student'
      ]
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Interactive Learning',
      description: 'Engage with live classes, virtual labs, and gamified learning experiences.',
      benefits: ['Live interactive sessions', 'Virtual science labs', 'Gamified learning modules']
    },
    {
      icon: 'fas fa-clock',
      title: 'Flexible Timing',
      description: 'Choose from multiple time slots that fit your schedule perfectly.',
      benefits: [
        'Morning/Evening batches',
        'Weekend classes available',
        'Recorded sessions',
        'Flexible Online & Offline Batches'
      ]
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Doubt Support',
      description: 'Get instant help with our round-the-clock doubt clearing sessions.',
      benefits: ['WhatsApp doubt support', 'Live doubt sessions', 'AI-powered help']
    }
  ];

  courses = [
    {
      category: 'Academic Tuition (Grades 9–12)',
      icon: 'fas fa-book-open',
      title: '📘 Academic Tuition',
      description: 'Personalized mentoring and board-focused preparation for high school success. Build a strong foundation for board exams with our expert faculty. NCERT, CBSE, ICSE, and State Boards covered.',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      features: [
        'Individual attention & progress tracking',
        'Board-specific curriculum (CBSE/ICSE/State)',
        'Live interactive classes & doubt clearing',
        'Regular assessments & feedback',
        'Flexible online/offline batches'
      ],
      badge: 'Top Rated',
      students: '15,000+',
      duration: 'Ongoing',
      priceInfo: 'Contact for details'
    },
    {
      category: 'Professional ISO Training',
      icon: 'fas fa-certificate',
      title: '🎓 Professional ISO Training',
      description: 'Advance your career with globally recognized ISO Lead/Internal Auditor Certification programs. Learn from certified industry experts and gain practical skills for QMS, EMS, OHSMS, FSMS, ISMS, EnMS & more.',
      courses: [
        'ISO 9001:2015 (QMS)',
        'ISO 14001:2015 (EMS)',
        'ISO 45001:2018 (OHSMS)',
        'ISO 22000:2018 (FSMS)',
        'ISO 27001:2022 (ISMS)',
        'ISO 50001:2018 (EnMS)',
        'And more...'
      ],
      features: [
        'Lead & Internal Auditor courses',
        'Globally valid certification',
        'Industry-experienced ISO trainers',
        'Practical case studies & workshops',
        'Flexible schedules (weekend/weekday)',
        'Placement & career guidance'
      ],
      badge: 'Best Seller',
      students: '5,000+',
      duration: 'Short-term & Fast Track',
      priceInfo: 'Contact for details'
    }
  ];

  stats = [
    { number: '50K+', label: 'Students Enrolled' },
    { number: '500+', label: 'Expert Instructors' },
    { number: '1000+', label: 'Courses Available' },
    { number: '95%', label: 'Success Rate' }
  ];

  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['showDemo'] === 'true') {
        this.openEnrollmentForm();
      }
    });
  }
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

    // Show shared consultation form
    this.showSharedConsultationForm = true;
  }

  openEnrollmentForm(courseTitle?: string) {
    this.modalTitle = 'Enroll Now';
    this.buttonText = 'Enroll Now';
    if (courseTitle) {
      this.enrollmentData.courseInterest = courseTitle;
    }

    // Show shared enrollment form
    this.showSharedEnrollmentForm = true;
  }

  closeDemoForm() {
    this.showSharedConsultationForm = false;
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
        this.successMsg = '✅ Your demo has been booked! We\'ll contact you soon to schedule your FREE session.';
        alert(this.successMsg);
        this.closeDemoForm();
        this.formData = {
          name: '',
          email: '',
          phone: '',
          grade: '',
          board: '',
          message: 'need free demo',
          courseInterest: ''
        };
      }).catch(() => {
        alert('❌ Something went wrong. Please try again.');
      });
  }

  submitEnrollmentForm() {
    // Enhanced Google Form URL for enrollment (you'll need to create a new form)
    const enrollmentFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdAeToorwMsxejfqIbczqr3XBBbRwpb9Sq4P9B2ihth0ZKQwA/formResponse';

    if (!this.enrollmentData.studentName || !this.enrollmentData.parentName || !this.enrollmentData.email ||
      !this.enrollmentData.phone || !this.enrollmentData.grade || !this.enrollmentData.courseInterest ||
      !this.enrollmentData.preferredTime || !this.enrollmentData.learningMode) {
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
    form.append('entry.111222333', this.enrollmentData.learningMode);
    form.append('entry.444555666', this.enrollmentData.previousExperience);
    form.append('entry.777888999', this.enrollmentData.specificRequirements);

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
    this.showSharedEnrollmentForm = false;
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

  // Helper method to get selected course details
  getSelectedCourseDetails() {
    const allCourses = [...this.academicCourses, ...this.professionalCourses];
    return allCourses.find(course => course.value === this.enrollmentData.courseInterest);
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