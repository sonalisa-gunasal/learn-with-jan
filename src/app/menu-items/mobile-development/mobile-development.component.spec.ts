import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopmentComponent } from './mobile-development.component';

describe('MobileDevelopmentComponent', () => {
  let component: MobileDevelopmentComponent;
  let fixture: ComponentFixture<MobileDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
