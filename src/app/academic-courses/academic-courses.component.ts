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
        description: 'Build rock-solid foundations with concept-based learning and real-life examples. Perfect preparation for high school rigor! NCERT and all major boards covered.',
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
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
        route: '/grade-9',
        gradeIcon: '📘',
        subjects: ['Mathematics', 'Physics', 'Chemistry']
      },
      {
        category: 'Grade 10 Mastery',
        title: 'Board-Level Concept Mastery 📗',
        description: 'Master every chapter with advanced worksheets, mock exams, and proven time management techniques for board success! NCERT and all major boards covered.',
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
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
        route: '/grade-10',
        gradeIcon: '📗',
        subjects: ['Mathematics', 'Physics', 'Chemistry']
      },
      {
        category: 'Grade 11 Deep Dive',
        title: 'Core Sciences Deep Dive 📕',
        description: 'Dive deep into PCM stream with theory-practical integration, derivations, and advanced board preparation. NCERT and all major boards covered.',
        duration: '36 weeks',
        badge: 'Board Ready',
        features: [
          'Math | Physics | Chemistry (PCM)',
          'Theory + Practical Integration',
          'Derivations & Formula Mastery',
          'Board Exam Preparation',
          'Dedicated Subject Mentors'
        ],
        students: '16,800+',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
        route: '/grade-11',
        gradeIcon: '📕',
        subjects: ['Mathematics', 'Physics', 'Chemistry']
      },
      {
        category: 'Grade 12 Excellence',
        title: 'Peak Preparation for Boards & Beyond 📙',
        description: 'Intensive board revision with previous year papers, answer writing strategies, and comprehensive performance monitoring! NCERT and all major boards covered.',
        duration: '36 weeks',
        badge: 'Board Excellence',
        features: [
          'Math | Physics | Chemistry',
          'Intensive Board Revision',
          'Previous Year Papers Practice',
          'Answer Writing Strategies',
          'Regular Performance Updates'
        ],
        students: '25,200+',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
        route: '/grade-12',
        gradeIcon: '📙',
        subjects: ['Mathematics', 'Physics', 'Chemistry']
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