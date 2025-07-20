import { Component } from '@angular/core';
declare const jsPDF: any;

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent {

  currentStep = 1;
  showTimetable = false;
  isGenerating = false;

  formData = {
    studentName: '',
    grade: '',
    studyHours: '',
    startTime: '',
    studyPattern: 'balanced',
    breakDuration: '10',
    includeWeekends: false,
    includeMeals: true,
    includeExercise: false
  };

  availableSubjects = [
    { name: 'Mathematics', icon: 'fas fa-calculator' },
    { name: 'Science', icon: 'fas fa-atom' },
    { name: 'English', icon: 'fas fa-book-open' },
    { name: 'History', icon: 'fas fa-landmark' },
    { name: 'Geography', icon: 'fas fa-globe' },
    { name: 'Physics', icon: 'fas fa-rocket' },
    { name: 'Chemistry', icon: 'fas fa-flask' },
    { name: 'Biology', icon: 'fas fa-dna' },
    { name: 'Computer Science', icon: 'fas fa-code' },
    { name: 'Art', icon: 'fas fa-palette' }
  ];

  selectedSubjects: any[] = [];
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  generatedSchedule: any = {};

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  toggleSubject(subject: any) {
    const index = this.selectedSubjects.findIndex(s => s.name === subject.name);
    if (index > -1) {
      this.selectedSubjects.splice(index, 1);
    } else {
      this.selectedSubjects.push(subject);
    }
  }

  isSubjectSelected(subject: any): boolean {
    return this.selectedSubjects.some(s => s.name === subject.name);
  }

  generateTimetable() {
    if (this.selectedSubjects.length === 0) {
      alert('Please select at least one subject.');
      return;
    }

    this.isGenerating = true;

    // Simulate generation delay
    setTimeout(() => {
      this.createSchedule();
      this.showTimetable = true;
      this.isGenerating = false;
    }, 2000);
  }

  createSchedule() {
    const studyHours = parseInt(this.formData.studyHours);
    const startTime = this.formData.startTime;
    const breakDuration = parseInt(this.formData.breakDuration);
    const includeWeekends = this.formData.includeWeekends;

    // Calculate session duration based on pattern
    let sessionDuration = 45; // default
    switch (this.formData.studyPattern) {
      case 'intensive':
        sessionDuration = 60;
        break;
      case 'frequent':
        sessionDuration = 30;
        break;
    }

    const daysToInclude = includeWeekends ? this.weekDays : this.weekDays.slice(0, 5);

    daysToInclude.forEach(day => {
      this.generatedSchedule[day] = this.generateDaySchedule(
        startTime, studyHours, sessionDuration, breakDuration
      );
    });
  }

  generateDaySchedule(startTime: string, totalHours: number, sessionDuration: number, breakDuration: number) {
    const schedule = [];
    let currentTime = this.parseTime(startTime);
    const totalMinutes = totalHours * 60;
    let studiedMinutes = 0;
    let subjectIndex = 0;

    // Add meal break if included
    if (this.formData.includeMeals && currentTime.hours >= 12 && currentTime.hours <= 14) {
      schedule.push({
        time: this.formatTime(currentTime),
        subject: 'Lunch Break',
        duration: 30,
        type: 'meal'
      });
      currentTime = this.addMinutes(currentTime, 30);
    }

    while (studiedMinutes < totalMinutes) {
      // Add study session
      const subject = this.selectedSubjects[subjectIndex % this.selectedSubjects.length];
      schedule.push({
        time: this.formatTime(currentTime),
        subject: subject.name,
        duration: sessionDuration,
        type: 'study'
      });

      currentTime = this.addMinutes(currentTime, sessionDuration);
      studiedMinutes += sessionDuration;
      subjectIndex++;

      // Add break if not the last session
      if (studiedMinutes < totalMinutes) {
        schedule.push({
          time: this.formatTime(currentTime),
          subject: 'Break',
          duration: breakDuration,
          type: 'break'
        });
        currentTime = this.addMinutes(currentTime, breakDuration);
      }
    }

    // Add exercise if included
    if (this.formData.includeExercise) {
      schedule.push({
        time: this.formatTime(currentTime),
        subject: 'Exercise',
        duration: 30,
        type: 'exercise'
      });
    }

    return schedule;
  }

  parseTime(timeStr: string) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return { hours, minutes };
  }

  formatTime(time: any) {
    const hours = time.hours.toString().padStart(2, '0');
    const minutes = time.minutes.toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  addMinutes(time: any, minutes: number) {
    const totalMinutes = time.hours * 60 + time.minutes + minutes;
    return {
      hours: Math.floor(totalMinutes / 60) % 24,
      minutes: totalMinutes % 60
    };
  }

  editTimetable() {
    this.showTimetable = false;
    this.currentStep = 1;
  }

  downloadPDF() {
    // Load jsPDF library dynamically
    if (typeof jsPDF === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.onload = () => this.generatePDF();
      document.head.appendChild(script);
    } else {
      this.generatePDF();
    }
  }

  generatePDF() {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 102);
    doc.text('Personal Study Timetable', 20, 30);

    // Student info
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Student: ${this.formData.studentName}`, 20, 50);
    doc.text(`Grade: ${this.formData.grade}`, 20, 60);
    doc.text(`Daily Study Hours: ${this.formData.studyHours}`, 20, 70);
    doc.text(`Study Pattern: ${this.formData.studyPattern}`, 120, 60);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 120, 70);

    let yPosition = 90;

    // Weekly schedule
    Object.keys(this.generatedSchedule).forEach(day => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      }

      doc.setFontSize(14);
      doc.setTextColor(0, 86, 179);
      doc.text(day, 20, yPosition);
      yPosition += 10;

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);

      this.generatedSchedule[day].forEach((slot: any) => {
        const text = `${slot.time} - ${slot.subject} (${slot.duration}min)`;
        doc.text(text, 25, yPosition);
        yPosition += 7;
      });

      yPosition += 5;
    });

    doc.save(`${this.formData.studentName}_Timetable.pdf`);
  }
}
