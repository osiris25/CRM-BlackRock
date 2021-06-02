import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDetailComponent } from './opportunity-detail.component';

describe('OpportunityDetailComponent', () => {
  let component: OpportunityDetailComponent;
  let fixture: ComponentFixture<OpportunityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
