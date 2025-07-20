import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitContactForm() {
    if (!this.contactData.firstName || !this.contactData.lastName || !this.contactData.email || !this.contactData.subject || !this.contactData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    alert('Thank you for your message! We will get back to you within 24 hours.');
    this.contactData = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
  }
}
