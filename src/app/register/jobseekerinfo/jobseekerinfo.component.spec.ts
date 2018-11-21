import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerinfoComponent } from './jobseekerinfo.component';

describe('JobseekerinfoComponent', () => {
  let component: JobseekerinfoComponent;
  let fixture: ComponentFixture<JobseekerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
