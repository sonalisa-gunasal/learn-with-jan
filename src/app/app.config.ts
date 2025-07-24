import { provideRouter, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MathComponent } from './menu-items/math/math.component';
import { ScienceComponent } from './menu-items/science/science.component';
import { WebDevelopmentComponent } from './menu-items/web-development/web-development.component';
import { MobileDevelopmentComponent } from './menu-items/mobile-development/mobile-development.component';
import { ContactComponent } from './menu-items/contact/contact.component';
import { QueryComponent } from './menu-items/query/query.component';
import { EnglishComponent } from './menu-items/english/english.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MentorshipAndTrainingComponent } from './mentorship-and-training/mentorship-and-training.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'book-demo', component: LandingComponent },
  { path: 'consultation', component: LandingComponent },
  { path: 'training', component: MentorshipAndTrainingComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'math', component: MathComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'english', component: EnglishComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'mobile-development', component: MobileDevelopmentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'query', component: QueryComponent },
];

export const appConfig = {
  providers: [provideRouter(routes)]
};
