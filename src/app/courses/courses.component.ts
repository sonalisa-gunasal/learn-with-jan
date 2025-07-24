import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(private router: Router) { }

  courses: any[] = [];

  ngOnInit() {
    this.courses = [
      {
        category: 'Math Mastery',
        title: 'Math Made Easy & Fun',
        description: 'Turn your math fears into math superpowers! From basic algebra to advanced calculus - we make it click!',
        duration: '12 weeks',
        badge: 'Most Popular',
        features: ['Interactive Problem Solving', 'Math Games', 'Step-by-Step Solutions', 'Exam Prep'],
        students: '15,000+',
        rating: '4.9',
        originalPrice: '8,999',
        currentPrice: '2,999',
        discount: '70',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
        route: '/math'
      },
      {
        category: 'Science Squad',
        title: 'Science Like Never Before',
        description: 'Blow your mind with cool experiments and make physics, chemistry & biology your best friends!',
        duration: '16 weeks',
        badge: 'Best Seller',
        features: ['Virtual Lab Experiments', '3D Animations', 'Real-world Applications', 'Concept Maps'],
        students: '12,000+',
        rating: '4.8',
        originalPrice: '9,999',
        currentPrice: '3,499',
        discount: '65',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
        route: '/science'
      },
      {
        category: 'English Excellence',
        title: 'English Communication Pro',
        description: 'Speak, write, and express like a boss! Perfect your grammar, vocabulary, and communication skills.',
        duration: '10 weeks',
        badge: 'Confidence Builder',
        features: ['Speaking Practice', 'Grammar Games', 'Creative Writing', 'Public Speaking'],
        students: '8,500+',
        rating: '4.7',
        originalPrice: '6,999',
        currentPrice: '2,499',
        discount: '65',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
        route: '/english'
      },
      {
        category: 'Exam Prep',
        title: 'Board Exam Champion',
        description: 'Crush your board exams with confidence! Complete preparation for CBSE, ICSE, and State boards.',
        duration: '20 weeks',
        badge: 'Results Guaranteed',
        features: ['Previous Year Papers', 'Mock Tests', 'Time Management', 'Stress-free Prep'],
        students: '20,000+',
        rating: '4.9',
        originalPrice: '12,999',
        currentPrice: '4,999',
        discount: '62',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
        route: '/courses'
      },
      {
        category: 'Competitive Edge',
        title: 'JEE/NEET Preparation',
        description: 'Your dream college awaits! Master JEE/NEET with our proven strategies and expert guidance.',
        duration: '24 weeks',
        badge: 'Dream Achiever',
        features: ['IIT/Medical College Prep', 'Mock Tests', 'Rank Prediction', 'Counseling Support'],
        students: '10,000+',
        rating: '4.8',
        originalPrice: '19,999',
        currentPrice: '7,999',
        discount: '60',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
        route: '/courses'
      },
      {
        category: 'Study Skills',
        title: 'Smart Study Techniques',
        description: 'Learn how to study smarter, not harder! Master time management, memory techniques, and exam strategies.',
        duration: '8 weeks',
        badge: 'Life Changer',
        features: ['Memory Techniques', 'Time Management', 'Note-taking Skills', 'Stress Management'],
        students: '5,000+',
        rating: '4.6',
        originalPrice: '4,999',
        currentPrice: '1,999',
        discount: '60',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop',
        route: '/courses'
      }
    ];
    console.log(this.courses)
  }
  navigateToCourse(course: any) {
    this.router.navigate([course.route]);
  }

  openEnrollmentForm() {
    // This will be handled by the parent component
    console.log('Opening enrollment form...');
  }

  openDemoForm() {
    // This will be handled by the parent component
    console.log('Opening demo form...');
  }
}