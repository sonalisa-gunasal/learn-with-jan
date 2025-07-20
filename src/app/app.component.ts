import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-with-jan';
  isNavbarCollapsed = true;
  dropdownStates = {
    academic: false,
    professional: false,
    boards: false
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

}

