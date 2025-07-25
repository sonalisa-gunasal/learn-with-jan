import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCoursesComponent } from './professional-courses.component';

describe('ProfessionalCoursesComponent', () => {
  let component: ProfessionalCoursesComponent;
  let fixture: ComponentFixture<ProfessionalCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
