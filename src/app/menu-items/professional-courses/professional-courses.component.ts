import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-courses.component.html',
  styleUrl: './professional-courses.component.css'
})
export class ProfessionalCoursesComponent {
  professionalCourses = [
    {
      id: 'web-dev',
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
      duration: '6 months',
      level: 'Beginner to Advanced',
      price: '₹49,999',
      originalPrice: '₹99,999',
      features: [
        'HTML5, CSS3, JavaScript ES6+',
        'React.js & Redux',
        'Node.js & Express.js',
        'MongoDB & Database Design',
        'RESTful APIs & GraphQL',
        'Deployment & DevOps'
      ],
      skills: ['Frontend Development', 'Backend Development', 'Database Management', 'API Development'],
      rating: 4.8,
      students: 2500
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile apps for iOS and Android using React Native and Flutter.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      duration: '5 months',
      level: 'Intermediate',
      price: '₹39,999',
      originalPrice: '₹79,999',
      features: [
        'React Native Development',
        'Flutter & Dart',
        'iOS & Android Publishing',
        'Native Device Features',
        'State Management',
        'App Store Optimization'
      ],
      skills: ['Mobile Development', 'Cross-platform', 'UI/UX Design', 'App Publishing'],
      rating: 4.7,
      students: 1800
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Learn Python, machine learning, and data visualization to become a data scientist.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      duration: '8 months',
      level: 'Beginner to Advanced',
      price: '₹59,999',
      originalPrice: '₹119,999',
      features: [
        'Python Programming',
        'Pandas & NumPy',
        'Machine Learning Algorithms',
        'Data Visualization',
        'SQL & Database Analytics',
        'Deep Learning Basics'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics'],
      rating: 4.9,
      students: 3200
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      description: 'Master SEO, social media marketing, Google Ads, and content marketing strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      duration: '4 months',
      level: 'Beginner',
      price: '₹29,999',
      originalPrice: '₹59,999',
      features: [
        'SEO & SEM Strategies',
        'Social Media Marketing',
        'Google Ads & Analytics',
        'Content Marketing',
        'Email Marketing',
        'Conversion Optimization'
      ],
      skills: ['SEO', 'Social Media', 'PPC Advertising', 'Analytics'],
      rating: 4.6,
      students: 4100
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Professional',
      description: 'Design beautiful and user-friendly interfaces using Figma, Adobe XD, and design principles.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      duration: '5 months',
      level: 'Beginner to Intermediate',
      price: '₹34,999',
      originalPrice: '₹69,999',
      features: [
        'Design Thinking Process',
        'Figma & Adobe XD',
        'User Research Methods',
        'Wireframing & Prototyping',
        'Visual Design Principles',
        'Usability Testing'
      ],
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Design Tools'],
      rating: 4.8,
      students: 2800
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing & AWS',
      description: 'Master cloud technologies with AWS, Azure, and Google Cloud Platform.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      duration: '6 months',
      level: 'Intermediate to Advanced',
      price: '₹54,999',
      originalPrice: '₹109,999',
      features: [
        'AWS Core Services',
        'Cloud Architecture',
        'DevOps & CI/CD',
        'Containerization (Docker)',
        'Kubernetes Orchestration',
        'Cloud Security'
      ],
      skills: ['AWS', 'DevOps', 'Docker', 'Kubernetes'],
      rating: 4.7,
      students: 1900
    }
  ];
}