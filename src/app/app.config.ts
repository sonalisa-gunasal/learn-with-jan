import { provideRouter, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'book-demo', component: LandingComponent },
  { path: 'consultation', component: LandingComponent },
  { path: 'about', component: LandingComponent } // placeholder for now
];

export const appConfig = {
  providers: [provideRouter(routes)]
};
