import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipAndTrainingComponent } from './mentorship-and-training.component';

describe('MentorshipAndTrainingComponent', () => {
  let component: MentorshipAndTrainingComponent;
  let fixture: ComponentFixture<MentorshipAndTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorshipAndTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentorshipAndTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
