import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {

  queryData = {
    studentName: '',
    grade: '',
    subject: '',
    priority: '',
    question: '',
    email: ''
  };

  frequentQuestions = [
    {
      question: 'How long does it take to get a response?',
      answer: 'Response time depends on priority level, from 1 hour to 48 hours.'
    },
    {
      question: 'Can I ask questions about homework?',
      answer: 'Yes! We provide guidance and explanations to help you understand concepts.'
    },
    {
      question: 'Is this service free?',
      answer: 'Basic query support is free. Premium support is available for enrolled students.'
    }
  ];

  submitQuery() {
    if (!this.queryData.studentName || !this.queryData.grade || !this.queryData.subject || !this.queryData.priority || !this.queryData.question || !this.queryData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    alert('Your query has been submitted successfully! You will receive a response at your email address.');
    this.queryData = { studentName: '', grade: '', subject: '', priority: '', question: '', email: '' };
  }
}
