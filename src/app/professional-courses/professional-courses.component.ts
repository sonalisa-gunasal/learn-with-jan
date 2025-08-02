import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-professional-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './professional-courses.component.html',
  styleUrl: './professional-courses.component.css'
})
export class ProfessionalCoursesComponent implements OnInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    // Ensure videos are muted and handle autoplay
    this.setupVideoElements();
  }

  private setupVideoElements() {
    const videos = document.querySelectorAll('.hero-bg-video');
    videos.forEach((video: any) => {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      
      // Handle autoplay issues on mobile
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((error: any) => {
          console.log('Video autoplay failed:', error);
        });
      });
    });
  }


  courses: any[] = [];

  ngOnInit(): void {

    this.courses = [
      {
        category: 'Quality Management',
        title: 'ISO 9001:2015 – Quality Management System (QMS) 🏆',
        description: 'Master quality management principles, customer satisfaction, and process improvement with ISO 19011 auditing techniques for professional excellence!',
        duration: '5 days',
        badge: 'Lead Auditor',
        features: [
          'Quality Management Principles',
          'Customer Satisfaction Focus',
          'Process Improvement Techniques',
          'ISO 19011 & ISO/IEC 17021 Standards',
          'Practical Case Studies & Certification'
        ],
        students: '15,000+',
        rating: '4.9',
        originalPrice: '25,999',
        currentPrice: '12,999',
        discount: '50',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=250&fit=crop',
        route: '/iso-9001',
        courseIcon: '🏆',
        targetAudience: ['Quality Managers', 'QMS Implementers', 'Auditors']
      },
      {
        category: 'Environmental Management',
        title: 'ISO 14001:2015 – Environmental Management System (EMS) 🌱',
        description: 'Develop expertise in environmental management auditing, regulatory compliance, and sustainability risk assessment for environmental excellence!',
        duration: '5 days',
        badge: 'EMS Expert',
        features: [
          'Environmental Management Systems',
          'Regulatory Compliance Auditing',
          'Environmental Risk Assessment',
          'Sustainability Initiatives',
          'Real-life Environmental Case Studies'
        ],
        students: '12,500+',
        rating: '4.8',
        originalPrice: '26,999',
        currentPrice: '13,999',
        discount: '48',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
        route: '/iso-14001',
        courseIcon: '🌱',
        targetAudience: ['EHS Professionals', 'Consultants', 'Environmental Officers']
      },
      {
        category: 'Health & Safety',
        title: 'ISO 45001:2018 – Occupational Health & Safety (OHSMS) 🛡️',
        description: 'Gain competency in workplace safety auditing, hazard identification, and risk control for comprehensive occupational health management!',
        duration: '5 days',
        badge: 'Safety Leader',
        features: [
          'Workplace Health & Safety Systems',
          'Hazard Identification Techniques',
          'Risk Control Methodologies',
          'ISO 45001 Compliance Requirements',
          'Practical Safety Auditing Skills'
        ],
        students: '18,200+',
        rating: '4.9',
        originalPrice: '27,999',
        currentPrice: '14,999',
        discount: '46',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
        route: '/iso-45001',
        courseIcon: '🛡️',
        targetAudience: ['HSE Managers', 'Safety Auditors', 'OHS Practitioners']
      },
      {
        category: 'Food Safety',
        title: 'ISO 22000:2018 – Food Safety Management System (FSMS) 🍎',
        description: 'Master food safety auditing with HACCP principles and ISO 22000 requirements across the entire food supply chain ecosystem!',
        duration: '5 days',
        badge: 'Food Safety Pro',
        features: [
          'Food Safety Management Auditing',
          'HACCP Principles & Implementation',
          'ISO 22000 Requirements Mastery',
          'Food Supply Chain Management',
          'Industry-specific Case Studies'
        ],
        students: '9,800+',
        rating: '4.8',
        originalPrice: '28,999',
        currentPrice: '15,999',
        discount: '45',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
        route: '/iso-22000',
        courseIcon: '🍎',
        targetAudience: ['QA/QC Professionals', 'Food Safety Officers', 'HACCP Team Leaders']
      },
      {
        category: 'Food Safety Certification',
        title: 'FSSC 22000 – Food Safety System Certification (V6) 🏅',
        description: 'Advanced GFSI-recognized certification combining ISO 22000, ISO/TS 22002 for comprehensive food manufacturer auditing expertise!',
        duration: '6 days',
        badge: 'GFSI Certified',
        features: [
          'GFSI-Recognized System Auditing',
          'ISO 22000 + ISO/TS 22002 Integration',
          'FSSC Version 6 Requirements',
          'Food Manufacturing Focus',
          'Global Standard Recognition'
        ],
        students: '7,600+',
        rating: '4.9',
        originalPrice: '32,999',
        currentPrice: '18,999',
        discount: '42',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop',
        route: '/fssc-22000',
        courseIcon: '🏅',
        targetAudience: ['Food Industry Professionals', 'Quality Leads', 'Auditors']
      },
      {
        category: 'Information Security',
        title: 'ISO 27001:2022 – Information Security Management (ISMS) 🔐',
        description: 'Understand data security auditing, confidentiality controls, and cybersecurity risk management with latest ISO 27001:2022 standards!',
        duration: '5 days',
        badge: 'Security Expert',
        features: [
          'Information Security Auditing',
          'Data Privacy & Confidentiality',
          'Cybersecurity Risk Management',
          'ISO 27001:2022 Latest Updates',
          'Practical Security Controls'
        ],
        students: '14,300+',
        rating: '4.8',
        originalPrice: '29,999',
        currentPrice: '16,999',
        discount: '43',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
        route: '/iso-27001',
        courseIcon: '🔐',
        targetAudience: ['IT Security Managers', 'CISOs', 'Data Privacy Professionals']
      },
      {
        category: 'Energy Management',
        title: 'ISO 50001:2018 – Energy Management System (EnMS) ⚡',
        description: 'Build expertise in energy auditing, efficiency opportunities identification, and compliance with ISO 50001 for sustainable energy management!',
        duration: '4 days',
        badge: 'Energy Expert',
        features: [
          'Energy Management System Auditing',
          'Energy Efficiency Identification',
          'ISO 50001 Compliance Standards',
          'Sustainable Energy Practices',
          'Cost-saving Opportunities'
        ],
        students: '6,400+',
        rating: '4.7',
        originalPrice: '24,999',
        currentPrice: '13,999',
        discount: '44',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
        route: '/iso-50001',
        courseIcon: '⚡',
        targetAudience: ['Energy Managers', 'Facility Auditors', 'Engineers']
      }
    ];
  }

  navigateToCourse(course: any) {
    this.router.navigate([course.route]);
  }

  openEnrollmentForm(courseTitle?: string) {
    const event = new CustomEvent('openEnrollment', {
      detail: { courseTitle: courseTitle }
    });
    window.dispatchEvent(event);
  }

  openDemoForm(courseTitle?: string) {
    const event = new CustomEvent('openDemo', {
      detail: { courseTitle: courseTitle }
    });
    window.dispatchEvent(event);
  }

  downloadBrochure() {
    // Create a link element to download the brochure
    const link = document.createElement('a');
    link.href = '/assets/Website-GlobalEdgeBrochure.pdf';
    link.download = 'Global-Edge-Academic-Brochure.pdf';
    link.target = '_blank';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show success message
    alert('📄 Brochure download started! Check your downloads folder.');
  }
}

