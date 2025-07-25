import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCoursesComponent } from './academic-courses.component';

describe('AcademicCoursesComponent', () => {
  let component: AcademicCoursesComponent;
  let fixture: ComponentFixture<AcademicCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
