import { Component } from '@angular/core';

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [],
  templateUrl: './english.component.html',
  styleUrl: './english.component.css'
})
export class EnglishComponent {
  englishCourses = [
    {
      title: 'Grammar & Composition',
      level: 'Beginner',
      description: 'Build strong foundation in English grammar and writing skills.',
      duration: '8 weeks',
      price: '$89'
    },
    {
      title: 'Creative Writing',
      level: 'Intermediate',
      description: 'Develop your storytelling and creative expression abilities.',
      duration: '10 weeks',
      price: '$119'
    },
    {
      title: 'Literature Analysis',
      level: 'Advanced',
      description: 'Analyze classic and contemporary literary works.',
      duration: '12 weeks',
      price: '$139'
    },
    {
      title: 'Public Speaking',
      level: 'Intermediate',
      description: 'Overcome fear and become a confident public speaker.',
      duration: '6 weeks',
      price: '$99'
    },
    {
      title: 'Business Communication',
      level: 'Intermediate',
      description: 'Professional writing and communication for the workplace.',
      duration: '8 weeks',
      price: '$109'
    },
    {
      title: 'IELTS/TOEFL Preparation',
      level: 'Advanced',
      description: 'Prepare for international English proficiency tests.',
      duration: '12 weeks',
      price: '$149'
    }
  ];

  enrollCourse(courseTitle: string) {
    alert(`Enrolling in ${courseTitle}. You will be redirected to the enrollment form.`);
  }
}