import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showDemoForm = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    grade: '',
    board: '',
    message: ''
  };
  successMsg = '';


  openDemoForm(): void {
    this.showDemoForm = true;
  }

  closeDemoForm(): void {
    this.showDemoForm = false;
  }

  submitForm() {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdAeToorwMsxejfqIbczqr3XBBbRwpb9Sq4P9B2ihth0ZKQwA/formResponse';
    if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.grade || !this.formData.board) {
      alert('❌ Please fill in all fields.');
      return;
    }
    const form = new FormData();
    form.append('entry.1419253346', this.formData.name);
    form.append('entry.918774199', this.formData.email);
    form.append('entry.1773824258', this.formData.phone);
    form.append('entry.1604616735', this.formData.grade);
    form.append('entry.389492732', this.formData.board);

    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(() => {
        this.successMsg = '✅ Your demo has been booked! We’ll contact you soon.';
        alert(this.successMsg);
        this.closeDemoForm();
        this.formData = { name: '', email: '', phone: '', grade: '', board: '', message: 'need free demo' };
      }).catch(() => {
        alert('❌ Something went wrong. Please try again.');
      });
  }
}
