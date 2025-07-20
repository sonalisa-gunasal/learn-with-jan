import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {

 mathCourses = [
    {
      title: 'Basic Algebra',
      level: 'Beginner',
      description: 'Learn fundamental algebraic concepts and problem-solving techniques.',
      duration: '8 weeks',
      price: '$99'
    },
    {
      title: 'Advanced Calculus',
      level: 'Advanced',
      description: 'Master differential and integral calculus with real-world applications.',
      duration: '12 weeks',
      price: '$149'
    },
    {
      title: 'Geometry & Trigonometry',
      level: 'Intermediate',
      description: 'Explore geometric shapes, angles, and trigonometric functions.',
      duration: '10 weeks',
      price: '$119'
    },
    {
      title: 'Statistics & Probability',
      level: 'Intermediate',
      description: 'Analyze data and understand probability distributions.',
      duration: '8 weeks',
      price: '$109'
    },
    {
      title: 'Linear Algebra',
      level: 'Advanced',
      description: 'Study vectors, matrices, and linear transformations.',
      duration: '10 weeks',
      price: '$139'
    },
    {
      title: 'Number Theory',
      level: 'Expert',
      description: 'Dive deep into properties of integers and prime numbers.',
      duration: '14 weeks',
      price: '$179'
    }
  ];

  enrollCourse(courseTitle: string) {
    alert(`Enrolling in ${courseTitle}. You will be redirected to the enrollment form.`);
  }
}