import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-academic-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './academic-courses.component.html',
  styleUrl: './academic-courses.component.css'
})
export class AcademicCoursesComponent {

  constructor(private router: Router) { }

  courses: any[] = [];

  ngOnInit() {
     this.courses = [
    {
      category: 'Grade 9 Foundation',
      title: 'Strong Fundamentals for Future Success 📘',
      description: 'Build rock-solid foundations with concept-based learning and real-life examples. Perfect preparation for high school rigor!',
      duration: '36 weeks',
      badge: 'Foundation Builder',
      features: [
        'Math | Physics | Chemistry',
        'Weekly Quizzes & Doubt Sessions',
        'Dedicated Personal Mentor',
        'Real-life Examples & Applications',
        'Grade 10 Board Preparation'
      ],
      students: '18,500+',
      rating: '4.9',
      originalPrice: '15,999',
      currentPrice: '5,999',
      discount: '62',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
      route: '/grade-9',
      gradeIcon: '📘',
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      category: 'Grade 10 Mastery',
      title: 'Board-Level Concept Mastery 📗',
      description: 'Master every chapter with advanced worksheets, mock exams, and proven time management techniques for board success!',
      duration: '36 weeks',
      badge: 'Board Champion',
      features: [
        'Math | Physics | Chemistry',
        'NCERT + Advanced Worksheets',
        'Mock Exams & Time Management',
        'CBSE & State Board Support',
        'One-on-One Academic Mentoring'
      ],
      students: '22,000+',
      rating: '4.9',
      originalPrice: '17,999',
      currentPrice: '6,999',
      discount: '61',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      route: '/grade-10',
      gradeIcon: '📗',
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      category: 'Grade 11 Deep Dive',
      title: 'Core Sciences Deep Dive 📕',
      description: 'Dive deep into PCM stream with theory-practical integration, derivations, and JEE/NEET foundation building!',
      duration: '36 weeks',
      badge: 'JEE/NEET Ready',
      features: [
        'Math | Physics | Chemistry (PCM)',
        'Theory + Practical Integration',
        'Derivations & Formula Mastery',
        'JEE/NEET Foundation Prep',
        'Dedicated Subject Mentors'
      ],
      students: '16,800+',
      rating: '4.8',
      originalPrice: '19,999',
      currentPrice: '7,999',
      discount: '60',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
      route: '/grade-11',
      gradeIcon: '📕',
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      category: 'Grade 12 Excellence',
      title: 'Peak Preparation for Boards & Beyond 📙',
      description: 'Intensive board revision with previous year papers, answer writing strategies, and comprehensive performance monitoring!',
      duration: '36 weeks',
      badge: 'Results Guaranteed',
      features: [
        'Math | Physics | Chemistry',
        'Intensive Board Revision',
        'Previous Year Papers Practice',
        'Answer Writing Strategies',
        'Regular Performance Updates'
      ],
      students: '25,200+',
      rating: '4.9',
      originalPrice: '21,999',
      currentPrice: '8,999',
      discount: '59',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      route: '/grade-12',
      gradeIcon: '📙',
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      category: 'JEE Preparation',
      title: 'JEE Main & Advanced Mastery 🎯',
      description: 'Complete JEE preparation with IIT-level problem solving, rank prediction, and expert mentorship for your dream college!',
      duration: '48 weeks',
      badge: 'IIT Dreams',
      features: [
        'JEE Main & Advanced Prep',
        'IIT-Level Problem Solving',
        'Mock Tests & Rank Prediction',
        'Expert Faculty Guidance',
        'College Counseling Support'
      ],
      students: '12,500+',
      rating: '4.8',
      originalPrice: '29,999',
      currentPrice: '11,999',
      discount: '60',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      route: '/jee',
      gradeIcon: '🎯',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    {
      category: 'NEET Preparation',
      title: 'NEET Excellence Program 🩺',
      description: 'Comprehensive NEET preparation with medical entrance strategies, biology mastery, and guaranteed admission guidance!',
      duration: '48 weeks',
      badge: 'Medical Dreams',
      features: [
        'NEET Complete Preparation',
        'Biology Concept Mastery',
        'Medical Entrance Strategies',
        'AIIMS/JIPMER Preparation',
        'Admission Counseling Support'
      ],
      students: '10,800+',
      rating: '4.7',
      originalPrice: '27,999',
      currentPrice: '10,999',
      discount: '61',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      route: '/neet',
      gradeIcon: '🩺',
      subjects: ['Physics', 'Chemistry', 'Biology']
    }
  ];

    console.log(this.courses)
  }
  navigateToCourse(course: any) {
    this.router.navigate([course.route]);
  }

  openEnrollmentForm(courseTitle?: string) {
    // Get parent component reference and call its method
    const event = new CustomEvent('openEnrollment', { 
      detail: { courseTitle: courseTitle }
    });
    window.dispatchEvent(event);
  }

  openDemoForm(courseTitle?: string) {
    // Get parent component reference and call its method
    const event = new CustomEvent('openDemo', { 
      detail: { courseTitle: courseTitle }
    });
    window.dispatchEvent(event);
  }
}